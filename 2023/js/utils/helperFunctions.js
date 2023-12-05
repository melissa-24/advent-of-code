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

function translateResults(data) {
    var rowArr = []
    var translated = []
    for(var y = 0; y < data.length; y++) {
        var gameId = data[y].Game
        var temp = data[y].results
        var valBlue = 0
        var valGreen = 0
        var valRed = 0
        for(var x = 0; x < temp.length; x++) {
            var blue = true
            var red = true
            var green = true
            if(temp[x].blue > 14) {
                blue = false
            }
            if(temp[x].red > 12) {
                red = false
            }
            if(temp[x].green > 13) {
                green = false
            }
            if(temp[x].blue < valBlue) {
                valBlue = temp[x].blue
            }
            if(temp[x].red < valRed) {
                valRed = temp[x].red
            }
            if(temp[x].green < valGreen) {
                valGreen = temp[x].red
            }
            rowArr.push(blue, red, green)
        }
        translated.push({'GameId':gameId, 'Results': rowArr})
        rowArr = []
        row = ''
    }
    // console.log('updated', translated)
    return translated
}

function findFalse(data) {
    var goodID = []
    var badId = []
    for(const res of data) {
        // console.log('the res', res.GameId)
        let found = false;
        var loop = res.Results
        for (const row of loop) {
            // console.log('the row', row)
            if(row === false) {
                found = true
                break
            }
        }
        if(found) {
            badId.push(res.GameId)
            // console.log('found changed to true', badId)
        } else {
            goodID.push(res.GameId)
            // console.log('found stayed false', goodID)
        }
    }
    var arrays = [goodID, badId]
    // return arrays
    return goodID
}


module.exports = { pushTempArray, pushSummingArray, theSum, translateResults, findFalse}