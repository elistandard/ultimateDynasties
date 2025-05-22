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
const rawData = records.map(record => ({
    Team: record.Team,
    Year: parseInt(record.Year),
    Rank: parseInt(record.Rank),
    T_Rank: record.T_Rank,
    Division: record.Division
}));

// Generate the rawData.js file content
const fileContent = `const rawData = ${JSON.stringify(rawData, null, 2)};\n\nexport default rawData;`;

// Write to rawData.js
fs.writeFileSync('ultimate-dynasties/rawData.js', fileContent);

console.log('Data generation complete! Check rawData.js for the results.'); 