<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vacation Cost Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Vacation Cost Calculator</h1>
        <label for="name">Your Name (optional):</label>
        <input type="text" id="name" placeholder="Enter your name"><br>
        
        <label for="days">Days of vacation per year:</label>
        <input type="number" id="days" placeholder="Number of vacation days"><br>
        
        <label for="costPerNight">Cost per night:</label>
        <input type="number" id="costPerNight" placeholder="Cost per night"><br>
        
        <label for="foodPerDay">Cost of food per day:</label>
        <input type="number" id="foodPerDay" placeholder="Daily food cost"><br>
        
        <label for="entertainmentPerDay">Cost of entertainment per day:</label>
        <input type="number" id="entertainmentPerDay" placeholder="Daily entertainment cost"><br>
        
        <label for="inflationRate">Inflation Rate (% per year):</label>
        <input type="number" id="inflationRate" placeholder="Enter annual inflation rate" step="0.1"><br>
        
        <button id="calculateButton">Calculate Costs</button>
        <button onclick="window.print()">Print Results</button>
        
        <div id="result"></div>
    </div>
    <script src="scripts.js"></script>
</body>
</html>