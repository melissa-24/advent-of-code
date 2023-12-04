const map = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9};


function convertToInt(rowString, i) {
    if(Number.isInteger(+rowString[i])) {
        var s = +rowString[i]+''
        return s;
    }
    for(const num of Object.keys(map)) {
        if(rowString.substring(i).indexOf(num) === 0) {
            var s = ''+map[num]+''
            return s;
        }
    }
    return 0;
}


module.exports = convertToInt

