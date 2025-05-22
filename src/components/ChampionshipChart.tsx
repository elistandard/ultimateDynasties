'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import * as d3 from 'd3';
import { TeamData } from '@/types/team';

interface ChampionshipChartProps {
  data: TeamData[];
}

interface ChampionshipData {
  count: number;
  years: number[];
}

export default function ChampionshipChart({ data }: ChampionshipChartProps) {
  // State for selected division
  const [division, setDivision] = useState<"College Men's" | "College Women's">("College Men's");
  
  // Handle division change
  const handleDivisionChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Changing division to:', e.target.value);
    setDivision(e.target.value as "College Men's" | "College Women's");
  }, []);
  
  // Memoized filtered data
  const filteredData = useMemo(() => {
    console.log('Filtering data for division:', division);
    return data.filter(d => d.Division === division);
  }, [data, division]);
  
  // Debug output
  useEffect(() => {
    console.log('Division:', division);
    console.log('Filtered data count:', filteredData.length);
    console.log('Sample filtered data:', filteredData.slice(0, 5));
  }, [division, filteredData]);
  
  if (!data || data.length === 0) {
    return <div className="text-center p-4">No data available</div>;
  }

  // Process championship data
  const processChampionshipData = () => {
    // Count national championships and collect years
    const championshipMap = d3.rollup(
      filteredData,
      (v: TeamData[]) => ({
        count: v.filter(d => d.Rank === 1).length,
        years: v.filter(d => d.Rank === 1).map(d => d.Year).sort()
      }),
      d => d.Team
    );

    // Convert to array, filter for teams with wins, and sort
    return Array.from(championshipMap, ([team, data]: [string, ChampionshipData]) => ({
      team, 
      count: data.count,
      years: data.years
    }))
      .filter(d => d.count > 0)
      .sort((a, b) => b.count - a.count || d3.ascending(a.team, b.team));
  };

  const rankedTeams = processChampionshipData();
  console.log('Teams with championships:', rankedTeams.length);

  // Calculate dimensions
  const width = 1000;
  const height = Math.max(rankedTeams.length * 30, 100); // Ensure minimum height
  const margin = { top: 30, right: 100, bottom: 30, left: 200 };

  // Function to calculate star width based on count with logarithmic scaling
  const calculateStarOffset = (count: number) => {
    const baseWidth = 55; // Width for each star
    return baseWidth * count * (1 / Math.log2(count + 5)); // Log scaling to reduce gap as count increases
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Division
        </label>
        <div className="flex gap-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="division"
              value="College Men's"
              checked={division === "College Men's"}
              onChange={handleDivisionChange}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm text-gray-700">College Men's</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="division"
              value="College Women's"
              checked={division === "College Women's"}
              onChange={handleDivisionChange}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-sm text-gray-700">College Women's</span>
          </label>
        </div>
      </div>

      <div className="text-sm text-gray-500 mb-4">
        Showing {filteredData.length} records for {division} division.
        Found {rankedTeams.length} teams with championships.
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
      >
        {/* Team names */}
        {rankedTeams.map((d, i) => (
          <text
            key={d.team}
            x={margin.left - 10}
            y={margin.top + i * 30 + 20}
            textAnchor="end"
            className="text-sm font-bold fill-gray-600"
          >
            {d.team}
          </text>
        ))}

        {/* Stars and years */}
        {rankedTeams.map((d, i) => (
          <g key={`stars-${d.team}`}>
            <text
              x={margin.left + 10}
              y={margin.top + i * 30 + 20}
              className="text-base"
            >
              {'⭐'.repeat(d.count)}
            </text>
            <text
              x={margin.left + 10 + calculateStarOffset(d.count)}
              y={margin.top + i * 30 + 20}
              className="text-sm fill-gray-500"
            >
              ({d.years.join(', ')})
            </text>
          </g>
        ))}

        {/* Title */}
        <text
          x={margin.left - 10}
          y={margin.top / 2}
          textAnchor="end"
          className="text-sm font-bold fill-black"
        >
          {division} National Championships
        </text>
      </svg>
    </div>
  );
} 