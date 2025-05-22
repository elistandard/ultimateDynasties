import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { Team, Ranking } from '../types/data';

const divisionMap = {
  "College Men's": 'college-mens',
  "College Women's": 'college-womens',
} as const;

type CsvDivision = keyof typeof divisionMap;
const csvDivisions: CsvDivision[] = Object.keys(divisionMap) as CsvDivision[];

async function convertData() {
  console.log('Starting data conversion...');
  // Create data directory in public
  const dataDir = path.join(process.cwd(), 'public', 'data');
  fs.mkdirSync(dataDir, { recursive: true });

  // Read and process the combined rankings file
  const rankingsPath = path.join(process.cwd(), 'college-mens', 'college-rankings-combined.csv');
  const rankingsData = parse(fs.readFileSync(rankingsPath, 'utf-8'), {
    columns: true,
    skip_empty_lines: true
  });
  console.log(`Loaded ${rankingsData.length} rows from CSV.`);
  console.log('First 3 rows:', rankingsData.slice(0, 3));

  // Process rankings for each division
  for (const csvDivision of csvDivisions) {
    const divisionDir = path.join(dataDir, divisionMap[csvDivision]);
    fs.mkdirSync(divisionDir, { recursive: true });

    // Filter rankings for this division
    const divisionRankings = rankingsData
      .filter((row: any) => row.Division === csvDivision)
      .map((row: any) => ({
        team: row.Team,
        rank: parseInt(row.Rank),
        year: parseInt(row.Year),
        division: divisionMap[csvDivision],
      }));
    console.log(`Division: ${csvDivision} | Filtered rows: ${divisionRankings.length}`);

    // Write rankings to JSON file
    fs.writeFileSync(
      path.join(divisionDir, 'rankings.json'),
      JSON.stringify(divisionRankings, null, 2)
    );

    // Calculate and write dynasty data
    const dynastyData = calculateDynastyMetrics(divisionRankings);
    fs.writeFileSync(
      path.join(divisionDir, 'dynasty-data.json'),
      JSON.stringify(dynastyData, null, 2)
    );
  }
}

function calculateDynastyMetrics(rankings: Ranking[]) {
  const teamData = new Map<string, any>();

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
    data.averageRank = teamRankings.reduce((sum: number, r: Ranking) => sum + r.rank, 0) / teamRankings.length;
  });

  return Array.from(teamData.values());
}

convertData().catch(console.error); 