function calculateCosts() {
    const name = document.getElementById('name').value || 'Guest';
    const days = parseInt(document.getElementById('days').value, 10);
    const costPerNight = parseFloat(document.getElementById('costPerNight').value);
    const foodPerDay = parseFloat(document.getElementById('foodPerDay').value);
    const entertainmentPerDay = parseFloat(document.getElementById('entertainmentPerDay').value);
    const inflationRate = parseFloat(document.getElementById('inflationRate').value) / 100;

    let yearlyCost = days * (costPerNight + foodPerDay + entertainmentPerDay);
    let report = `<h2>Cost Projection for ${name}</h2><ul>`;

    // Display the initial costs for the first year
    report += generateCostDisplay(1, yearlyCost);

    for (let year = 2; year <= 30; year++) {
        yearlyCost *= (1 + inflationRate); // Apply the inflation rate to modify the yearly cost
        if (year % 5 === 0 || year === 30) { // Display results every 5 years and in the 30th year
            report += generateCostDisplay(year, yearlyCost);
        }
    }

    report += `</ul>`;
    document.getElementById('result').innerHTML = report;
}

function generateCostDisplay(year, yearlyCost) {
    const monthlyCost = yearlyCost / 12;
    return `<li>Year ${year}: Total Annual Cost: $${yearlyCost.toFixed(2)}, Monthly Cost: $${monthlyCost.toFixed(2)}</li>`;
}