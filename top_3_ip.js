// return the top 3 most active IP addresses
fs = require('fs')

function topThreeIP() {
    const ipFreqObj = {}
    const data = fs.readFileSync('./programming-task-example-data.log').toString()
    const dataArray = data
        .split('\n')
        .map((address) => address
        .slice(0,13))
    for (let addressFrequency of dataArray) {
        ipFreqObj[addressFrequency] = ipFreqObj[addressFrequency] + 1 || 1
    }
    let sortedArray = Object.keys(ipFreqObj).sort((a, b) => ipFreqObj[b] - ipFreqObj[a]).slice(0, 3)
    return sortedArray
}



module.exports = topThreeIP