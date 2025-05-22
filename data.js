// Base URL for team logos
const baseUrl = "https://github.com/elistandard/ultimateDynasties/blob/main/college-mens/college-mens-logos/";

// Logo mapping for teams
const logoMapping = [
    { team: "Carleton", url: baseUrl + "carleton.png" },
    { team: "Pittsburgh", url: baseUrl + "pittsburgh.png" }
];

// Color data for teams
const colorData = [
    { team: "Carleton", color: "#000000" },
    { team: "Pittsburgh", color: "#FFD700" }
];

// Raw data array
const rawData = [
    { Team: "Carleton", Division: "D-I", Year: 2023, Rank: 1, T_Rank: "1" },
    { Team: "Pittsburgh", Division: "D-I", Year: 2023, Rank: 2, T_Rank: "2" }
];

// Helper functions
function getOrdinalSuffix(num) {
    const n = parseInt(num);
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}

function formatTRank(tRank) {
    const rankStr = (tRank == null) ? "" : String(tRank).trim();
    if (!rankStr) return "No rank data";
    if (rankStr === "?") return "Rank unknown";
    if (rankStr.startsWith("T")) {
        const numPart = rankStr.slice(1); 
        return `Tied for ${numPart}${getOrdinalSuffix(numPart)}`;
    }
    if (/^\d+$/.test(rankStr)) {
        return `${rankStr}${getOrdinalSuffix(rankStr)}`;
    }
    return rankStr;
}