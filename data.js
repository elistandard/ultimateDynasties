// Base URL for team logos
const baseUrl = "https://github.com/elistandard/ultimateDynasties/blob/main/college-mens/college-mens-logos/";

// Logo mapping for teams
const logoMapping = [
// ... existing code ...
];

// Color data for teams
const colorData = [
// ... existing code ...
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

    if (!rankStr) {
        return "No rank data";
    } else if (rankStr === "?") {
        return "Rank unknown";
    } else if (rankStr.startsWith("T")) {
        const numPart = rankStr.slice(1); 
        return `Tied for ${numPart}${getOrdinalSuffix(numPart)}`;
    } else if (/^\d+$/.test(rankStr)) {
        return `${rankStr}${getOrdinalSuffix(rankStr)}`;
    } else {
        return rankStr;
    }
}