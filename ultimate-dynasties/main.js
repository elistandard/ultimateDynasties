// Utility functions
function getOrdinalSuffix(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function formatTRank(rank) {
    return rank ? getOrdinalSuffix(rank) : "N/A";
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize division selector
    const divisionRadios = document.querySelectorAll('input[name="division"]');
    divisionRadios.forEach(radio => {
        radio.addEventListener('change', handleDivisionChange);
    });

    // Initialize team selector
    const teamSelect = document.getElementById('teamSelect');
    populateTeamSelector(teamSelect);
    teamSelect.addEventListener('change', handleTeamChange);

    // Initialize appendix toggle
    const toggleButton = document.getElementById('toggleAppendix');
    const appendix = document.getElementById('appendix');
    toggleButton.addEventListener('click', () => {
        appendix.classList.toggle('hidden');
    });

    // Initialize charts
    initializeChampionshipChart();
    initializeDotChart();

    // Trigger initial division change
    const initialDivision = document.querySelector('input[name="division"]:checked').value;
    handleDivisionChange({ target: { value: initialDivision } });
});

// Handle division change
function handleDivisionChange(event) {
    const division = event.target.value;
    updateCharts(division);
}

// Handle team change
function handleTeamChange(event) {
    const selectedTeam = event.target.value;
    updateTeamSummary(selectedTeam);
    updateCharts(null, selectedTeam);
}

// Populate team selector
function populateTeamSelector(select) {
    const division = document.querySelector('input[name="division"]:checked').value;
    const teams = getDivisionStats(division).map(d => d.team);
    
    select.innerHTML = '<option value="">Select a team</option>' +
        teams.map(team => `<option value="${team}">${team}</option>`).join('');
}

// Update team summary section
function updateTeamSummary(team) {
    const logoContainer = document.querySelector('.team-logo');
    const statsContainer = document.querySelector('.team-stats');

    if (!team) {
        logoContainer.innerHTML = '';
        statsContainer.innerHTML = '';
        return;
    }

    // Update logo
    const logoUrl = logoMapping[team];
    logoContainer.innerHTML = `<img src="${logoUrl}" alt="${team} logo" style="max-width: 100%; max-height: 100%;">`;

    // Get team stats
    const division = document.querySelector('input[name="division"]:checked').value;
    const stats = getTeamStats(team, division);

    // Update stats
    statsContainer.innerHTML = `
        <h2>${team}</h2>
        <div class="team-stats-content">
            <p>Championships: ${stats.championships}</p>
            <p>Top 3 Finishes: ${stats.top3}</p>
            <p>Top 5 Finishes: ${stats.top5}</p>
            <p>Top 10 Finishes: ${stats.top10}</p>
            <p>Total Appearances: ${stats.appearances}</p>
            <p>Years Active: ${stats.years.join(', ')}</p>
        </div>
    `;
}

// Initialize championship chart
function initializeChampionshipChart() {
    const container = document.getElementById('championshipChart');
    const width = container.clientWidth;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // Create scales
    const x = d3.scaleBand()
        .range([margin.left, width - margin.right])
        .padding(0.1);

    const y = d3.scaleLinear()
        .range([height - margin.bottom, margin.top]);

    // Create axes
    const xAxis = svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height - margin.bottom})`);

    const yAxis = svg.append('g')
        .attr('class', 'y-axis')
        .attr('transform', `translate(${margin.left},0)`);

    // Add title
    svg.append('text')
        .attr('class', 'chart-title')
        .attr('x', width / 2)
        .attr('y', margin.top)
        .attr('text-anchor', 'middle')
        .text('Championship History');

    // Store the scales and axes for later updates
    container._scales = { x, y };
    container._axes = { xAxis, yAxis };
    container._svg = svg;
}

// Initialize dot chart
function initializeDotChart() {
    const container = document.getElementById('dotChart');
    const width = container.clientWidth;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // Create scales
    const x = d3.scaleLinear()
        .range([margin.left, width - margin.right]);

    const y = d3.scaleBand()
        .range([margin.top, height - margin.bottom])
        .padding(0.1);

    // Create axes
    const xAxis = svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height - margin.bottom})`);

    const yAxis = svg.append('g')
        .attr('class', 'y-axis')
        .attr('transform', `translate(${margin.left},0)`);

    // Add title
    svg.append('text')
        .attr('class', 'chart-title')
        .attr('x', width / 2)
        .attr('y', margin.top)
        .attr('text-anchor', 'middle')
        .text('Team Rankings Over Time');

    // Store the scales and axes for later updates
    container._scales = { x, y };
    container._axes = { xAxis, yAxis };
    container._svg = svg;
}

// Update charts based on division and selected team
function updateCharts(division, selectedTeam) {
    if (division) {
        updateChampionshipChart(division);
        updateDotChart(division, selectedTeam);
    } else if (selectedTeam) {
        const currentDivision = document.querySelector('input[name="division"]:checked').value;
        updateDotChart(currentDivision, selectedTeam);
    }
}

// Update championship chart
function updateChampionshipChart(division) {
    const container = document.getElementById('championshipChart');
    const { x, y } = container._scales;
    const { xAxis, yAxis, svg } = container._axes;

    // Get data
    const data = getDivisionStats(division)
        .filter(d => d.championships > 0)
        .slice(0, 10);

    // Update scales
    x.domain(data.map(d => d.team));
    y.domain([0, d3.max(data, d => d.championships)]);

    // Update axes
    xAxis.call(d3.axisBottom(x));
    yAxis.call(d3.axisLeft(y));

    // Update bars
    const bars = svg.selectAll('.bar')
        .data(data);

    bars.enter()
        .append('rect')
        .attr('class', 'bar')
        .merge(bars)
        .attr('x', d => x(d.team))
        .attr('y', d => y(d.championships))
        .attr('width', x.bandwidth())
        .attr('height', d => y(0) - y(d.championships))
        .attr('fill', d => colorData.find(c => c.team === d.team)?.color || '#999');

    bars.exit().remove();
}

// Update dot chart
function updateDotChart(division, selectedTeam) {
    const container = document.getElementById('dotChart');
    const { x, y } = container._scales;
    const { xAxis, yAxis, svg } = container._axes;

    // Get data
    const data = getDivisionStats(division)
        .filter(d => d.appearances >= 5)
        .slice(0, 10);

    // Update scales
    x.domain([d3.min(data, d => d.years[0]), d3.max(data, d => d.years[d.years.length - 1])]);
    y.domain(data.map(d => d.team));

    // Update axes
    xAxis.call(d3.axisBottom(x));
    yAxis.call(d3.axisLeft(y));

    // Update dots
    const dots = svg.selectAll('.dot')
        .data(data.flatMap(d => d.rankings.map(r => ({ ...r, team: d.team }))));

    dots.enter()
        .append('circle')
        .attr('class', 'dot')
        .merge(dots)
        .attr('cx', d => x(d.year))
        .attr('cy', d => y(d.team))
        .attr('r', 4)
        .attr('fill', d => {
            if (selectedTeam && d.team === selectedTeam) return '#ff0000';
            return colorData.find(c => c.team === d.team)?.color || '#999';
        })
        .attr('opacity', d => selectedTeam && d.team !== selectedTeam ? 0.3 : 1);

    dots.exit().remove();
} 