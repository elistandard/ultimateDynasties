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

  const form = container.append("form").style("margin-bottom", "1rem");

  form.selectAll("label")
    .data(divisions)
    .join("label")
    .style("margin-right", "1rem")
    .text(d => d)
    .append("input")
    .attr("type", "radio")
    .attr("name", "division")
    .attr("value", d => d)
    .property("checked", d => d === selectedDivision)
    .on("change", function () {
      selectedDivision = this.value;
      updateChart();
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

  // Division toggle
  const form = controls.append("form").style("margin-bottom", "1rem");

  form.selectAll("label")
    .data(divisions)
    .join("label")
    .style("margin-right", "1rem")
    .text(d => d)
    .append("input")
    .attr("type", "radio")
    .attr("name", "division2")
    .attr("value", d => d)
    .property("checked", d => d === selectedDivision)
    .on("change", function () {
      selectedDivision = this.value;
      updateTeamList();
      drawChart();
    });

  // Team selector dropdown
  const select = teamSelectBox
    .append("select")
    .attr("class", "border px-2 py-1 rounded")
    .on("change", function () {
      selectedTeam = this.value;
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
  drawChart();

  function drawChart() {
    chartContainer.html("");

    const data = raw_data.filter(d => d.Division === selectedDivision);
    const grouped = d3.group(data, d => d.Team);

    const width = 1000;
    const height = 500;
    const margin = { top: 30, right: 30, bottom: 50, left: 50 };

    const xScale = d3.scaleLinear()
      .domain(d3.extent(data, d => d.Year))
      .range([margin.left, width - margin.right]);

    const yMax = d3.max(data, d => d.Rank);
    const yScale = d3.scaleLinear()
      .domain([yMax + 1, 1])
      .range([height - margin.bottom, margin.top]);

    const svg = chartContainer.append("svg")
      .attr("viewBox", [0, 0, width, height])
      .style("font-family", "sans-serif");

    // Axes
    svg.append("g")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).tickFormat(d => `'${String(d).slice(-2)}`));

    svg.append("g")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yScale));

    // Lines for all teams
    grouped.forEach((teamData, teamName) => {
      const sorted = teamData.sort((a, b) => a.Year - b.Year);

      const line = d3.line()
        .x(d => xScale(d.Year))
        .y(d => yScale(d.Rank));

      svg.append("path")
        .datum(sorted)
        .attr("fill", "none")
        .attr("stroke", teamName === selectedTeam ? color(teamName) : "#ccc")
        .attr("stroke-width", teamName === selectedTeam ? 2.5 : 1)
        .attr("d", line);
    });

    // Title
    svg.append("text")
    .attr("x", width / 2)
    .attr("y", margin.top - 10)
    .attr("text-anchor", "middle")
    .style("font-weight", "bold")
    .text(`Team Rankings Over Time (${selectedDivision})`);

    // Tooltip
    const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("padding", "8px 10px")
    .style("border-radius", "6px")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
    .style("pointer-events", "none")
    .style("opacity", 0);

    // Format rank nicely
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

    // Circles on points
    svg.selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", d => xScale(d.Year))
    .attr("cy", d => yScale(d.Rank))
    .attr("r", 4)
    .attr("fill", d => d.Team === selectedTeam ? color(d.Team) : "#ccc")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1)
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
        drawChart(); // re-render chart with new highlight
    });
    
  }
}

