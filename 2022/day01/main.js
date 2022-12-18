const {altList} = require('./testInput')
const {list} = require('./input')


// console.log(list)


var sum = 0
var temp = 0
var elfSum = []
var high = 0
var theElf = 0

// console.log(altList)

function sumElfCalories(a) {
    for (var i = 0; i < a.length; i++) {
    // console.log('i', a[i])
    if (a[i] != undefined) {
        // console.log('i again', a[i])
        sum += a[i]
        // console.log('sum', sum)
    }
    if (a[i] == undefined) {
        elfSum.push(sum)
        // console.log('elfSum', elfSum)
        sum = 0
    }
    }
    elfSum.push(sum)
    console.log('elfSum', elfSum)
    sum = 0
}
// sumElfCalories(altList)
sumElfCalories(list)
    
function checkLargest(b) {
    for (var i = 0; i < b.length; i++) {
    if (high < b[i]) {
        high = b[i]
        // console.log('index value', b[i], 'high', high, 'index', i)
        theElf = i + 1
    }
    }
    // console.log('elfSum', elfSum)
}
checkLargest(elfSum)
console.log(`The Elf with the largest amount of calories is ${theElf}, with a total of ${high} Calories`)

// Part 2

var tempArr = []
var low = 0
var topElf = 0
var midElf = 0
var lowElf = 0
var arrSum = 0

function checkSmallest(c) {
    for (var i = 0; i < c.length; i++) {
    if (high > c[i]) {
        // console.log('index value', c[i],'index', i)
        tempArr.push(c[i])
        // console.log('tempArr', tempArr)
    }
    }
}
function sumArray(d) {
    for (var i = 0; i < d.length; i++) {
    arrSum = arrSum + d[i]
    // console.log('arrSum', arrSum)
    }
}
function threeLargest() {
    checkSmallest(elfSum)
    checkLargest(elfSum)
    topElf = high
    console.log('topelf', topElf)
    high = 0
    checkLargest(tempArr)
    midElf = high
    console.log('midElf', midElf)
    elfSum = tempArr
    tempArr = []
    // console.log('update elf 1', elfSum, 'tempArr', tempArr)
    checkSmallest(elfSum)
    // console.log('update elf 2', elfSum, 'tempArr', tempArr)
    high = 0
    checkLargest(tempArr)
    lowElf = high
    console.log('lowElf', lowElf)
    elfSum = []
    elfSum.push(topElf)
    elfSum.push(midElf)
    elfSum.push(lowElf)
    sumArray(elfSum)
    console.log(`Top 3 elfs are ${topElf}, ${midElf}, ${lowElf} and the sum of their Calories is ${arrSum}`)
}
threeLargest()