'use client'

import { useState, useEffect } from 'react'
import DynastyChart from '@/components/DynastyChart'
import TeamStats from '@/components/TeamStats'

interface DataPoint {
  Year: number
  Division: string
  Team: string
  TRank: number
  Rank: number
}

export default function Home() {
  const [data, setData] = useState<DataPoint[]>([])
  const [selectedDivision, setSelectedDivision] = useState<string>('College Men\'s')
  const [selectedTeam, setSelectedTeam] = useState<string>('Vermont')

  useEffect(() => {
    fetch('/data/college-rankings-combined.csv')
      .then(response => response.text())
      .then(csv => {
        const rows = csv.split('\n').slice(1) // Skip header
        const parsedData = rows.map(row => {
          const [Year, Division, Team, TRank, Rank] = row.split(',')
          return { 
            Year: parseInt(Year), 
            Division, 
            Team, 
            TRank: parseInt(TRank),
            Rank: parseInt(Rank)
          }
        })
        setData(parsedData)
      })
  }, [])

  const divisions = Array.from(new Set(data.map(d => d.Division)))
  const teams = Array.from(new Set(
    data
      .filter(d => d.Division === selectedDivision)
      .map(d => d.Team)
  )).sort()

  const filteredData = data.filter(d => d.Division === selectedDivision)

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Ultimate Dynasties</h1>
        
        <div className="flex flex-col gap-8">
          {/* Division Toggle */}
          <div className="flex justify-center gap-4">
            {divisions.map(division => (
              <label key={division} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="division"
                  value={division}
                  checked={selectedDivision === division}
                  onChange={(e) => {
                    setSelectedDivision(e.target.value)
                    // Reset selected team when division changes
                    const firstTeam = teams[0]
                    if (firstTeam) setSelectedTeam(firstTeam)
                  }}
                  className="w-4 h-4"
                />
                <span className="text-lg">{division}</span>
              </label>
            ))}
          </div>

          {/* Team Selector */}
          <div className="flex justify-center">
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="px-4 py-2 text-lg border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {teams.map(team => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>
          </div>

          {/* Team Stats Panel */}
          <TeamStats
            data={filteredData}
            selectedTeam={selectedTeam}
          />

          {/* Dynasty Chart */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <DynastyChart
              data={filteredData}
              selectedTeam={selectedTeam}
              onTeamSelect={setSelectedTeam}
            />
          </div>
        </div>
      </div>
    </main>
  )
} 