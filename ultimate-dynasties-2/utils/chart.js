import * as d3 from "d3";

export async function renderChampionshipChart() {
  const response = await fetch("/college-rankings-combined.csv");
  const text = await response.text();
  const raw_data = d3.csvParse(text, d => ({
    ...d,
    Rank: +d.Rank,
    Year: +d.Year
  }));

  const container = d3.select("#controls").html("");
  const chartArea = d3.select("#chart").html("");

  const divisions = ["College Men's", "College Women's"];
  let selectedDivision = divisions[0];

  container.html("");
  const champButtonGroup = container.append("div").style("display", "flex").style("gap", "1rem");
  champButtonGroup.selectAll("button")
    .data(divisions)
    .join("button")
    .text(d => d === "College Men's" ? "D1 College Men's" : "D1 College Women's")
    .attr("type", "button")
    .style("padding", "0.5rem 1.2rem")
    .style("border-radius", "999px")
    .style("border", d => d === selectedDivision ? "2px solid #ffcccb" : "2px solid #444")
    .style("background", d => d === selectedDivision ? "#ffcccb" : "#222")
    .style("color", d => d === selectedDivision ? "#222" : "#fff")
    .style("font-weight", "bold")
    .style("font-size", "1rem")
    .style("cursor", "pointer")
    .on("click", function(event, d) {
      selectedDivision = d;
      updateChart();
      // Update button styles
      champButtonGroup.selectAll("button")
        .style("border", d2 => d2 === selectedDivision ? "2px solid #ffcccb" : "2px solid #444")
        .style("background", d2 => d2 === selectedDivision ? "#ffcccb" : "#222")
        .style("color", d2 => d2 === selectedDivision ? "#222" : "#fff");
    });

  updateChart();

  function updateChart() {
    chartArea.html(""); // Clear previous chart

    const championshipData = d3.rollup(
      raw_data.filter(d => d.Division === selectedDivision),
      v => ({
        count: v.filter(d => d.Rank === 1).length,
        years: v.filter(d => d.Rank === 1).map(d => d.Year).sort()
      }),
      d => d.Team
    );

    const rankedTeams = Array.from(championshipData, ([team, data]) => ({
      team,
      count: data.count,
      years: data.years
    }))
      .filter(d => d.count > 0)
      .sort((a, b) => b.count - a.count || d3.ascending(a.team, b.team));

    const width = 1000;
    const height = rankedTeams.length * 30;
    const margin = { top: 30, right: 100, bottom: 30, left: 200 };

    const svg = chartArea.append("svg")
      .attr("viewBox", [0, 0, width, height])
      .style("font-family", "system-ui, sans-serif");

    const y = d3.scaleBand()
      .domain(rankedTeams.map(d => d.team))
      .range([margin.top, height - margin.bottom])
      .padding(0.1);

    function calculateStarOffset(count) {
      const baseWidth = 55;
      return baseWidth * count * (1 / Math.log2(count + 5));
    }

    // Team labels
    svg.append("g")
      .selectAll("text")
      .data(rankedTeams)
      .join("text")
      .attr("x", margin.left - 10)
      .attr("y", d => y(d.team) + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .style("font-weight", "bold")
      .style("fill", "#666")
      .style("font-size", "12px")
      .text(d => d.team);

    // Stars and years
    rankedTeams.forEach(d => {
      svg.append("text")
        .attr("x", margin.left + 10)
        .attr("y", y(d.team) + y.bandwidth() / 2)
        .attr("dy", "0.35em")
        .style("font-size", "14px")
        .text("⭐".repeat(d.count));

      svg.append("text")
        .attr("x", margin.left + 10 + calculateStarOffset(d.count))
        .attr("y", y(d.team) + y.bandwidth() / 2)
        .attr("dy", "0.35em")
        .style("fill", "#999")
        .style("font-size", "12px")
        .text(`(${d.years.join(", ")})`);
    });

    // Title
    svg.append("text")
      .attr("x", margin.left - 10)
      .attr("y", margin.top / 2)
      .attr("text-anchor", "end")
      .style("font-weight", "bold")
      .style("fill", "#000")
      .style("font-size", "14px")
      .text("National Championships");
  }
}


// New chart rankings over time

export async function renderRankingsChart() {
  // Load team color data
  const colorData = await d3.csv("/college-mens-logo-colors.csv", d => ({
    team: d.team,
    color: d.color
  }));
  const teamColorMap = new Map(colorData.map(d => [d.team, d.color]));

  const response = await fetch("/college-rankings-combined.csv");
  const text = await response.text();
  const raw_data = d3.csvParse(text, d => ({
    ...d,
    Rank: +d.Rank,
    Year: +d.Year
  }));

  const divisions = ["College Men's", "College Women's"];
  let selectedDivision = divisions[0];
  let selectedTeam = "Vermont";

  const color = d3.scaleOrdinal(d3.schemeTableau10);

  // Set up containers
  const chartContainer = d3.select("#rankings-chart").html("");
  const controls = d3.select("#division-toggle-2").html("");
  const teamSelectBox = d3.select("#team-selector").html("");

  controls.html("");
  const buttonGroup = controls.append("div").style("display", "flex").style("gap", "1rem");
  buttonGroup.selectAll("button")
    .data(divisions)
    .join("button")
    .text(d => d === "College Men's" ? "D1 College Men's" : "D1 College Women's")
    .attr("type", "button")
    .style("padding", "0.5rem 1.2rem")
    .style("border-radius", "999px")
    .style("border", d => d === selectedDivision ? "2px solid #ffcccb" : "2px solid #444")
    .style("background", d => d === selectedDivision ? "#ffcccb" : "#222")
    .style("color", d => d === selectedDivision ? "#222" : "#fff")
    .style("font-weight", "bold")
    .style("font-size", "1rem")
    .style("cursor", "pointer")
    .on("click", function(event, d) {
      selectedDivision = d;
      updateTeamList();
      drawChart();
      // Update button styles
      buttonGroup.selectAll("button")
        .style("border", d2 => d2 === selectedDivision ? "2px solid #ffcccb" : "2px solid #444")
        .style("background", d2 => d2 === selectedDivision ? "#ffcccb" : "#222")
        .style("color", d2 => d2 === selectedDivision ? "#222" : "#fff");
    });

  // Team selector dropdown
  const select = teamSelectBox
    .append("select")
    .attr("class", "border px-2 py-1 rounded")
    .on("change", function () {
      selectedTeam = this.value;
      renderTeamSummary();
      drawChart();
    });

  function updateTeamList() {
    const teams = Array.from(new Set(
      raw_data.filter(d => d.Division === selectedDivision).map(d => d.Team)
    )).sort();

    select.selectAll("option").remove();

    select
      .selectAll("option")
      .data(teams)
      .join("option")
      .attr("value", d => d)
      .text(d => d);

    if (!teams.includes(selectedTeam)) {
      selectedTeam = teams[0];
    }

    select.property("value", selectedTeam);
  }

  updateTeamList();

  const tooltip = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("background", "white")
  .style("border", "1px solid #ccc")
  .style("padding", "8px 10px")
  .style("border-radius", "6px")
  .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
  .style("pointer-events", "none")
  .style("opacity", 0)
  .style("color", "#000")
  .style("font-family", "sans-serif")
  .style("font-size", "12px");

  function ordinalSuffix(n) {
    n = parseInt(n);
    if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }  
  
  function formatRank(rank) {
    const r = String(rank).trim();
    if (r === "?") return "Rank unknown";
    if (r.startsWith("T")) {
      const n = r.slice(1);
      return `Tied for ${n}${ordinalSuffix(n)}`;
    }
    if (/^\d+$/.test(r)) {
      return `${r}${ordinalSuffix(r)}`;
    }
    return r;
  }  

  drawChart();

  function drawChart() {
    chartContainer.html("");
  
    const data = raw_data.filter(d => d.Division === selectedDivision);
    const grouped = d3.group(data, d => d.Team);
  
    const width = 1000;
    const height = 500;
    const margin = { top: 50, right: 30, bottom: 50, left: 50 };
  
    const xScale = d3.scaleLinear()
      .domain(d3.extent(data, d => d.Year))
      .range([margin.left, width - margin.right]);
  
    const yMax = d3.max(data, d => d.Rank);
    const yScale = d3.scaleLinear()
      .domain([yMax + 1, 1])
      .range([height - margin.bottom, margin.top]);
  
    const svg = chartContainer.append("svg")
      .attr("viewBox", [0, 0, width, height])
      .style("font-family", "sans-serif")
      .style("background", "#111"); // dark background
  
    // Axes
    // Get all years in the data
    const allYears = Array.from(new Set(data.map(d => d.Year))).sort((a, b) => a - b);
    // Offset the first year tick by shifting it right
    const xAxis = d3.axisBottom(xScale)
      .tickValues(allYears)
      .tickFormat(d => `'${String(d).slice(-2)}`);

    const xAxisG = svg.append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(xAxis)
      .call(g => g.selectAll("text").style("fill", "#ccc"));
  
    const yAxisOffset = -20; // negative value shifts y-axis left
    svg.append("g")
      .attr("transform", `translate(${margin.left + yAxisOffset}, 0)`)
      .call(d3.axisLeft(yScale)
        .tickValues(d3.range(1, 21))
        .tickFormat(d3.format("d")))
      .call(g => g.selectAll("text").style("fill", "#ccc"));
  
    const linePath = (d1, d2) => {
      const path = d3.path();
      const x1 = xScale(d1.Year), y1 = yScale(d1.Rank);
      const x2 = xScale(d2.Year), y2 = yScale(d2.Rank);
      path.moveTo(x1, y1);
      path.bezierCurveTo(
        x1 + (x2 - x1) * 0.5, y1,
        x2 - (x2 - x1) * 0.5, y2,
        x2, y2
      );
      return path.toString();
    };
  
    // Draw ALL lines (segments between consecutive years)
    grouped.forEach((teamData, teamName) => {
      const sorted = [...teamData].sort((a, b) => a.Year - b.Year);
      let colorValue = teamColorMap.get(teamName) || "#ccc";
      // If the color is dark, use white for the line
      if (isColorDark(d3.color(colorValue).formatHex())) {
        colorValue = "#fff";
      }
      for (let i = 0; i < sorted.length - 1; i++) {
        const current = sorted[i];
        const next = sorted[i + 1];
  
        const isConsecutive = (next.Year - current.Year === 1) ||
                              (current.Year === 2019 && next.Year === 2021);
        if (isConsecutive) {
          svg.append("path")
            .attr("d", linePath(current, next))
            .attr("fill", "none")
            .attr("stroke", colorValue)
            .attr("stroke-width", teamName === selectedTeam ? 2.5 : 1)
            .attr("stroke-opacity", teamName === selectedTeam ? 1 : 0.1);
        }
      }
    });
  
    // Draw a vertical line at 2020 to indicate no season
    const noSeasonLabelY = height - margin.bottom + 38;
    svg.append("line")
      .attr("x1", xScale(2020))
      .attr("x2", xScale(2020))
      .attr("y1", margin.top)
      .attr("y2", noSeasonLabelY - 10)
      .attr("stroke", "#ffcccb")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", "4,2")
      .attr("opacity", 0.8);

    // Add a label further below the x-axis for 2020
    svg.append("text")
      .attr("x", xScale(2020))
      .attr("y", noSeasonLabelY)
      .attr("text-anchor", "middle")
      .attr("fill", "#ffcccb")
      .style("font-size", "12px")
      .style("font-weight", "normal")
      .text("No 2020 Season (COVID-19)");
  
    // Circles
    svg.selectAll("g.circles")
      .data(data)
      .join("g")
      .attr("transform", d => `translate(${xScale(d.Year)}, ${yScale(d.Rank)})`)
      .each(function(d) {
        const g = d3.select(this);
  
        // Outer circle
        g.append("circle")
          .attr("r", d.Team === selectedTeam ? 11 : 3)
          .attr("fill", getTeamColor(d.Team))
          .attr("stroke", "#fff")
          .attr("stroke-width", 1);

        // If rank is #1, add a star above the circle ONLY for the selected team
        if (d.Team === selectedTeam && d.Rank === 1) {
          g.append("text")
            .attr("text-anchor", "middle")
            .attr("dy", "-1.2em")
            .attr("fill", getTeamColor(d.Team))
            .style("font-size", "13px")
            .text("⭐");
        }

        // Rank text inside active circle
        if (d.Team === selectedTeam) {
          const teamColor = getTeamColor(d.Team);
          const textColor = isColorDark(d3.color(teamColor).formatHex()) ? "#fff" : "#000";
          g.append("text")
            .text(String(d.T_Rank || d.Rank))
            .attr("text-anchor", "middle")
            .attr("dy", "0.35em")
            .attr("fill", textColor)
            .style("font-size", "10px")
            .style("font-weight", "bold");
        }
      })
      .style("cursor", "pointer")
      .on("mouseover", (event, d) => {
        tooltip
          .html(`<strong>${d.Team}</strong><br>${d.Year}<br>${formatRank(d.T_Rank || d.Rank)}`)
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 30}px`)
          .style("opacity", 1);
      })
      .on("mousemove", event => {
        tooltip
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 30}px`);
      })
      .on("mouseout", () => {
        tooltip.style("opacity", 0);
      })
      .on("click", (event, d) => {
        selectedTeam = d.Team;
        select.property("value", selectedTeam);
        drawChart();
      });
  
    // Title
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", margin.top - 10)
      .attr("text-anchor", "middle")
      .style("font-weight", "bold")
      .style("fill", "#fff");

    // Render team summary
    renderTeamSummary();
  }  
  
  function getTeamColor(team) {
    return teamColorMap.get(team) || "#ccc";
  }

  // Render team summary with logo and stats
  function renderTeamSummary() {
    const teamData = raw_data.filter(d => d.Team === selectedTeam && d.Division === selectedDivision).sort((a, b) => a.Year - b.Year);
    if (teamData.length === 0) {
      d3.select("#team-summary").html("No data available for selected team");
      return;
    }

    // Most recent finish
    const mostRecent = teamData[teamData.length - 1];
    const suffix = (rank) => {
      if (rank === 1) return "st";
      if (rank === 2) return "nd";
      if (rank === 3) return "rd";
      return "th";
    };
    const tiedText = String(mostRecent.T_Rank).startsWith('T') ? 'Tied for ' : '';
    const rankNumber = parseInt(String(mostRecent.T_Rank).replace('T', ''));
    const mostRecentText = `${tiedText}${rankNumber}${suffix(rankNumber)} (${mostRecent.Year})`;

    // Best finish
    const getBestRank = (rank) => {
      if (rank === "?" || rank === undefined || rank === null) return Infinity;
      const rankStr = String(rank);
      return rankStr.startsWith('T') ? parseInt(rankStr.slice(1)) : parseInt(rankStr);
    };
    const validRanks = teamData.map(d => getBestRank(d.T_Rank)).filter(rank => rank !== Infinity);
    const bestRank = Math.min(...validRanks);
    const bestFinishYears = Array.from(new Set(teamData.filter(d => getBestRank(d.T_Rank) === bestRank).map(d => d.Year))).join(", ");
    const tiedBestText = teamData.some(d => getBestRank(d.T_Rank) === bestRank && String(d.T_Rank).startsWith('T')) ? 'Tied for ' : '';
    const bestFinishText = `${tiedBestText}${bestRank}${suffix(bestRank)} (${bestFinishYears})`;

    // Championships
    const championshipRecords = teamData.filter(d => d.Rank === 1);
    const championshipYearsArr = Array.from(new Set(championshipRecords.map(d => d.Year)));
    const championships = championshipYearsArr.length;
    const championshipYears = championshipYearsArr.join(", ");
    const championshipText = `${championships}${championships > 0 ? ` (${championshipYears})` : ""}`;

    // Longest streak
    let longestStreak = 1, currentStreak = 1, longestStreakStart = teamData[0].Year, longestStreakEnd = teamData[0].Year, tempStreakStart = teamData[0].Year;
    for (let i = 1; i < teamData.length; i++) {
      const prevYear = teamData[i - 1].Year;
      const currYear = teamData[i].Year;
      const isConsecutive = (currYear === prevYear + 1) || (prevYear === 2019 && currYear === 2021);
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
    let streakDisplay = longestStreak > 1 ? `${longestStreak} years (${longestStreakStart}-${longestStreakEnd})` : "No multi-year nationals streaks";

    // Logo: try .jpg, .png, .jpeg
    const safeTeam = selectedTeam.replace(/[^a-zA-Z0-9& ]/g, '').replace(/ /g, '%20');
    const logoBase = `/college-mens-logos/${safeTeam}`;
    let logoUrl = '';
    for (const ext of ['.jpg', '.png', '.jpeg']) {
      const testUrl = `${logoBase}${ext}`;
      const img = new Image();
      img.src = testUrl;
      if (img.complete) {
        logoUrl = testUrl;
        break;
      }
    }

    const html = `
      <div style="display: flex; align-items: center; margin-bottom: 12px;">
        <img 
          src="${logoBase}.jpg"
          style="height: 50px; width: 50px; object-fit: contain; margin-right: 10px;"
          onerror="this.onerror=null;this.src='${logoBase}.png';this.onerror=function(){this.src='${logoBase}.jpeg';this.onerror=function(){this.style.display='none';};};"
        />
        <div style="font-weight: bold; font-size: 20px;">${selectedTeam}</div>
      </div>
      <div style="font-size: 13px;">
        Most recent nationals finish: <span style="font-weight:bold;">${mostRecentText}</span><br>
        Highest nationals finish: <span style="font-weight:bold;">${bestFinishText}</span><br>
        Longest nationals streak: <span style="font-weight:bold;">${streakDisplay}</span><br>
        National championships won: <span style="font-weight:bold;">${championshipText}</span>
      </div>
    `;
    d3.select("#team-summary").html(html);
  }
}

// Helper function to determine if a color is dark
function isColorDark(hexColor) {
  hexColor = hexColor.replace('#', '');
  if (hexColor.length === 3) {
    hexColor = hexColor.split('').map(x => x + x).join('');
  }
  const r = parseInt(hexColor.substr(0,2),16);
  const g = parseInt(hexColor.substr(2,2),16);
  const b = parseInt(hexColor.substr(4,2),16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
}

