const fs = require('fs')

function calculateSimilarityScore(leftList, rightList) {
    // Create a frequency map for the right list
    const frequencyMap = {}
    rightList.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1
    })

    // Calculate the similarity score
    let similarityScore = 0
    leftList.forEach(num => {
        if (frequencyMap[num]) {
            similarityScore += num * frequencyMap[num]
        }
    })

    return similarityScore;
}

function readInputFile(filePath) {
    const data = fs.readFileSync(filePath, 'utf8')
    const leftList = []
    const rightList = []
    
    // Parse the input file line by line
    data.trim().split('\n').forEach(line => {
        const [left, right] = line.split(/\s+/).map(Number)
        leftList.push(left)
        rightList.push(right)
    });

    return { leftList, rightList }
}

function main() {
    // const filePath = '../../inputs/day01/testInput.txt'
    const filePath = '../../inputs/day01/input.txt'
    const { leftList, rightList } = readInputFile(filePath)
    const similarityScore = calculateSimilarityScore(leftList, rightList)
    console.log('Similarity Score:', similarityScore)
}

main()
