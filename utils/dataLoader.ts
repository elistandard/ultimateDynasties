import { Team, Ranking, DynastyData } from '../types/data';

export async function loadTeamData(division: 'college-mens' | 'college-womens' | 'club-mens'): Promise<Team[]> {
  const response = await fetch(`/data/${division}/team-data.json`);
  return response.json();
}

export async function loadRankings(division: 'college-mens' | 'college-womens' | 'club-mens'): Promise<Ranking[]> {
  const response = await fetch(`/data/${division}/rankings.json`);
  return response.json();
}

export async function loadDynastyData(division: 'college-mens' | 'college-womens' | 'club-mens'): Promise<DynastyData[]> {
  const response = await fetch(`/data/${division}/dynasty-data.json`);
  return response.json();
}

export function calculateDynastyMetrics(rankings: Ranking[]): DynastyData[] {
  const teamData = new Map<string, DynastyData>();

  // Group rankings by team
  rankings.forEach(ranking => {
    if (!teamData.has(ranking.team)) {
      teamData.set(ranking.team, {
        team: ranking.team,
        division: ranking.division,
        years: [],
        averageRank: 0,
        championships: 0,
        top4Finishes: 0,
        top8Finishes: 0
      });
    }

    const data = teamData.get(ranking.team)!;
    data.years.push(ranking.year);
    
    if (ranking.rank === 1) data.championships++;
    if (ranking.rank <= 4) data.top4Finishes++;
    if (ranking.rank <= 8) data.top8Finishes++;
  });

  // Calculate average ranks
  teamData.forEach(data => {
    const teamRankings = rankings.filter(r => r.team === data.team);
    data.averageRank = teamRankings.reduce((sum, r) => sum + r.rank, 0) / teamRankings.length;
  });

  return Array.from(teamData.values());
} 