import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';
import { TeamData } from '@/types/team';

const dataDirectory = path.join(process.cwd(), 'combined-datasets');

export async function loadTeamData(): Promise<TeamData[]> {
  const filePath = path.join(dataDirectory, 'college-rankings-combined.csv');
  const results: any[] = [];

  console.log('Attempting to read CSV file:', filePath);

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data: any) => {
        // Convert string values to appropriate types
        const processedData = {
          ...data,
          Year: parseInt(data.Year, 10),
          Rank: parseInt(data.Rank, 10)
        };
        results.push(processedData);
      })
      .on('end', () => {
        console.log('Finished reading CSV file. Total records:', results.length);
        resolve(results);
      })
      .on('error', (error: Error) => {
        console.error('Error reading CSV file:', error);
        reject(error);
      });
  });
} 