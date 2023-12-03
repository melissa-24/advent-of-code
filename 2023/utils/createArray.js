const fs = require('fs');

function createArray(filePath) {
    // Read the content of the file synchronously
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Split the input into an array of strings
    const lines = fileContent.split('\n');

    // Remove any empty strings from the array
    const nonEmptyLines = lines.filter(line => line.trim() !== '');

    // Initialize the result array
    const resultArray = [];

    // Iterate through each line, remove the trailing \r, and push the modified line into the result array
    nonEmptyLines.forEach(line => {
        const cleanLine = line.replace('\r', '');
        resultArray.push(cleanLine);
    });

    return resultArray;
}

module.exports = createArray