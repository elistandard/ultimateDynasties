const fs = require('fs');
const path = require('path');

// Read the CSV file
const csvPath = path.join(__dirname, '..', 'college-mens', 'college-rankings-combined.csv');
const csvData = fs.readFileSync(csvPath, 'utf8');

// Parse CSV
const rows = csvData.split('\n').map(row => row.split(','));
const headers = rows[0];
const data = rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((header, i) => {
        obj[header] = row[i];
    });
    return obj;
});

// Group by division
const groupedData = data.reduce((acc, row) => {
    if (!row.Division) return acc;
    if (!acc[row.Division]) acc[row.Division] = [];
    acc[row.Division].push(row);
    return acc;
}, {});

// Convert to JavaScript object
const jsData = Object.entries(groupedData).reduce((acc, [division, rows]) => {
    acc[division] = rows.map(row => ({
        Team: row.Team,
        Year: parseInt(row.Year),
        Rank: parseInt(row.Rank),
        T_Rank: row.T_Rank,
        Division: row.Division
    }));
    return acc;
}, {});

// Generate JavaScript code
const jsCode = `// Raw data from CSV
const rawData = ${JSON.stringify(jsData, null, 2)};

// Helper functions for data processing
function getTeamStats(team, division) {
    const data = rawData[division].filter(d => d.Team === team);
    return {
        appearances: data.length,
        championships: data.filter(d => d.Rank === 1).length,
        top3: data.filter(d => d.Rank <= 3).length,
        top5: data.filter(d => d.Rank <= 5).length,
        top10: data.filter(d => d.Rank <= 10).length,
        years: data.map(d => d.Year).sort((a, b) => a - b),
        rankings: data.map(d => ({ year: d.Year, rank: d.Rank, tRank: d.T_Rank }))
    };
}

function getDivisionStats(division) {
    const data = rawData[division];
    const teams = [...new Set(data.map(d => d.Team))];
    
    return teams.map(team => {
        const stats = getTeamStats(team, division);
        return {
            team,
            ...stats
        };
    }).sort((a, b) => b.championships - a.championships || b.top3 - a.top3);
}

function getYearlyRankings(division, year) {
    return rawData[division]
        .filter(d => d.Year === year)
        .sort((a, b) => a.Rank - b.Rank);
}

// Export the data structures and helper functions
export {
    rawData,
    getTeamStats,
    getDivisionStats,
    getYearlyRankings
};`;

// Write to data.js
fs.writeFileSync(path.join(__dirname, 'data.js'), jsCode);

console.log('Data has been parsed and written to data.js'); 