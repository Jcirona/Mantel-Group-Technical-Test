// Find the number of unique IP addresses
fs = require('fs')

function uniqueIP() {
    const data = fs.readFileSync('./programming-task-example-data.log').toString()
    const dataArray = data
        .split('\n')
        .map((address) => address
        .slice(0,13))
    const uniqueAddresses = [...new Set(dataArray)];
    return uniqueAddresses.length
}

module.exports = uniqueIP

