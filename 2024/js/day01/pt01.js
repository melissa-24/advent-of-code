const fs = require('fs')

function calculateTotalDistance(leftList, rightList) {
    // Step 2 - Sort both lists in ascending order
    const sortedLeft = [...leftList].sort((a, b) => a - b)
    const sortedRight = [...rightList].sort((a, b) => a - b)

    // Step 4 - Difference between index and sum that
    let totalDistance = 0
    for (let i = 0; i < sortedLeft.length; i++) {
        totalDistance += Math.abs(sortedLeft[i] - sortedRight[i])
    }

    return totalDistance
}

function readInputFromFile(filePath) {
    const data = fs.readFileSync(filePath, 'utf8')
    const lines = data.trim().split('\n')

    // Step 1 - Separate the numbers into two lists
    const leftList = []
    const rightList = []
    
    for (const line of lines) {
        const [left, right] = line.split(/\s+/).map(Number)
        leftList.push(left)
        rightList.push(right)
    }

    return { leftList, rightList }
}

function main() {
    // const filePath = '../../inputs/day01/testInput.txt'
    const filePath = '../../inputs/day01/input.txt'
    const { leftList, rightList } = readInputFromFile(filePath)

    const totalDistance = calculateTotalDistance(leftList, rightList)
    console.log("Total Distance:", totalDistance)
}

main()
