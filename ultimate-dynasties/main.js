// Add this at the top of the file to inject global CSS for selectors and buttons
function _css(md){return md`<style>
input[type="radio"] {
  accent-color: #111;
  margin-right: 8px;
  width: 18px;
  height: 18px;
}
select {
  font-size: 16px;
  padding: 7px 12px;
  border-radius: 6px;
  border: 2px solid #111;
  margin-right: 10px;
  background-color: white;
  cursor: pointer;
}
button {
  font-size: 16px;
  padding: 7px 12px;
  border-radius: 6px;
  border: 2px solid #111;
  background-color: white;
  cursor: pointer;
}
button:hover {
  background-color: #f0f0f0;
}
</style>`}

import { logoMapping, colorData, getOrdinalSuffix, formatTRank } from './data.js';
import rawData from './rawData.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize division selector
    const divisionRadios = document.querySelectorAll('input[name="division"]');
    divisionRadios.forEach(radio => {
        radio.addEventListener('change', handleDivisionChange);
    });

    // Initialize team selector
    const teamSelect = document.getElementById('teamSelect');
    populateTeamSelector(teamSelect);
    teamSelect.addEventListener('change', handleTeamChange);

    // Initialize appendix toggle
    const toggleButton = document.getElementById('toggleAppendix');
    const appendix = document.getElementById('appendix');
    toggleButton.addEventListener('click', () => {
        appendix.classList.toggle('hidden');
    });

    // Initialize charts
    initializeChampionshipChart();
    initializeDotChart();

    // Trigger initial division change
    const initialDivision = document.querySelector('input[name="division"]:checked').value;
    handleDivisionChange({ target: { value: initialDivision } });
});

// Handle division change
function handleDivisionChange(event) {
    const division = event.target.value;
    updateCharts(division);
    
    // Update team selector for new division
    const teamSelect = document.getElementById('teamSelect');
    populateTeamSelector(teamSelect);
}

// Handle team change
function handleTeamChange(event) {
    const selectedTeam = event.target.value;
    updateTeamSummary(selectedTeam);
    updateCharts(null, selectedTeam);
}

// Populate team selector
function populateTeamSelector(select) {
    const division = document.querySelector('input[name="division"]:checked').value;
    const teams = [...new Set(rawData
        .filter(d => d.Division === division)
        .map(d => d.Team))]
        .sort();
    
    select.innerHTML = '<option value="">Select a team</option>' +
        teams.map(team => `<option value="${team}">${team}</option>`).join('');
}

// Update team summary section
function updateTeamSummary(team) {
    const logoContainer = document.querySelector('.team-logo');
    const statsContainer = document.querySelector('.team-stats');

    if (!team) {
        logoContainer.innerHTML = '';
        statsContainer.innerHTML = '';
        return;
    }

    // Update logo
    const logoUrl = logoMapping.find(d => d.team === team)?.url;
    logoContainer.innerHTML = `<img src="${logoUrl}" alt="${team} logo" style="max-width: 100%; max-height: 100%;">`;

    // Get team stats
    const division = document.querySelector('input[name="division"]:checked').value;
    const teamData = rawData
        .filter(d => d.Team === team && d.Division === division)
        .sort((a, b) => a.Year - b.Year);

    if (teamData.length === 0) {
        statsContainer.innerHTML = '<p>No data available for selected team</p>';
        return;
    }

    // Calculate stats
    const mostRecent = teamData[teamData.length - 1];
    const championships = teamData.filter(d => d.Rank === 1).length;
    const championshipYears = teamData
        .filter(d => d.Rank === 1)
        .map(d => d.Year)
        .join(', ');

    // Update stats
    statsContainer.innerHTML = `
        <h2>${team}</h2>
        <div class="team-stats-content">
            <p>Most recent finish: ${formatTRank(mostRecent.T_Rank)} (${mostRecent.Year})</p>
            <p>Championships: ${championships}${championships > 0 ? ` (${championshipYears})` : ''}</p>
            <p>Years Active: ${teamData.map(d => d.Year).join(', ')}</p>
        </div>
    `;
}

// Initialize championship chart
function initializeChampionshipChart() {
    const container = document.getElementById('championshipChart');
    if (!container) return;

    // Clear any existing SVG
    d3.select(container).selectAll('svg').remove();

    const width = container.clientWidth;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // Create scales
    const x = d3.scaleBand()
        .range([margin.left, width - margin.right])
        .padding(0.1);

    const y = d3.scaleLinear()
        .range([height - margin.bottom, margin.top]);

    // Create axes
    const xAxis = svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height - margin.bottom})`);

    const yAxis = svg.append('g')
        .attr('class', 'y-axis')
        .attr('transform', `translate(${margin.left},0)`);

    // Add title
    svg.append('text')
        .attr('class', 'chart-title')
        .attr('x', width / 2)
        .attr('y', margin.top)
        .attr('text-anchor', 'middle')
        .text('Championship History');

    // Store the scales and axes for later updates
    container._scales = { x, y };
    container._axes = { xAxis, yAxis };
    container._svg = svg;
}

// Update championship chart
function updateChampionshipChart(division) {
    const container = document.getElementById('championshipChart');
    if (!container) return;
    
    // Initialize chart if not already initialized
    if (!container._scales || !container._svg) {
        initializeChampionshipChart();
    }
    
    const { x, y } = container._scales;
    const { xAxis, yAxis, svg } = container._axes;

    // Clear existing bars
    svg.selectAll('.bar').remove();

    // Get data
    const championshipData = d3.rollup(
        rawData.filter(d => d.Division === division),
        v => ({
            count: v.filter(d => d.Rank === 1).length,
            years: v.filter(d => d.Rank === 1).map(d => d.Year).sort()
        }),
        d => d.Team
    );

    const data = Array.from(championshipData, ([team, data]) => ({
        team,
        championships: data.count,
        years: data.years
    }))
    .filter(d => d.championships > 0)
    .sort((a, b) => b.championships - a.championships)
    .slice(0, 10);

    if (!data || data.length === 0) return;

    // Update scales
    x.domain(data.map(d => d.team));
    y.domain([0, d3.max(data, d => d.championships)]);

    // Update axes
    xAxis.call(d3.axisBottom(x));
    yAxis.call(d3.axisLeft(y));

    // Update bars
    const bars = svg.selectAll('.bar')
        .data(data);

    bars.enter()
        .append('rect')
        .attr('class', 'bar')
        .merge(bars)
        .attr('x', d => x(d.team))
        .attr('y', d => y(d.championships))
        .attr('width', x.bandwidth())
        .attr('height', d => y(0) - y(d.championships))
        .attr('fill', d => colorData.find(c => c.team === d.team)?.color || '#999');

    bars.exit().remove();
}

// Initialize dot chart
function initializeDotChart() {
    const container = document.getElementById('dotChart');
    if (!container) return;

    // Clear any existing SVG
    d3.select(container).selectAll('svg').remove();

    const width = container.clientWidth;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // Create scales
    const x = d3.scaleLinear()
        .range([margin.left, width - margin.right]);

    const y = d3.scaleBand()
        .range([margin.top, height - margin.bottom])
        .padding(0.1);

    // Create axes
    const xAxis = svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height - margin.bottom})`);

    const yAxis = svg.append('g')
        .attr('class', 'y-axis')
        .attr('transform', `translate(${margin.left},0)`);

    // Add title
    svg.append('text')
        .attr('class', 'chart-title')
        .attr('x', width / 2)
        .attr('y', margin.top)
        .attr('text-anchor', 'middle')
        .text('Team Rankings Over Time');

    // Store the scales and axes for later updates
    container._scales = { x, y };
    container._axes = { xAxis, yAxis };
    container._svg = svg;
}

// Update dot chart
function updateDotChart(division, selectedTeam) {
    const container = document.getElementById('dotChart');
    if (!container) return;
    
    // Initialize chart if not already initialized
    if (!container._scales || !container._svg) {
        initializeDotChart();
    }
    
    const { x, y } = container._scales;
    const { xAxis, yAxis, svg } = container._axes;

    // Clear existing dots
    svg.selectAll('.dot').remove();

    // Get data
    const teamData = d3.rollup(
        rawData.filter(d => d.Division === division),
        v => ({
            years: v.map(d => d.Year),
            rankings: v.map(d => ({ year: d.Year, rank: d.Rank }))
        }),
        d => d.Team
    );

    const data = Array.from(teamData, ([team, data]) => ({
        team,
        years: data.years,
        rankings: data.rankings
    }))
    .filter(d => d.years.length >= 5)
    .sort((a, b) => b.years.length - a.years.length)
    .slice(0, 10);

    if (!data || data.length === 0) return;

    // Update scales
    x.domain([
        d3.min(data, d => d3.min(d.years)),
        d3.max(data, d => d3.max(d.years))
    ]);
    y.domain(data.map(d => d.team));

    // Update axes
    xAxis.call(d3.axisBottom(x));
    yAxis.call(d3.axisLeft(y));

    // Update dots
    const dots = svg.selectAll('.dot')
        .data(data.flatMap(d => d.rankings.map(r => ({
            team: d.team,
            year: r.year,
            rank: r.rank
        }))));

    dots.enter()
        .append('circle')
        .attr('class', 'dot')
        .merge(dots)
        .attr('cx', d => x(d.year))
        .attr('cy', d => y(d.team))
        .attr('r', 4)
        .attr('fill', d => {
            if (selectedTeam && d.team === selectedTeam) return '#ff0000';
            return colorData.find(c => c.team === d.team)?.color || '#999';
        })
        .attr('opacity', d => selectedTeam && d.team !== selectedTeam ? 0.3 : 1);

    dots.exit().remove();
}

// Update charts based on division and selected team
function updateCharts(division, selectedTeam) {
    if (division) {
        updateChampionshipChart(division);
        updateDotChart(division, selectedTeam);
    } else if (selectedTeam) {
        const currentDivision = document.querySelector('input[name="division"]:checked').value;
        updateDotChart(currentDivision, selectedTeam);
    }
} 