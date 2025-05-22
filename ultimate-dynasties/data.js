// Base URL for team logos
const baseUrl = "https://raw.githubusercontent.com/elistandard/ultimateDynasties/main/college-mens/college-mens-logos/";

// Logo mapping for teams
const logoMapping = {
    "Air Force": `${baseUrl}Air Force.png`,
    "Alabama": `${baseUrl}Alabama.png`,
    // ... rest of the logo mappings ...
};

// Color data for teams
const colorData = [
    { team: "Air Force", color: "#00308F" },
    { team: "Alabama", color: "#9E1B32" },
    // ... rest of the color data ...
];

// Raw data from CSV
const rawData = {
    "College Men's": [
        { Team: "Stanford", Year: 1984, Rank: 1, T_Rank: 1, Division: "College Men's" },
        { Team: "Glassboro", Year: 1984, Rank: 2, T_Rank: 2, Division: "College Men's" },
        // ... more data ...
    ],
    "College Women's": [
        { Team: "Kansas", Year: 1987, Rank: 1, T_Rank: 1, Division: "College Women's" },
        { Team: "UC Davis", Year: 1987, Rank: 2, T_Rank: 2, Division: "College Women's" },
        // ... more data ...
    ]
};

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
};