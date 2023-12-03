function pushTempArray(row, arr) {
    for(var x = 0; x < row.length; x++) {
        // looping through the current row (string)
        const isDigit = /\d/.test(row[x]) // are you a number?
        // console.log(isDigit)
        if (isDigit == true) {
            arr.push(row[x]) // if yes add to a temp array
        }
    }
}

function pushSummingArray(tempArray, arr) {
    var count = tempArray.length // length of the temp array
    var a = tempArray[0] // first number as string
    var b = tempArray[count-1] // last number as string
    var c = a+b // push them together
    // console.log(c)
    arr.push(parseInt(c)) // change to int and add to new array
    // console.log(arr)
}

function theSum(arr) {
    var sum = arr[0]
    for(var i = 1; i < arr.length; i++) {
        sum += arr[i]
    }
    var final = sum
    return final
}

module.exports = { pushTempArray, pushSummingArray, theSum}