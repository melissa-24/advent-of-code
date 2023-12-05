// Each game has an id (Game 1 == id 1)
// Each game has lists of subsets each subset is seperated by a semicolon
// If the bag contained 12 red, 13 greed, and 14 blue only what games would be possible?
// Add the id's of the possible games together


let util = require('../utils')
// var filePath = '../../inputs/day02/testInput.txt'
var filePath = '../../inputs/day02/input.txt'
const results = util.createArrays.createArrayObjects(filePath)

const updatedData = util.helpers.translateResults(results)
// console.log(updatedData)

var finalArray = util.helpers.findFalse(updatedData)
// console.log('the results', finalArray)

var endTotal = util.helpers.theSum(finalArray)
console.log('the final sum', endTotal)

// badId total =  2231 (too low)
// goodId total = 2819 (too high)
// correct was 2278 - I had the wrong numbers of max cubes

// part 2
valBlue = 1
valRed = 1
valGreen = 1
var gameSetPowers = []
function powers(data) {
    for(var x = 0; x < data.length; x++) {
        var game = data[x].Game
        var loop01 = data[x].results
        for(var y = 0; y < loop01.length; y++) {
            // console.log(game, loop01[y])
            var loop02 = loop01[y]
            if(loop02.blue > valBlue) {
                valBlue = loop02.blue
            }
            // console.log(game,valBlue)
            if(loop02.red > valRed) {
                valRed = loop02.red
            }
            if(loop02.green > valGreen) {
                valGreen = loop02.green
            }
        }
        console.log('Game', game, "value Blue, Red, Green", valBlue, valRed, valGreen)
        var gamePower = valBlue*valRed*valGreen
        gameSetPowers.push(gamePower)
        valBlue = 1
        valGreen = 1
        valRed = 1
    }
    var total = util.helpers.theSum(gameSetPowers)
    console.log('part 2 total', total)
}
powers(results)
// part 2 67953