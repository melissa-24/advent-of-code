// create a function that takes the 1 int and last int in a string and concatonates them and then each lines number is then added to produce the final sum
// input needs to be a list
// each row needs to be checked for integers - maybe pull anything that is an integer out into a temp array
// each temp array then pulls index 0 and length-1 and puts them together and adds the value to the summing array
// loop through summing array adding each value 

let util = require('../utils')
// const filePath = './testInput.txt'
const filePath = './input.txt'
// const filePath = './altTestInput.txt'
// const filePath = './newTest.txt'
const results = util.createArray(filePath)
// console.log(results)

const wordCheck = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9}

var tempIntArray = []
var numOnlyArray = []
var fixedArray = []
var summingArray = []

function calibrationTotal(arr) {
    for(var x = 0; x < arr.length; x++) {
        var row = arr[x] // current row from cleaned data - results
        util.helpers.pushTempArray(row, tempIntArray)
        util.helpers.pushSummingArray(tempIntArray, summingArray)
        tempIntArray = []
    }
    // console.log('the summingArray', summingArray, 'numOnlyArray', numOnlyArray)
    var final = util.helpers.theSum(summingArray)
    return final
}
function realCalibrationTotal(arr) {
    summingArray = []
    for(let rowString of arr) {
        let a = 0
        let b = 0
        for( let i = 0; i < rowString.length; i++) {
            a = util.convertToInt(rowString, i)
            // console.log('what is a', a)
            if(a !== 0) break
        }
        for(let i = rowString.length-1; i >= 0; i--) {
            b = util.convertToInt(rowString, i)
            if(b !== 0) break
            // console.log('what is b', b)
        }
        // console.log('what is a and b',a,b)
        let c = a+b
        // console.log('what is c', c)
        summingArray.push(parseInt(c))
    }
    var final = util.helpers.theSum(summingArray)
    return final
}

console.log('The Part 1 Final Calibration total is:',calibrationTotal(results)) // 55447
console.log('The Part 2 Final Calibration total is: ',realCalibrationTotal(results)) // 54706