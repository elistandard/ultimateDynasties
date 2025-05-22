'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface DataPoint {
  Year: number
  Division: string
  Team: string
  TRank: number
  Rank: number
}

interface DynastyChartProps {
  data: DataPoint[]
  selectedTeam: string
  onTeamSelect: (team: string) => void
}

// Team color mapping from the original Observable notebook
const teamColors: { [key: string]: string } = {
  'Alabama-Huntsville': '#1f51f3',
  'Arizona': '#D94B3E',
  'Auburn': '#f0812a',
  'BYU': '#FFD700',
  'Boston College': '#bc0032',
  'British Columbia': '#CDA900',
  'Brown': '#964B00',
  'Cal Poly SLO': '#68b0a7',
  'California': '#1D315E',
  'Carleton': '#c1172a',
  'Carnegie Mellon': '#64AE46',
  'Case Western Reserve': '#2AC1DF',
  'Central Florida': '#FEB934',
  'Chabot Community College': '#d6b002',
  'Cincinnati': '#FF0000',
  'Colorado': '#fbd42d',
  'Colorado State': '#008000',
  'Columbia': '#00588c',
  'Connecticut': '#9D2235',
  'Cornell': '#b31b1b',
  'Dartmouth': '#003E10',
  'Delaware': '#2A4395',
  'Duke': '#0E1D55',
  'East Carolina': '#6f4c7a',
  'Eastern Michigan': '#BE5628',
  'Florida': '#fa4616',
  'Florida State': '#972634',
  'Georgetown': '#052e65',
  'George Washington': '#f2c744',
  'Glassboro': '#3C1400',
  'Georgia': '#9f0000',
  'Georgia Tech': '#1f59a3',
  'Harvard': '#FF0000',
  'Illinois': '#EA462A',
  'Indiana': '#ba141a',
  'Iowa': '#e8c03c',
  'Iowa State': '#E01009',
  'James Madison': '#FF6600',
  'Kansas': '#EC2222',
  'Las Positas College': '#C90803',
  'LSU': '#FFA500',
  'Luther': '#1356a3',
  'Maryland': '#700b20',
  'Massachusetts': '#990033',
  'McGill': '#0000FF',
  'Michigan': '#1D3088',
  'Michigan State': '#18453b',
  'Middlebury': '#FF007F',
  'Minnesota': '#7D0326',
  'Minnesota-Duluth': '#222d45',
  'Missouri': '#F04451',
  'MIT': '#000000',
  'NC State': '#5b0909',
  'North Carolina': '#000000',
  'Northeastern': '#D50232',
  'North Texas': '#228b22',
  'Northwestern': '#4B0082',
  'Notre Dame': '#0c2340',
  'Oberlin': '#ff1be1',
  'Ohio': '#305f20',
  'Ohio State': '#FF0000',
  'Oregon': '#154733',
  'Oregon State': '#FF7F00',
  'Ottawa': '#5e0025',
  'Penn': '#706383',
  'Penn State': '#0F2E50',
  'Pittsburgh': '#FFC800',
  'Princeton': '#ff8000',
  'Purdue': '#FFA500',
  "Queen's": '#eac633',
  'Rice': '#002e6c',
  'Rutgers': '#c10436',
  'Saint Louis': '#5171fe',
  'Salisbury': '#feb719',
  'Southern California': '#990033',
  'Stanford': '#800000',
  'SUNY Albany': '#442473',
  'SUNY Binghamton': '#006670',
  'SUNY Purchase': '#FC7C2C',
  'Swarthmore': '#7198cd',
  'SW Missouri State': '#b0083b',
  'Syracuse': '#f46e27',
  'Texas': '#FF7F00',
  'Texas A&M': '#500000',
  'Texas Dallas': '#0060FF',
  'Texas State': '#ab1f2e',
  'Tufts': '#93c6f6',
  'Tulane': '#205746',
  'UC Davis': '#e5c539',
  'UC San Diego': '#0077AA',
  'UC Santa Barbara': '#000000',
  'UC Santa Cruz': '#FFD700',
  'UCLA': '#0000FF',
  'UNC Wilmington': '#127748',
  'Utah': '#ff0000',
  'Utah State': '#2B3775',
  'Vermont': '#005834',
  'Victoria': '#155EAE',
  'Virginia': '#EC6736',
  'Virginia Tech': '#1aa44B',
  'WashU': '#FF0000',
  'Washington': '#4B0082',
  'Wesleyan': '#f2002c',
  'Western Washington': '#A8915B',
  'Whitman': '#3d4da2',
  'William & Mary': '#0C5C32',
  'Williams': '#6415C1',
  'Winona State': '#622F8C',
  'Wisconsin': '#89CFF0',
  'Wisconsin-Milwaukee': '#000000',
  'Yale': '#003061'
}

// Helper to get numeric value for plotting
function getNumericRank(rank: string | number | null | undefined): number | null {
  if (typeof rank === 'number') return rank;
  if (!rank || rank === '?') return null;
  if (typeof rank === 'string' && rank.startsWith('T')) return parseInt(rank.slice(1), 10);
  return parseInt(rank, 10);
}

// Helper to format T_Rank for tooltip/label
function getOrdinalSuffix(num: number) {
  if (num > 3 && num < 21) return 'th';
  switch (num % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function formatTRank(rank: string | number | null | undefined) {
  if (!rank || rank === '?') return '?';
  const n = parseInt(String(rank).replace('T', ''));
  const suffix = getOrdinalSuffix(n);
  return (String(rank).startsWith('T') ? 'Tied for ' : '') + n + suffix;
}

export default function DynastyChart({ data, selectedTeam, onTeamSelect }: DynastyChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    // Clean data: keep Rank as string, skip rows with missing/unknown Rank
    const cleanData = data
      .map(d => ({ ...d, Rank: d.Rank === undefined ? '?' : String(d.Rank), TRank: d.TRank === undefined ? '?' : String(d.TRank) }))
      .filter(d => d.Rank !== '?')

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove()

    // Set up dimensions
    const margin = { top: 30, right: 100, bottom: 70, left: 50 }
    const width = 1000 - margin.left - margin.right
    const height = 500 - margin.top - margin.bottom

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    // Add title
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', -margin.top / 2)
      .attr('text-anchor', 'middle')
      .style('font-size', '20px')
      .style('font-family', 'Lato, sans-serif')
      .text('National Championships')

    // Set up scales
    const minYear = Math.min(...cleanData.map(d => d.Year))
    const maxYear = Math.max(...cleanData.map(d => d.Year))
    const maxRank = Math.max(...cleanData.map(d => getNumericRank(d.Rank) ?? 0))

    const x = d3.scaleLinear()
      .domain([minYear - 0.5, maxYear + 0.5])
      .range([0, width])

    const y = d3.scaleLinear()
      .domain([maxRank + 1, 1])
      .range([height - margin.bottom, margin.top])

    // Create tooltip
    const tooltip = d3.select('body')
      .append('div')
      .attr('class', 'tooltip')
      .style('position', 'absolute')
      .style('visibility', 'hidden')
      .style('background-color', 'white')
      .style('border', '1px solid #ddd')
      .style('border-radius', '4px')
      .style('padding', '8px')
      .style('font-family', 'Lato, sans-serif')
      .style('font-size', '14px')
      .style('pointer-events', 'none')
      .style('z-index', '100')

    // Group data by team
    const teamData = d3.group(cleanData, d => d.Team)

    // Draw lines for non-highlighted teams
    teamData.forEach((teamPoints, team) => {
      if (team === selectedTeam) return
      const sortedData = teamPoints.sort((a, b) => a.Year - b.Year)
      for (let i = 0; i < sortedData.length - 1; i++) {
        const current = sortedData[i]
        const next = sortedData[i + 1]
        const y1 = getNumericRank(current.Rank)
        const y2 = getNumericRank(next.Rank)
        if (y1 === null || y2 === null) continue
        if ((next.Year - current.Year === 1) || (current.Year === 2019 && next.Year === 2021)) {
          const x1 = x(current.Year)
          const x2 = x(next.Year)
          const path = d3.path()
          path.moveTo(x1, y(y1))
          path.bezierCurveTo(
            x1 + (x2 - x1) * 0.5, y(y1),
            x2 - (x2 - x1) * 0.5, y(y2),
            x2, y(y2)
          )
          svg.append('path')
            .attr('fill', 'none')
            .attr('stroke', teamColors[team] || '#ccc')
            .attr('stroke-opacity', 0.2)
            .attr('stroke-width', 0.7)
            .attr('d', path.toString())
        }
      }
    })

    // Draw lines for highlighted team
    const selectedTeamPoints = teamData.get(selectedTeam)
    if (selectedTeamPoints) {
      const sortedData = selectedTeamPoints.sort((a, b) => a.Year - b.Year)
      for (let i = 0; i < sortedData.length - 1; i++) {
        const current = sortedData[i]
        const next = sortedData[i + 1]
        const y1 = getNumericRank(current.Rank)
        const y2 = getNumericRank(next.Rank)
        if (y1 === null || y2 === null) continue
        if ((next.Year - current.Year === 1) || (current.Year === 2019 && next.Year === 2021)) {
          const x1 = x(current.Year)
          const x2 = x(next.Year)
          const path = d3.path()
          path.moveTo(x1, y(y1))
          path.bezierCurveTo(
            x1 + (x2 - x1) * 0.5, y(y1),
            x2 - (x2 - x1) * 0.5, y(y2),
            x2, y(y2)
          )
          svg.append('path')
            .attr('fill', 'none')
            .attr('stroke', teamColors[selectedTeam] || '#000')
            .attr('stroke-width', 2)
            .attr('d', path.toString())
        }
      }
    }

    // Draw non-highlighted points
    svg.selectAll('.background-points')
      .data(cleanData.filter(d => d.Team !== selectedTeam))
      .join('circle')
      .attr('class', 'background-points')
      .attr('cx', d => x(d.Year))
      .attr('cy', d => y(getNumericRank(d.Rank)!))
      .attr('r', 3)
      .attr('fill', d => teamColors[d.Team] || '#ccc')
      .attr('opacity', 0.4)
      .style('cursor', 'pointer')
      .on('mouseover', function(event, d) {
        d3.select(this)
          .attr('r', 6)
          .style('stroke', teamColors[d.Team] || '#ccc')
          .style('stroke-width', 2)
        tooltip
          .style('visibility', 'visible')
          .html(`
            <strong>${d.Team}</strong><br/>
            Year: ${d.Year}<br/>
            Rank: ${formatTRank(d.TRank)}
          `)
          .style('left', `${event.pageX + 15}px`)
          .style('top', `${event.pageY - 15}px`)
      })
      .on('mouseout', function() {
        d3.select(this)
          .attr('r', 3)
          .style('stroke', 'none')
        tooltip.style('visibility', 'hidden')
      })
      .on('click', (event, d) => onTeamSelect(d.Team))

    // Draw highlighted points
    svg.selectAll('.highlighted-points-group')
      .data(cleanData.filter(d => d.Team === selectedTeam))
      .join('g')
      .attr('class', 'highlighted-points-group')
      .attr('transform', d => `translate(${x(d.Year)}, ${y(getNumericRank(d.Rank)!)})`)
      .style('cursor', 'pointer')
      .each(function(d) {
        const group = d3.select(this)
        group.append('circle')
          .attr('r', 11)
          .attr('fill', teamColors[d.Team] || '#000')
        if (getNumericRank(d.Rank) === 1) {
          group.append('text')
            .attr('text-anchor', 'middle')
            .attr('dy', '-1.2em')
            .attr('fill', teamColors[d.Team] || '#000')
            .style('font-size', '14px')
            .text('⭐')
        }
        group.append('text')
          .attr('text-anchor', 'middle')
          .attr('dy', '0.35em')
          .attr('fill', 'white')
          .style('font-size', '9px')
          .style('font-weight', 'bold')
          .text(d.TRank)
      })
      .on('mouseover', function(event, d) {
        const circle = d3.select(this).select('circle')
          .attr('r', 14)
          .style('stroke', '#000')
          .style('stroke-width', 2)
        tooltip
          .style('visibility', 'visible')
          .html(`
            <strong>${d.Team}</strong><br/>
            Year: ${d.Year}<br/>
            Rank: ${formatTRank(d.TRank)}
          `)
          .style('left', `${event.pageX + 15}px`)
          .style('top', `${event.pageY - 15}px`)
      })
      .on('mouseout', function() {
        const circle = d3.select(this).select('circle')
          .attr('r', 11)
          .style('stroke', 'none')
        tooltip.style('visibility', 'hidden')
      })

    // Add axes
    const xAxis = d3.axisBottom(x)
      .tickFormat(d => `'${d.toString().slice(-2)}`)
      .tickValues(d3.range(minYear, maxYear + 1))

    const yAxis = d3.axisLeft(y)
      .tickValues(d3.range(1, maxRank + 1))
      .tickFormat(d3.format('d'))

    // Add vertical grid lines
    svg.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .style('stroke-dasharray', '3,3')
      .style('opacity', 0.2)
      .call(
        d3.axisBottom(x)
          .tickValues([2020])
          .tickSize(-(height - margin.top - margin.bottom))
          .tickFormat(() => '')
      )

    // Add bottom axis
    svg.append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(xAxis)
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('.tick line').remove())
      .call(g => g.selectAll('text')
        .style('font-family', 'Lato, sans-serif')
        .style('font-weight', 'bold')
        .style('fill', '#666666')
        .style('font-size', '12px'))

    // Add left axis
    svg.append('g')
      .call(yAxis)
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('.tick line').remove())
      .call(g => g.selectAll('text')
        .style('font-family', 'Lato, sans-serif')
        .style('font-weight', 'bold')
        .style('fill', '#666666')
        .style('font-size', '12px'))

    // Add axis labels
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', height - margin.bottom / 3)
      .attr('text-anchor', 'middle')
      .style('font-family', 'Lato, sans-serif')
      .style('font-weight', 'bold')
      .text('Year')

    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -(height / 2))
      .attr('y', margin.left / 3)
      .attr('text-anchor', 'middle')
      .style('font-family', 'Lato, sans-serif')
      .style('font-weight', 'bold')
      .text('Rank')

    // Cleanup
    return () => {
      tooltip.remove()
    }
  }, [data, selectedTeam, onTeamSelect])

  return (
    <div className="w-full overflow-x-auto">
      <svg ref={svgRef}></svg>
    </div>
  )
} 