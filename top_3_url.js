// return the top 3 most visited URLs
fs = require('fs')

function topThreeUrl() {
    const urlFreqObj = {}
    const urlArray = []
    const data = fs.readFileSync('./programming-task-example-data.log').toString()
    const dataArray = data
        .split(' ')
        for (let i = 0; i < dataArray.length; i++) {
            if (dataArray[i].includes('http') || dataArray[i].charAt(0) == '/') {
                urlArray.push(dataArray[i])
            }
        }
        for (let urlFrequency of urlArray) {
            urlFreqObj[urlFrequency] = urlFreqObj[urlFrequency] + 1 || 1
        }
        let topThreeArray = Object.keys(urlFreqObj).sort((a, b) => urlFreqObj[b] - urlFreqObj[a]).slice(0, 3)
    return topThreeArray
}


module.exports = topThreeUrl