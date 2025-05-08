function _1(md){return(
md`# Ultimate Dynasties`
)}

function _2(md){return(
md`<div style="font-size: 18px; color: #333; margin-bottom: 20px; line-height: 1.6;">
North Carolina, Cartleton, UCSB, Wisconsin. We've all heard about these dynasties in the college ultimate world.<br><br>
But which teams have been good forever? Who's made nationals the most but never won a championship? Where should my kid apply to college if they want to go to nationals next year??
</div>`
)}

function _3(md){return(
md`1984-2023 results: https://collegechampionships.usaultimate.org/d1-men/history/
<br />2024 results: https://play.usaultimate.org/events/2024-USA-Ultimate-D-1-College-Championships/`
)}

function _4(md){return(
md`The above websites have comprehensive and easy to read college championship results. We can click on any year one at a time to see where men's and women's college teams placed.`
)}

function _5(md){return(
md`But this website doesn't allow you to see the success of teams over time. Sure we can memorize how a team placed in a certain year and open up 10 tabs to see how they did before and after, but what if we want to see the rise and fall of teams since 1984 up until the present?`
)}

function _6(md){return(
md`Let's start by looking at winners. Who has the most rings?`
)}

function _divisionToggle2(Inputs){return(
html`<div style="margin-bottom: 24px; padding: 14px 18px; background: #f7f7fa; border-radius: 10px; border: 1px solid #e0e0e0; box-shadow: 0 1px 4px rgba(0,0,0,0.03); max-width: 350px;">
  <label style="font-weight: 700; color: #333; font-size: 16px; margin-bottom: 8px; display: block;">Select Division</label>
  ${Inputs.radio(
    ["College Men's", "College Women's"],
    {
      label: undefined,
      value: "College Men's"
    }
  )}
</div>`
)}

function _championshipChart(d3,raw_data,divisionToggle2,activeFont)
{
  // Count national championships and collect years
  var championshipData = d3.rollup(
    raw_data.filter(d => d.Division === divisionToggle2),
    v => ({
      count: v.filter(d => d.Rank === 1).length,
      years: v.filter(d => d.Rank === 1).map(d => d.Year).sort()
    }),
    d => d.Team
  );

  // Convert to array, filter for teams with wins, and sort
  var rankedTeams = Array.from(championshipData, ([team, data]) => ({
    team, 
    count: data.count,
    years: data.years
  }))
    .filter(d => d.count > 0)
    .sort((a, b) => b.count - a.count || d3.ascending(a.team, b.team));

  // Create the visualization
  const width = 1000;
  const height = rankedTeams.length * 30;
  const margin = { top: 30, right: 100, bottom: 30, left: 200 };

  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .style("font-family", activeFont);

  const y = d3.scaleBand()
      .domain(rankedTeams.map(d => d.team))
      .range([margin.top, height - margin.bottom])
      .padding(0.1);

  // Function to calculate star width based on count with logarithmic scaling
  function calculateStarOffset(count) {
    const baseWidth = 55; // Width for each star
    return baseWidth * count * (1 / Math.log2(count + 5)); // Log scaling to reduce gap as count increases
  }

  // Add team names
  svg.append("g")
      .selectAll("text")
      .data(rankedTeams)
      .join("text")
      .attr("x", margin.left - 10)
      .attr("y", d => y(d.team) + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .style("font-family", activeFont)
      .style("font-weight", "bold")
      .style("fill", "#666666")
      .style("font-size", "12px")
      .text(d => d.team);

  // Add stars and years
  rankedTeams.forEach(d => {
    // Add stars
    svg.append("text")
      .attr("x", margin.left + 10)
      .attr("y", y(d.team) + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .style("font-family", activeFont)
      .style("font-size", "14px")
      .text("⭐".repeat(d.count));

    // Add years (positioned based on calculated star width)
    svg.append("text")
      .attr("x", margin.left + 10 + calculateStarOffset(d.count))
      .attr("y", y(d.team) + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .style("font-family", activeFont)
      .style("font-size", "12px")
      .style("fill", "#999999")
      .text(`(${d.years.join(", ")})`);
  });

  // Add title
  svg.append("text")
      .attr("x", margin.left - 10)
      .attr("y", margin.top / 2)
      .attr("text-anchor", "end")
      .style("font-family", activeFont)
      .style("font-weight", "bold")
      .style("fill", "#000000")
      .style("font-size", "14px")
      .text("National Championships");

  return svg.node();
}


function _9(md){return(
md`Okay, so for Men's we have UCSB, North Carolina, Brown, Carleton, and Wisconsin. For Women's we have Stanford, UCSB, UNC, Oregon, and Dartmouth. Great, but everyone knows these names already. We want to know who made nationals in the 80s? Who has won back to back? Who has won a championship after getting second the year before?`
)}

function _10(md){return(
md`Let's scrape the rankings data from these websites and visualize it.`
)}

function _divisionToggle(Inputs){return(
html`<div style="margin-bottom: 24px; padding: 14px 18px; background: #f7f7fa; border-radius: 10px; border: 1px solid #e0e0e0; box-shadow: 0 1px 4px rgba(0,0,0,0.03); max-width: 350px;">
  <label style="font-weight: 700; color: #333; font-size: 16px; margin-bottom: 8px; display: block;">Select Division</label>
  ${Inputs.radio(
    ["College Men's", "College Women's"],
    {
      label: undefined,
      value: "College Men's"
    }
  )}
</div>`
)}

function _teamSelector(Inputs,data){return(
html`<div style="margin-bottom: 24px; padding: 14px 18px; background: #f7f7fa; border-radius: 10px; border: 1px solid #e0e0e0; box-shadow: 0 1px 4px rgba(0,0,0,0.03); max-width: 400px;">
  <label style="font-weight: 700; color: #333; font-size: 16px; margin-bottom: 8px; display: block;">Select team to highlight, or click on a circle below</label>
  ${Inputs.select(
    [...new Set(data.map(d => d.Team))].sort(),
    {
      label: undefined,
      value: "Vermont"
    }
  )}
</div>`
)}

function _13(html,activeFont,data,teamSelector,logoMapping){return(
html`<div style="font-family: ${activeFont}; padding: 10px; background: #ffffff; border-radius: 5px; font-size: 14px;">
  ${(() => {
    // -----------------------------------------------------
    // 1) Get this team's data
    // -----------------------------------------------------
    const teamData = data
      .filter(d => d.Team === teamSelector)
      .sort((a, b) => a.Year - b.Year);
    
    if (teamData.length === 0) {
      return "No data available for selected team";
    }
    
    // -----------------------------------------------------
    // 2) Most Recent Finish
    const mostRecent = teamData[teamData.length - 1];
    const suffix = (rank) => {
      // returns "st", "nd", "rd", or "th"
      if (rank === 1) return "st";
      if (rank === 2) return "nd";
      if (rank === 3) return "rd";
      return "th";
    };
    const tiedText = String(mostRecent.T_Rank).startsWith('T') ? 'Tied for ' : '';
    const rankNumber = parseInt(String(mostRecent.T_Rank).replace('T', ''));
    const mostRecentText = `${tiedText}${rankNumber}${suffix(rankNumber)} (${mostRecent.Year})`;
    
    // 3) Best (Highest) Finish
    const getBestRank = (rank) => {
      if (rank === "?" || rank === undefined || rank === null) return Infinity;
      const rankStr = String(rank);
      return rankStr.startsWith('T') ? parseInt(rankStr.slice(1)) : parseInt(rankStr);
    };
    
    const validRanks = teamData
      .map(d => getBestRank(d.T_Rank))
      .filter(rank => rank !== Infinity);
    
    const bestRank = Math.min(...validRanks);
    const bestFinishYears = teamData
      .filter(d => getBestRank(d.T_Rank) === bestRank)
      .map(d => d.Year)
      .join(", ");
    const tiedBestText = teamData.some(d => 
      getBestRank(d.T_Rank) === bestRank && 
      String(d.T_Rank).startsWith('T')
    ) ? 'Tied for ' : '';
    const bestFinishText = `${tiedBestText}${bestRank}${suffix(bestRank)} (${bestFinishYears})`;
    
    // -----------------------------------------------------
    // 4) Count of National Championships
    // -----------------------------------------------------
    const championshipRecords = teamData.filter(d => d.Rank === 1);
    const championships = championshipRecords.length;
    const championshipYears = championshipRecords.map(d => d.Year).join(", ");
    const championshipText =
      `${championships}${championships > 0 ? ` (${championshipYears})` : ""}`;
    
    // -----------------------------------------------------
    // 5) Longest Streak Calculation (Skipping 2020)
    // -----------------------------------------------------
    let longestStreak = 1;
    let currentStreak = 1;
    let longestStreakStart = teamData[0].Year;
    let longestStreakEnd = teamData[0].Year;
    let tempStreakStart = teamData[0].Year;

    for (let i = 1; i < teamData.length; i++) {
      const prevYear = teamData[i - 1].Year;
      const currYear = teamData[i].Year;

      // Treat 2019 -> 2021 as consecutive
      const isConsecutive =
        (currYear === prevYear + 1) ||
        (prevYear === 2019 && currYear === 2021);

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

    let streakDisplay;
    if (longestStreak > 1) {
      streakDisplay = `${longestStreak} years (${longestStreakStart}-${longestStreakEnd})`;
    } else {
      streakDisplay = "No multi-year nationals streaks";
    }
    
    // -----------------------------------------------------
    // 6) Return the final HTML
    // -----------------------------------------------------
    return html`
      <!-- Team header with logo and name -->
      <div style="display: flex; align-items: center; margin-bottom: 12px;">
        <img 
          src="${logoMapping.find(d => d.team === teamSelector)?.url}" 
          style="height: 50px; width: 50px; object-fit: contain; margin-right: 10px;"
        />
        <div style="font-weight: bold; font-size: 20px;">${teamSelector}</div>
      </div>

      <!-- Stats in one line, each data point in bold -->
      <div style="font-size: 13px;">
        Most recent nationals finish: 
        <span style="font-weight:bold;">${mostRecentText}</span> &nbsp;|&nbsp; 
        Highest nationals finish: 
        <span style="font-weight:bold;">${bestFinishText}</span> &nbsp;|&nbsp; 
        Longest nationals streak: 
        <span style="font-weight:bold;">${streakDisplay}</span> &nbsp;|&nbsp;
        National championships won: 
        <span style="font-weight:bold;">${championshipText}</span>
      </div>
    `;
  })()}
</div>`
)}

function _chart($0,teamSelector,colorData,d3,data,activeFont,formatTRank,Event)
{
  // Dimensions, margins, etc.
  const width = 1000;
  const height = 500;
  const margin = { top: 30, right: 100, bottom: 70, left: 50 };

  // 1) Grab the actual dropdown node so we can programmatically set its value
  const teamSelectorNode = $0;

  // 2) Grab the current "highlightTeam" from the dropdown's value
  const highlightTeam = teamSelector;

  // Function to get a team's color (default to black if not found)
  function getTeamColor(teamName) {
    const teamData = colorData.find(d => d.team === teamName);
    return teamData ? teamData.color : "#000000";
  }

  // Function to get ordinal suffix
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

  // -----------------------------------------------------
  // Set up scales
  // -----------------------------------------------------
  const xScale = d3
    .scaleLinear()
    //.domain([1984 - 0.5, d3.max(data, d => d.Year) + 0.5])
    .domain([d3.min(data, d => d.Year) - 0.5, d3.max(data, d => d.Year) + 0.5])
    .range([margin.left, width - margin.right]);

  // Adjust yScale to cover the full range of ranks (e.g., 1 to 21)
  const maxRank = d3.max(data, d => d.Rank);
  const yScale = d3
    .scaleLinear()
    .domain([maxRank + 1, 1])  // Add a buffer if needed
    .range([height - margin.bottom, margin.top]);

  // -----------------------------------------------------
  // Tooltip setup
  // -----------------------------------------------------
  let activeTooltipTimeout;
  
  const tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("background-color", "rgba(255, 255, 255, 0.95)")
    .style("border", "1px solid #ddd")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("box-shadow", "2px 2px 6px rgba(0, 0, 0, 0.1)")
    .style("pointer-events", "none")
    .style("opacity", 0)
    .style("font-family", activeFont)
    .style("font-weight", "normal");

  // -----------------------------------------------------
  // Group data by team
  // -----------------------------------------------------
  const groupedData = d3.group(data, d => d.Team);

  // -----------------------------------------------------
  // Create SVG
  // -----------------------------------------------------
  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .style("font-family", activeFont);

  // -----------------------------------------------------
  // Axis Labels
  // -----------------------------------------------------
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - margin.bottom / 3)
    .attr("text-anchor", "middle")
    .style("font-family", activeFont)
    .style("font-weight", "bold")
    .text("Year");

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -(height / 2))
    .attr("y", margin.left / 3)
    .attr("text-anchor", "middle")
    .style("font-family", activeFont)
    .style("font-weight", "bold")
    .text("Rank");

  // -----------------------------------------------------
  // Vertical Grid Lines
  // -----------------------------------------------------
  svg.append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .style("stroke-dasharray", "3,3")
    .style("opacity", 0.2)
    .call(
        d3.axisBottom(xScale)
        .tickValues([2020])
        .tickSize(-(height - margin.top - margin.bottom))
        .tickFormat("")
    );

  // -----------------------------------------------------
  // Draw lines for all NON-highlighted teams
  // -----------------------------------------------------
  groupedData.forEach((teamData, teamName) => {
    if (teamName !== highlightTeam) {
      const sortedData = teamData.sort((a, b) => a.Year - b.Year);

      for (let i = 0; i < sortedData.length - 1; i++) {
        const current = sortedData[i];
        const next = sortedData[i + 1];
        
        if (
          (next.Year - current.Year === 1)
          || (current.Year === 2019 && next.Year === 2021)
        ) {
          const x1 = xScale(current.Year);
          const y1 = yScale(current.Rank);
          const x2 = xScale(next.Year);
          const y2 = yScale(next.Rank);

          const path = d3.path();
          path.moveTo(x1, y1);
          path.bezierCurveTo(
            x1 + (x2 - x1) * 0.5, y1,
            x2 - (x2 - x1) * 0.5, y2,
            x2, y2
          );

          svg.append("path")
            .attr("fill", "none")
            .attr("stroke", getTeamColor(teamName))
            //********************* Change thickness and opacity of connecting lines here ****************************
            .attr("stroke-opacity", 0.2)
            .attr("stroke-width", 0.7)
            .attr("d", path);
        }
      }
    }
  });

  // -----------------------------------------------------
  // Draw lines for the HIGHLIGHTED team
  // -----------------------------------------------------
  const highlightedTeamData = groupedData.get(highlightTeam);
  if (highlightedTeamData) {
    const sortedData = highlightedTeamData.sort((a, b) => a.Year - b.Year);

    for (let i = 0; i < sortedData.length - 1; i++) {
      const current = sortedData[i];
      const next = sortedData[i + 1];

      if (
        (next.Year - current.Year === 1)
        || (current.Year === 2019 && next.Year === 2021)
      ) {
        const x1 = xScale(current.Year);
        const y1 = yScale(current.Rank);
        const x2 = xScale(next.Year);
        const y2 = yScale(next.Rank);

        const path = d3.path();
        path.moveTo(x1, y1);
        path.bezierCurveTo(
          x1 + (x2 - x1) * 0.5, y1,
          x2 - (x2 - x1) * 0.5, y2,
          x2, y2
        );

        svg.append("path")
          .attr("fill", "none")
          .attr("stroke", getTeamColor(highlightTeam))
          .attr("stroke-width", 2)
          .attr("d", path);
      }
    }
  }

  // -----------------------------------------------------
  // Draw NON-HIGHLIGHTED circles (faded)
  // -----------------------------------------------------
  svg.selectAll(".background-points")
    .data(data.filter(d => d.Team !== highlightTeam))
    .join("circle")
    .attr("class", "background-points")
    .attr("cx", d => xScale(d.Year))
    .attr("cy", d => yScale(d.Rank))
    .attr("r", 3)
    .attr("fill", d => getTeamColor(d.Team))
    //************************ Change opacity of dots here ******************************
    .attr("opacity", 0.4)
    .style("cursor", "pointer")
    .on("mouseover", function(event, d) {
      // Clear any existing timeout
      clearTimeout(activeTooltipTimeout);
      
      const point = d3.select(this);
      point
        .attr("r", 6)
        .style("stroke", getTeamColor(d.Team))
        .style("stroke-width", 2)
        //.attr("opacity", 1);
      
      // Format T_Rank robustly
      const rankDisplay = formatTRank(d.T_Rank);
      const tooltipContent = `
        <div style="font-weight: bold">${d.Team}</div>
        <div style="font-size: 0.9em">
          ${d.Year}<br>
          ${rankDisplay}
        </div>
      `;

      tooltip
        .html(tooltipContent)
        .style("left", (event.pageX + 15) + "px")
        .style("top", (event.pageY - 15) + "px")
        .style("opacity", 1);
    })
    .on("mousemove", function(event) {
      // Update position on mouse move
      tooltip
        .style("left", (event.pageX + 15) + "px")
        .style("top", (event.pageY - 15) + "px");
    })
    .on("mouseout", function() {
      const point = d3.select(this);
      point
        .attr("r", 3)
        .style("stroke", "none")
        //.attr("opacity", 0.2);

      // Delay hiding tooltip slightly
      activeTooltipTimeout = setTimeout(() => {
        tooltip.style("opacity", 0);
      }, 50);
    })
    .on("click", function(event, d) {
      // Hide tooltip on click
      tooltip.style("opacity", 0);

      // Update dropdown
      teamSelectorNode.value = d.Team;
      teamSelectorNode.dispatchEvent(new Event("input"));
    });

  // -----------------------------------------------------
  // Draw HIGHLIGHTED circles
  // -----------------------------------------------------
  svg.selectAll(".highlighted-points-group")
    .data(data.filter(d => d.Team === highlightTeam))
    .join("g")
    .attr("class", "highlighted-points-group")
    .attr("transform", d => `translate(${xScale(d.Year)}, ${yScale(d.Rank)})`)
    .style("cursor", "pointer")
    .each(function(d) {
      const group = d3.select(this);

      // Main circle
      group.append("circle")
        .attr("r", 11)
        .attr("fill", getTeamColor(d.Team))
        //.attr("opacity", 1);

      // If rank is #1, add a star above the circle
      if (d.Rank === 1) {
        group.append("text")
          .attr("text-anchor", "middle")
          .attr("dy", "-1.2em")
          .attr("fill", getTeamColor(d.Team))
          .style("font-size", "14px")
          .text("⭐");
      }

      // Rank text in the circle
      group.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .attr("fill", "white")
        .style("font-size", "9px")
        .style("font-weight", "bold")
        .style("font-family", activeFont)
        .text(d.T_Rank);
    })
    .on("mouseover", function(event, d) {
      // Clear any existing timeout
      clearTimeout(activeTooltipTimeout);
      
      const circle = d3.select(this).select("circle")
        .attr("r", 14)
        .style("stroke", "#000")
        .style("stroke-width", 2);

      // Format T_Rank robustly
      const rankDisplay = formatTRank(d.T_Rank);
      const tooltipContent = `
        <div style="font-weight: bold">${d.Team}</div>
        <div style="font-size: 0.9em">
          ${d.Year}<br>
          ${rankDisplay}
        </div>
      `;

      tooltip
        .html(tooltipContent)
        .style("left", (event.pageX + 15) + "px")
        .style("top", (event.pageY - 15) + "px")
        .style("opacity", 1);
    })
    .on("mousemove", function(event) {
      // Update position on mouse move
      tooltip
        .style("left", (event.pageX + 15) + "px")
        .style("top", (event.pageY - 15) + "px");
    })
    .on("mouseout", function() {
      const circle = d3.select(this).select("circle")
        .attr("r", 11)
        .style("stroke", "none");

      // Delay hiding tooltip slightly
      activeTooltipTimeout = setTimeout(() => {
        tooltip.style("opacity", 0);
      }, 50);
    })
    .on("click", function(event, d) {
      // Hide tooltip on click
      tooltip.style("opacity", 0);

      // Update dropdown
      teamSelectorNode.value = d.Team;
      teamSelectorNode.dispatchEvent(new Event("input"));
    });

  // -----------------------------------------------------
  // Bottom Axis (Years)
  // -----------------------------------------------------
  svg.append("g")
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .call(
      d3.axisBottom(xScale)
        .tickFormat(d => `'${d.toString().slice(-2)}`)
        //.tickValues(d3.range(1984, d3.max(data, d => d.Year) + 1))
        .tickValues(d3.range(d3.min(data, d => d.Year), d3.max(data, d => d.Year) + 1))
    )
    .call(g => g.select(".domain").remove())       // remove axis line
    .call(g => g.selectAll(".tick line").remove()) // remove tick lines
    .call(g => g.selectAll("text")
      .style("font-family", activeFont)
      .style("font-weight", "bold")
      .style("fill", "#666666")
      .style("font-size", "12px"));

  // -----------------------------------------------------
  // Left Axis (Rank)
  // -----------------------------------------------------
  // Update the left axis to reflect the full range of ranks
  svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(
      d3.axisLeft(yScale)
        .tickValues(d3.range(1, maxRank + 1)) // Ensure ticks cover the entire range
        .tickFormat(d3.format("d"))
    )
    .call(g => g.select(".domain").remove())       // remove axis line
    .call(g => g.selectAll(".tick line").remove()) // remove tick lines
    .call(g => g.selectAll("text")
      .style("font-family", activeFont)
      .style("font-weight", "bold")
      .style("fill", "#666666")
      .style("font-size", "12px"));

  // Return the SVG node to display in this cell
  return svg.node();
}


function _15(md){return(
md`# Men's
Starting with Men's. 
- UCSB won back-to-back-to-back twice, and you can see their slow climb from third in 1986 to second in 1987 to winning for the first time in 1988. But why didn't they make nationals in 1992? Only to lose in finals in 1993?
<br /><br />
- Brown has a clear legacy in the early 2000s, with wins in 2000 and 2005, but a huge break from 2008 to 2017 before gaining dominance again in 2019 and 2024. 
 <br /><br />
- North Carolina obviously another major legacy, making nationals every year since 2012. But they were late to the game, not making it for the first time until 1998, and missing nationals 7 years in the mid 2000s. 
<br /><br />
Other notable teams include
- Texas with a history of mediocrity,
- Oregon only winning once in 1992,
- UMass getting second after missing nationals three years in a row,
- Michigan never placing above third,
- Florida dropping from first to dead last in 2010-2011,
- Wisconsin getting 5th four years in a row,
- East Carolina never making nationals after 1998,
- Notre Dame making it once in 2000,
- Cal Poly's recent success post 2016.`
)}

function _16(md){return(
md`# Women's
Now for Women's. 
- Stanford is far and away the best women's team ever with eight championships. They even went back-to-back-to-back twice. They made nationals for the first time in 1995, lost in finals twice, won nationals three years in a row, and then didn't make nationals in 2000, only to go on another crazy seven year streak until they don't make it again in 2008. 
<br /><br />
- UCSB has also been strong, but with more concentrated spurts of success in 1988-1991 and 2007-2011. They also haven't missed a nationals since 2017. 
<br /><br />
- Carleton has only missed four nationals total in the history of the sport, but only have one national championship in 2000.
<br /><br />
- UNC's four year win streak is unprecendented, as they're the only Men or Women's team to win four years in a row.
<br /><br />
Other notable women's teams include:
- UC Davis winning nationals in 2004 after not making it the three years prior and not making it again until two years after,
- UBC's slow climb to the top since 2006 and inability to make it past semis since their win in 2008,
- Oregon's dominance in the 2010s,
- Dartmouth's back to back victory's in 2017 and 2018 followed by a loss to UCSD in 2019,
- Vermont making nationals for the first time since 1984 in 2021,
- Whitman's three year ride from last to 5th to 2nd in 2016, and
- UCLA making nationals for the first time ever in 2006, only to lose in finals and then never make it past semis.`
)}

function _17(md){return(
md`### Appendix`
)}

function _raw_data(FileAttachment){return(
FileAttachment("college-rankings-combined.csv").csv({typed: true})
)}

function _data(raw_data,divisionToggle){return(
raw_data.filter(d => d.Division === divisionToggle)
)}

function _baseUrl(){return(
"https://github.com/elistandard/ultimateDynasties/blob/main/college-mens/college-mens-logos/"
)}

function _logoMapping(baseUrl){return(
[
  {team: 'Alabama-Huntsville', url: baseUrl + 'Alabama-Huntsville.jpeg?raw=true'},
  {team: 'Arizona', url: baseUrl + 'Arizona.png?raw=true'},
  {team: 'Auburn', url: baseUrl + 'Auburn.jpg?raw=true'},
  {team: 'BYU', url: baseUrl + 'BYU.png?raw=true'},
  {team: 'Boston College', url: baseUrl + 'Boston College.gif?raw=true'},
  {team: 'British Columbia', url: baseUrl + 'British Columbia.jpg?raw=true'},
  {team: 'Brown', url: baseUrl + 'Brown.jpeg?raw=true'},
  {team: 'Cal Poly SLO', url: baseUrl + 'Cal Poly SLO.jpg?raw=true'},
  {team: 'UC San Diego', url: baseUrl + 'UC San Diego.jpg?raw=true'},
  {team: 'UC Santa Barbara', url: baseUrl + 'UC Santa Barbara.jpg?raw=true'},
  {team: 'UC Santa Cruz', url: baseUrl + 'UC Santa Cruz.jpg?raw=true'},
  {team: 'California', url: baseUrl + 'California.jpg?raw=true'},
  {team: 'Carleton', url: baseUrl + 'Carleton.png?raw=true'},
  {team: 'Carnegie Mellon', url: baseUrl + 'Carnegie Mellon.png?raw=true'},
  {team: 'Case Western Reserve', url: baseUrl + 'Case Western Reserve.png?raw=true'},
  {team: 'Central Florida', url: baseUrl + 'Central Florida.png?raw=true'},
  {team: 'Chabot Community College', url: baseUrl + 'Chabot Community College.jpeg?raw=true'},
  {team: 'Cincinnati', url: baseUrl + 'Cincinnati.png?raw=true'},
  {team: 'Colorado College', url: baseUrl + 'Colorado College.jpg?raw=true'},
  {team: 'Colorado State', url: baseUrl + 'Colorado State.png?raw=true'},
  {team: 'Colorado', url: baseUrl + 'Colorado.png?raw=true'},
  {team: 'Connecticut', url: baseUrl + 'Connecticut.jpg?raw=true'},
  {team: 'Cornell', url: baseUrl + 'Cornell.jpg?raw=true'},
  {team: 'Columbia', url: baseUrl + 'Columbia.png?raw=true'},
  {team: 'Dartmouth', url: baseUrl + 'Dartmouth.png?raw=true'},
  {team: 'Delaware', url: baseUrl + 'Delaware.jpeg?raw=true'},
  {team: 'Duke', url: baseUrl + 'Duke.jpg?raw=true'},
  {team: 'East Carolina', url: baseUrl + 'East Carolina.jpeg?raw=true'},
  {team: 'Eastern Michigan', url: baseUrl + 'Eastern Michigan.jpg?raw=true'},
  {team: 'Florida State', url: baseUrl + 'Florida State.gif?raw=true'},
  {team: 'Florida', url: baseUrl + 'Florida.png?raw=true'},
  {team: 'George Washington', url: baseUrl + 'George Washington.jpeg?raw=true'},
  {team: 'Georgetown', url: baseUrl + 'Georgetown.png?raw=true'},
  {team: 'Georgia Tech', url: baseUrl + 'Georgia Tech.jpeg?raw=true'},
  {team: 'Georgia', url: baseUrl + 'Georgia.jpeg?raw=true'},
  {team: 'Glassboro', url: baseUrl + 'Glassboro State.jpg?raw=true'},
  {team: 'Harvard', url: baseUrl + 'Harvard.jpg?raw=true'},
  {team: 'Illinois', url: baseUrl + 'Illinois.jpg?raw=true'},
  {team: 'Indiana', url: baseUrl + 'Indiana.png?raw=true'},
  {team: 'Iowa State', url: baseUrl + 'Iowa State.png?raw=true'},
  {team: 'Iowa', url: baseUrl + 'Iowa.jpeg?raw=true'},
  {team: 'James Madison', url: baseUrl + 'James Madison.jpeg?raw=true'},
  {team: 'Kansas', url: baseUrl + 'Kansas.jpeg?raw=true'},
  {team: 'LSU', url: baseUrl + 'LSU.jpg?raw=true'},
  {team: 'Las Positas College', url: baseUrl + 'Las Positas.png?raw=true'},
  {team: 'Luther', url: baseUrl + 'Luther.png?raw=true'},
  {team: 'Maryland', url: baseUrl + 'Maryland.png?raw=true'},
  {team: 'Massachusetts', url: baseUrl + 'Massachusetts.jpeg?raw=true'},
  {team: 'McGill', url: baseUrl + 'McGill.jpg?raw=true'},
  {team: 'Michigan State', url: baseUrl + 'Michigan State.jpg?raw=true'},
  {team: 'Michigan', url: baseUrl + 'Michigan.png?raw=true'},
  {team: 'Middlebury', url: baseUrl + 'Middlebury.webp?raw=true'},
  {team: 'Minnesota-Duluth', url: baseUrl + 'Minnesota-Duluth.jpeg?raw=true'},
  {team: 'Minnesota', url: baseUrl + 'Minnesota.png?raw=true'},
  {team: 'Missouri', url: baseUrl + 'Missouri.png?raw=true'},
  {team: 'MIT', url: baseUrl + 'MIT.jpg?raw=true'},
  {team: 'NC State', url: baseUrl + 'NC State.jpg?raw=true'},
  {team: 'UNC Wilmington', url: baseUrl + 'UNC Wilmington.jpg?raw=true'},
  {team: 'North Carolina', url: baseUrl + 'North Carolina.png?raw=true'},
  {team: 'North Texas', url: baseUrl + 'North Texas.jpg?raw=true'},
  {team: 'Northeastern', url: baseUrl + 'Northeastern.jpg?raw=true'},
  {team: 'Northwestern', url: baseUrl + 'Northwestern.png?raw=true'},
  {team: 'Notre Dame', url: baseUrl + 'Notre Dame.jpg?raw=true'},
  {team: 'Oberlin', url: baseUrl + 'Oberlin.png?raw=true'},
  {team: 'Ohio State', url: baseUrl + 'Ohio State.jpg?raw=true'},
  {team: 'Ohio', url: baseUrl + 'Ohio.jpeg?raw=true'},
  {team: 'Oregon State', url: baseUrl + 'Oregon State.png?raw=true'},
  {team: 'Oregon', url: baseUrl + 'Oregon.png?raw=true'},
  {team: 'Ottawa', url: baseUrl + 'Ottawa.png?raw=true'},
  {team: 'Penn State', url: baseUrl + 'Penn State.jpg?raw=true'},
  {team: 'Penn', url: baseUrl + 'Penn.png?raw=true'},
  {team: 'Pittsburgh', url: baseUrl + 'Pittsburgh.png?raw=true'},
  {team: 'Princeton', url: baseUrl + 'Princeton.jpeg?raw=true'},
  {team: 'Purdue', url: baseUrl + 'Purdue.jpeg?raw=true'},
  {team: "Queen's", url: baseUrl + "Queen's.png?raw=true"},
  {team: 'Rice', url: baseUrl + 'Rice.webp?raw=true'},
  {team: 'Rutgers', url: baseUrl + 'Rutgers.jpeg?raw=true'},
  {team: 'SUNY Albany', url: baseUrl + 'SUNY Albany.jpeg?raw=true'},
  {team: 'SUNY Binghamton', url: baseUrl + 'SUNY Binghamton.jpeg?raw=true'},
  {team: 'SUNY Purchase', url: baseUrl + 'SUNY Purchase.png?raw=true'},
  {team: 'SW Missouri State', url: baseUrl + 'SW Missouri State.png?raw=true'},
  {team: 'Saint Louis', url: baseUrl + 'Saint Louis.jpeg?raw=true'},
  {team: 'Salisbury', url: baseUrl + 'Salisbury.jpeg?raw=true'},
  {team: 'Southern California', url: baseUrl + 'Southern California.jpg?raw=true'},
  {team: 'Stanford', url: baseUrl + 'Stanford.png?raw=true'},
  {team: 'Swarthmore', url: baseUrl + 'Swarthmore.png?raw=true'},
  {team: 'Syracuse', url: baseUrl + 'Syracuse.png?raw=true'},
  {team: 'Texas A&M', url: baseUrl + 'Texas A&M.jpg?raw=true'},
  {team: 'Texas State', url: baseUrl + 'Texas State.jpg?raw=true'},
  {team: 'Texas', url: baseUrl + 'Texas.jpg?raw=true'},
  {team: 'Tufts', url: baseUrl + 'Tufts.png?raw=true'},
  {team: 'Tulane', url: baseUrl + 'Tulane.jpeg?raw=true'},
  {team: 'UC Davis', url: baseUrl + 'UC Davis.jpeg?raw=true'},
  {team: 'UCLA', url: baseUrl + 'UCLA.jpg?raw=true'},
  {team: 'UT Dallas', url: baseUrl + 'UT Dallas.png?raw=true'},
  {team: 'Utah State', url: baseUrl + 'Utah State.jpeg?raw=true'},
  {team: 'Utah', url: baseUrl + 'Utah.jpg?raw=true'},
  {team: 'Vermont', url: baseUrl + 'Vermont.jpg?raw=true'},
  {team: 'Victoria', url: baseUrl + 'Victoria.jpg?raw=true'},
  {team: 'Virginia', url: baseUrl + 'Virginia.jpg?raw=true'},
  {team: 'Virginia Tech', url: baseUrl + 'Virginia Tech.jpeg?raw=true'},
  {team: 'WashU', url: baseUrl + 'WashU.jpg?raw=true'},
  {team: 'Washington', url: baseUrl + 'Washington.jpg?raw=true'},
  {team: 'Wesleyan', url: baseUrl + 'Wesleyan.png?raw=true'},
  {team: 'Western Washington', url: baseUrl + 'Western Washington.jpg?raw=true'},
  {team: 'Whitman', url: baseUrl + 'Whitman.jpg?raw=true'},
  {team: 'Williams', url: baseUrl + 'Williams.jpg?raw=true'},
  {team: 'William & Mary', url: baseUrl + 'William & Mary.jpg?raw=true'},
  {team: 'Wisconsin', url: baseUrl + 'Wisconsin.jpg?raw=true'},
  {team: 'Wisconsin-Milwaukee', url: baseUrl + 'Wisconsin-Milwaukee.jpg?raw=true'},
  {team: 'Winona State', url: baseUrl + 'Winona State.jpg?raw=true'},
  {team: 'Yale', url: baseUrl + 'Yale.png?raw=true'}
]
)}

function _colorData(){return(
[
  { team: "Alabama-Huntsville", color: "#1f51f3" },
  { team: "Arizona", color: "#D94B3E" },
  { team: "Auburn", color: "#f0812a" },
  { team: "BYU", color: "#FFD700" },
  { team: "Boston College", color: "#bc0032" },
  { team: "British Columbia", color: "#CDA900" },
  { team: "Brown", color: "#964B00" },
  { team: "Cal Poly SLO", color: "#68b0a7" },
  { team: "California", color: "#1D315E" },
  { team: "Carleton", color: "#c1172a" },
  { team: "Carnegie Mellon", color: "#64AE46" },
  { team: "Case Western Reserve", color: "#2AC1DF" },
  { team: "Central Florida", color: "#FEB934" },
  { team: "Chabot Community College", color: "#d6b002" },
  { team: "Cincinnati", color: "#FF0000" },
  { team: "Colorado", color: "#fbd42d" },
  { team: "Colorado State", color: "#008000" },
  { team: "Columbia", color: "#00588c" },
  { team: "Connecticut", color: "#9D2235" },
  { team: "Cornell", color: "#b31b1b" },
  { team: "Dartmouth", color: "#003E10" },
  { team: "Delaware", color: "#2A4395" },
  { team: "Duke", color: "#0E1D55" },
  { team: "East Carolina", color: "#6f4c7a" },
  { team: "Eastern Michigan", color: "#BE5628" },
  { team: "Florida", color: "#fa4616" },
  { team: "Florida State", color: "#972634" },
  { team: "Georgetown", color: "#052e65" },
  { team: "George Washington", color: "#f2c744" },
  { team: "Glassboro", color: "#3C1400" },
  { team: "Georgia", color: "#9f0000" },
  { team: "Georgia Tech", color: "#1f59a3" },
  { team: "Harvard", color: "#FF0000" },
  { team: "Illinois", color: "#EA462A" },
  { team: "Indiana", color: "#ba141a" },
  { team: "Iowa", color: "#e8c03c" },
  { team: "Iowa State", color: "#E01009" },
  { team: "James Madison", color: "#FF6600" },
  { team: "Kansas", color: "#EC2222" },
  { team: "Las Positas College", color: "#C90803" },
  { team: "LSU", color: "#FFA500" },
  { team: "Luther", color: "#1356a3" },
  { team: "Maryland", color: "#700b20" },
  { team: "Massachusetts", color: "#990033" },
  { team: "McGill", color: "#0000FF" },
  { team: "Michigan", color: "#1D3088" },
  { team: "Michigan State", color: "#18453b" },
  { team: "Middlebury", color: "#FF007F" },
  { team: "Minnesota", color: "#7D0326" },
  { team: "Minnesota-Duluth", color: "#222d45" },
  { team: "Missouri", color: "#F04451" },
  { team: "MIT", color: "#000000" },
  { team: "NC State", color: "#5b0909" },
  { team: "North Carolina", color: "#000000" },
  { team: "Northeastern", color: "#D50232" },
  { team: "North Texas", color: "#228b22" },
  { team: "Northwestern", color: "#4B0082" },
  { team: "Notre Dame", color: "#0c2340" },
  { team: "Oberlin", color: "#ff1be1" },
  { team: "Ohio", color: "#305f20" },
  { team: "Ohio State", color: "#FF0000" },
  { team: "Oregon", color: "#154733" },
  { team: "Oregon State", color: "#FF7F00" },
  { team: "Ottawa", color: "#5e0025" },
  { team: "Penn", color: "#706383" },
  { team: "Penn State", color: "#0F2E50" },
  { team: "Pittsburgh", color: "#FFC800" },
  { team: "Princeton", color: "#ff8000" },
  { team: "Purdue", color: "#FFA500" },
  { team: "Queen's", color: "#eac633" },
  { team: "Rice", color: "#002e6c" },
  { team: "Rutgers", color: "#c10436" },
  { team: "Saint Louis", color: "#5171fe" },
  { team: "Salisbury", color: "#feb719" },
  { team: "Southern California", color: "#990033" },
  { team: "Stanford", color: "#800000" },
  { team: "SUNY Albany", color: "#442473" },
  { team: "SUNY Binghamton", color: "#006670" },
  { team: "SUNY Purchase", color: "#FC7C2C" },
  { team: "Swarthmore", color: "#7198cd" },
  { team: "SW Missouri State", color: "#b0083b" },
  { team: "Syracuse", color: "#f46e27" },
  { team: "Texas", color: "#FF7F00" },
  { team: "Texas A&M", color: "#500000" },
  { team: "Texas Dallas", color: "#0060FF" },
  { team: "Texas Dallas", color: "#F25A00" },
  { team: "Texas State", color: "#ab1f2e" },
  { team: "Tufts", color: "#93c6f6" },
  { team: "Tulane", color: "#205746" },
  { team: "UC Davis", color: "#e5c539" },
  { team: "UC San Diego", color: "#0077AA" },
  { team: "UC Santa Barbara", color: "#000000" },
  { team: "UC Santa Cruz", color: "#FFD700" },
  { team: "UCLA", color: "#0000FF" },
  { team: "UNC Wilmington", color: "#127748" },
  { team: "Utah", color: "#ff0000" },
  { team: "Utah State", color: "#2B3775" },
  { team: "Vermont", color: "#005834" },
  { team: "Victoria", color: "#155EAE" },
  { team: "Virginia", color: "#EC6736" },
  { team: "Virginia Tech", color: "#1aa44B" },
  { team: "WashU", color: "#FF0000" },
  { team: "Washington", color: "#4B0082" },
  { team: "Wesleyan", color: "#f2002c" },
  { team: "Western Washington", color: "#A8915B" },
  { team: "Whitman", color: "#3d4da2" },
  { team: "William & Mary", color: "#0C5C32" },
  { team: "Williams", color: "#6415C1" },
  { team: "Winona State", color: "#622F8C" },
  { team: "Wisconsin", color: "#89CFF0" },
  { team: "Wisconsin-Milwaukee", color: "#000000" },
  { team: "Yale", color: "#003061" }
]
)}

function _activeFont(){return(
"lato"
)}

function _lato(html){return(
html`<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap');

text {
  font: 14px/1.4 "Lato", sans-serif;
}
</style>
`
)}

function _getOrdinalSuffix(){return(
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
)}

function _formatTRank(getOrdinalSuffix){return(
function formatTRank(tRank) {
    // convert to string and trim
    const rankStr = (tRank == null) ? "" : String(tRank).trim();

    if (!rankStr) {
      return "No rank data";
    } else if (rankStr === "?") {
      return "Rank unknown";
    } else if (rankStr.startsWith("T")) {
      // "T3" => "Tied for 3rd"
      const numPart = rankStr.slice(1); 
      return `Tied for ${numPart}${getOrdinalSuffix(numPart)}`;
    } else if (/^\d+$/.test(rankStr)) {
      // purely numeric, e.g. "5" => "5th"
      return `${rankStr}${getOrdinalSuffix(rankStr)}`;
    } else {
      // fallback (e.g. "DNS", "N/A", etc.)
      return rankStr;
    }
  }
)}

function _customCSS(html){return(
html`<style>
input[type="radio"] {
  accent-color: #1f51f3;
  margin-right: 8px;
  width: 18px;
  height: 18px;
}
select {
  font-size: 16px;
  padding: 7px 12px;
  border-radius: 6px;
  border: 1px solid #bbb;
  margin-right: 10px;
  background: #fff;
  color: #222;
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
}
label {
  font-weight: bold;
  color: #444;
}
</style>`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["college-rankings-combined.csv", {url: new URL("./files/9500801df26a43bf47b50f89e1432a8e8ed7763f3b4d71c8844ecb9a7ef7d753daedc5c13245b5828702290eee489122168faa87dd28fc8d76267817959b2a23.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer("viewof divisionToggle2")).define("viewof divisionToggle2", ["Inputs"], _divisionToggle2);
  main.variable(observer("divisionToggle2")).define("divisionToggle2", ["Generators", "viewof divisionToggle2"], (G, _) => G.input(_));
  main.variable(observer("viewof championshipChart")).define("viewof championshipChart", ["d3","raw_data","divisionToggle2","activeFont"], _championshipChart);
  main.variable(observer("championshipChart")).define("championshipChart", ["Generators", "viewof championshipChart"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["md"], _10);
  main.variable(observer("viewof divisionToggle")).define("viewof divisionToggle", ["Inputs"], _divisionToggle);
  main.variable(observer("divisionToggle")).define("divisionToggle", ["Generators", "viewof divisionToggle"], (G, _) => G.input(_));
  main.variable(observer("viewof teamSelector")).define("viewof teamSelector", ["Inputs","data"], _teamSelector);
  main.variable(observer("teamSelector")).define("teamSelector", ["Generators", "viewof teamSelector"], (G, _) => G.input(_));
  main.variable(observer()).define(["html","activeFont","data","teamSelector","logoMapping"], _13);
  main.variable(observer("viewof chart")).define("viewof chart", ["viewof teamSelector","teamSelector","colorData","d3","data","activeFont","formatTRank","Event"], _chart);
  main.variable(observer("chart")).define("chart", ["Generators", "viewof chart"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer()).define(["md"], _17);
  main.variable(observer("raw_data")).define("raw_data", ["FileAttachment"], _raw_data);
  main.variable(observer("data")).define("data", ["raw_data","divisionToggle"], _data);
  main.variable(observer("baseUrl")).define("baseUrl", _baseUrl);
  main.variable(observer("logoMapping")).define("logoMapping", ["baseUrl"], _logoMapping);
  main.variable(observer("colorData")).define("colorData", _colorData);
  main.variable(observer("activeFont")).define("activeFont", _activeFont);
  main.variable(observer("lato")).define("lato", ["html"], _lato);
  main.variable(observer("getOrdinalSuffix")).define("getOrdinalSuffix", _getOrdinalSuffix);
  main.variable(observer("formatTRank")).define("formatTRank", ["getOrdinalSuffix"], _formatTRank);
  main.variable(observer("customCSS")).define("customCSS", _customCSS);
  return main;
}
