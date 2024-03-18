const express = require('express')
const app = express()
const port = 8080
const fs = require('fs');

// Function to read the value from the file
function readFromFile(filePath) {
    try {
        // Read the content of the file synchronously
        const content = fs.readFileSync(filePath, 'utf8');
        return content.trim(); // Trim whitespace and newlines
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
}

// Path to the file
const filePath = 'version.txt';

// Read the value from the file
const value = readFromFile(filePath);
const database = readFromFile('database.txt')
// Check if the value is not null
if (value !== null) {
    console.log('Value read from file:', value);
} else {
    console.log('Failed to read value from file.');
}

app.get('/', (req, res) => {
  res.send(`Hello World! version=${value} database=${database}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
