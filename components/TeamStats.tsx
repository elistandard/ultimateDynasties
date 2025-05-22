'use client';

import { useEffect, useState } from 'react';

interface DataPoint {
  Year: number;
  Division: string;
  Team: string;
  TRank: number;
  Rank: number;
}

interface TeamStatsProps {
  data: DataPoint[];
  selectedTeam: string;
}

// Helper function for ordinal suffixes
function getOrdinalSuffix(num: number): string {
  if (num > 3 && num < 21) return 'th';
  switch (num % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

// Helper function to format T_Rank
function formatTRank(tRank: number | string): string {
  const rankStr = String(tRank).trim();
  
  if (!rankStr) {
    return "No rank data";
  } else if (rankStr === "?") {
    return "Rank unknown";
  } else if (rankStr.startsWith("T")) {
    const numPart = rankStr.slice(1);
    return `Tied for ${numPart}${getOrdinalSuffix(parseInt(numPart))}`;
  } else if (/^\d+$/.test(rankStr)) {
    return `${rankStr}${getOrdinalSuffix(parseInt(rankStr))}`;
  } else {
    return rankStr;
  }
}

export default function TeamStats({ data, selectedTeam }: TeamStatsProps) {
  const [teamData, setTeamData] = useState<DataPoint[]>([]);
  const [logoUrl, setLogoUrl] = useState<string>('');

  useEffect(() => {
    // Filter and sort team data
    const filteredData = data
      .filter(d => d.Team === selectedTeam)
      .sort((a, b) => a.Year - b.Year);
    setTeamData(filteredData);

    // Set logo URL
    const baseUrl = "https://github.com/elistandard/ultimateDynasties/blob/main/college-mens/college-mens-logos/";
    setLogoUrl(`${baseUrl}${selectedTeam.replace(/\s+/g, '%20')}.png?raw=true`);
  }, [data, selectedTeam]);

  if (teamData.length === 0) {
    return <div>No data available for selected team</div>;
  }

  // Most Recent Finish
  const mostRecent = teamData[teamData.length - 1];
  const mostRecentText = formatTRank(mostRecent.TRank);

  // Best Finish
  const getBestRank = (rank: number | string) => {
    if (rank === "?" || rank === undefined || rank === null) return Infinity;
    const rankStr = String(rank);
    return rankStr.startsWith('T') ? parseInt(rankStr.slice(1)) : parseInt(rankStr);
  };

  const validRanks = teamData
    .map(d => getBestRank(d.TRank))
    .filter(rank => rank !== Infinity);

  const bestRank = Math.min(...validRanks);
  const bestFinishYears = teamData
    .filter(d => getBestRank(d.TRank) === bestRank)
    .map(d => d.Year)
    .join(", ");
  const tiedBestText = teamData.some(d => 
    getBestRank(d.TRank) === bestRank && 
    String(d.TRank).startsWith('T')
  ) ? 'Tied for ' : '';
  const bestFinishText = `${tiedBestText}${bestRank}${getOrdinalSuffix(bestRank)} (${bestFinishYears})`;

  // National Championships
  const championshipRecords = teamData.filter(d => d.Rank === 1);
  const championships = championshipRecords.length;
  const championshipYears = championshipRecords.map(d => d.Year).join(", ");
  const championshipText = `${championships}${championships > 0 ? ` (${championshipYears})` : ""}`;

  // Longest Streak
  let longestStreak = 1;
  let currentStreak = 1;
  let longestStreakStart = teamData[0].Year;
  let longestStreakEnd = teamData[0].Year;
  let tempStreakStart = teamData[0].Year;

  for (let i = 1; i < teamData.length; i++) {
    const prevYear = teamData[i - 1].Year;
    const currYear = teamData[i].Year;

    const isConsecutive =
      (currYear === prevYear + 1) ||
      (prevYear === 2019 && currYear === 2021);

    if (isConsecutive) {
      currentStreak++;
    } else {
      currentStreak = 1;
      tempStreakStart = currYear;
    }

    if (currentStreak > longestStreak) {
      longestStreak = currentStreak;
      longestStreakStart = tempStreakStart;
      longestStreakEnd = currYear;
    }
  }

  const streakDisplay = longestStreak > 1
    ? `${longestStreak} years (${longestStreakStart}-${longestStreakEnd})`
    : "No multi-year nationals streaks";

  return (
    <div className="font-lato p-4 bg-white rounded-lg text-sm">
      {/* Team header with logo and name */}
      <div className="flex items-center mb-3">
        <img 
          src={logoUrl}
          alt={`${selectedTeam} logo`}
          className="h-12 w-12 object-contain mr-3"
        />
        <div className="font-bold text-xl">{selectedTeam}</div>
      </div>

      {/* Stats in one line */}
      <div className="text-sm">
        Most recent nationals finish: 
        <span className="font-bold ml-1">{mostRecentText}</span> &nbsp;|&nbsp; 
        Highest nationals finish: 
        <span className="font-bold ml-1">{bestFinishText}</span> &nbsp;|&nbsp; 
        Longest nationals streak: 
        <span className="font-bold ml-1">{streakDisplay}</span> &nbsp;|&nbsp;
        National championships won: 
        <span className="font-bold ml-1">{championshipText}</span>
      </div>
    </div>
  );
} 