const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');
const inputArray: Array<string> = input.split('\n');

let count: number = 0;

inputArray.map((line: string) => {
    const [first, second] = line.split(',');
    const [firstLow, firstHigh] = first.split('-');
    const [secondLow, secondHigh] = second.split('-');

    if ((+firstLow >= +secondLow && +firstLow <= +secondHigh) 
        || (+secondLow >= +firstLow && +secondLow <= +firstHigh)
        || (+firstHigh >= +secondLow && +firstHigh <= +secondHigh)
        || (+secondHigh >= +firstLow && +secondHigh <= +firstHigh)) {
        count++;
    } 
});

console.log(count);