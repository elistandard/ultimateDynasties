const fs = require('fs');
const csv = require('csv-parse/sync');

// Read the CSV file
const csvContent = fs.readFileSync('/Users/elistandard/Documents/03-Code/CS_Projects/Github/ultimateDynasties/college-mens/college-rankings-combined.csv', 'utf-8');

// Parse CSV data
const records = csv.parse(csvContent, {
    columns: true,
    skip_empty_lines: true
});

// Process the data
const rawData = {};

records.forEach(record => {
    const teamName = record.Team;
    const year = parseInt(record.Year);
    const rank = parseInt(record.Rank);
    const conference = record.Conference;
    const division = record.Division;

    if (!rawData[teamName]) {
        rawData[teamName] = {
            name: teamName,
            years: [],
            rankings: [],
            conference: conference,
            division: division
        };
    }

    rawData[teamName].years.push(year);
    rawData[teamName].rankings.push(rank);
});

// Sort years and rankings for each team
Object.values(rawData).forEach(team => {
    const sortedIndices = team.years.map((_, i) => i)
        .sort((a, b) => team.years[a] - team.years[b]);
    
    team.years = sortedIndices.map(i => team.years[i]);
    team.rankings = sortedIndices.map(i => team.rankings[i]);
});

// Generate the data.js file content
const fileContent = `const rawData = ${JSON.stringify(rawData, null, 2)};\n\nexport default rawData;`;

// Write to data.js
fs.writeFileSync('data.js', fileContent);

console.log('Data generation complete! Check data.js for the results.'); 