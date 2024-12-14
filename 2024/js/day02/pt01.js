const fs = require('fs')

function test(a) {
    console.log(a)
    var direction = ''
    var temp = a[0]
    var altTemp = 0
    var row = 0
    var rowPass = true
    for (var i = 1; i < a.length; i++) {
        console.log('temp, a[i]', temp, a[i])
        if (temp < a[1]) {
            direction = 'up'
        }
        else if (temp > a[1]) {
            direction  = 'down'
        } else {
            direction = 'same'
        }
        console.log('direction', direction)
        for (var i = 1; i < a.length; i++) {
            if (direction == 'down') {
                console.log('going down, direction, temp, a[i]', direction, temp, a[i])
                if (temp > a[i]) {
                    console.log('down')
                    altTemp = temp - a[i]
                } else {
                    console.log('Unsafe')
                    rowPass = false
                    return
                }
            }
            else if (direction == 'up') {
                console.log('going up, direction, temp, a[i]', direction, temp, a[i])
                if (temp < a[i]) {
                    console.log('up')
                    altTemp = a[i] - temp
                } else {
                    console.log('Unsafe')
                    rowPass = false
                    return
                }
            } else {
                console.log('Unsafe')
                rowPass = false
                return
            }
            temp = a[i]
            if (altTemp > 3) {
                console.log('UnSafe')
                rowPass = false
                return
            } else {
                row = row + 1
            }
        }
    }
    return rowPass
}

// testInput = [7,6,4,2,1] // safe decrease
// testInput = [1,3,6,7,9] // safe increase
// testInput = [9,7,6,2,1] // unsafe decrease
// testInput = [1,2,7,8,9] // unsafe increase
// testInput = [1,3,2,4,5] // unsafe both up and down
// testInput = [8,6,4,4,1] // unsafe decrease/same

// test(testInput)


// const filePath = '../../inputs/day02/testInput.txt'
const filePath = '../../inputs/day02/input.txt'


fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Parse the file content into rows
    const rows = data.trim().split('\n').map(row => row.split(' ').map(Number));

    // Initialize pass counter
    let pass = 0;

    // Process each row
    rows.forEach(row => {
        if (test(row)) {
            pass++;
        }
    });

    // Output the final result
    console.log('Final pass count:', pass);
});