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

function createArrayObjects(filePath) {
    // Read the content of the file
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Split the content by lines
    const lines = fileContent.split('\n');

    // Now, let's process each line
    const data = lines.map(line => {
        const [gameInfo, resultsInfo] = line.split(':');
        const gameNumber = parseInt(gameInfo.match(/\d+/)[0], 10);

        // Process results
        const results = resultsInfo.split(';').map(result => {
            const colors = result.match(/[a-zA-Z]+/g);
            const counts = result.match(/\d+/g).map(Number);

            const resultObject = {};
            colors.forEach((color, index) => {
                resultObject[color] = counts[index];
            });

            return resultObject;
        });

        return {
            'Game': gameNumber,
            'results': results,
        };
    });
    // console.log('the data', data)
    return data
}

module.exports = {createArray, createArrayObjects}