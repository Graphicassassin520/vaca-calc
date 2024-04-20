function calculateCosts() {
    const name = document.getElementById('name').value || 'Guest';
    const days = parseInt(document.getElementById('days').value, 10);
    const costPerNight = parseFloat(document.getElementById('costPerNight').value);
    const foodPerDay = parseFloat(document.getElementById('foodPerDay').value);
    const entertainmentPerDay = parseFloat(document.getElementById('entertainmentPerDay').value);

    const yearlyCost = (days * (costPerNight + foodPerDay + entertainmentPerDay)).toFixed(2);
    const monthlyCost = (yearlyCost / 12).toFixed(2); // Calculate monthly cost

    let report = `<h2>Cost Projection for ${name}</h2>`;
    report += `<p>Annual cost: $${yearlyCost}</p>`;
    report += `<p>Monthly cost: $${monthlyCost}</p>`; // Display monthly cost

    [5, 10, 15, 20, 25, 30].forEach(year => {
        const totalCost = (yearlyCost * year).toFixed(2);
        report += `<p>Cost after ${year} years: $${totalCost}</p>`;
    });

    document.getElementById('result').innerHTML = report;
}
