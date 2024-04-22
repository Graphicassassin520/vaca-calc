body {
    font-family: Arial, sans-serif;
    background-color: #007bff; /* Blue background */
    color: white; /* White text color */
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    width: 100%;
    max-width: 360px; /* Suitable for mobile screens */
    padding: 20px;
    background-color: #333; /* Slightly dark background for the container */
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.input-group {
    margin-bottom: 20px;
}

input[type="text"], input[type="number"] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: white;
    color: black;
}

button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background-color: red;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}

button:hover {
    opacity: 0.8;
}

label {
    display: block;
    margin-bottom: 5px;
}