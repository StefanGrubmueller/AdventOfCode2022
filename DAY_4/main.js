var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf-8');
var inputArray = input.split('\n');
var count = 0;
inputArray.map(function (line) {
    var _a = line.split(','), first = _a[0], second = _a[1];
    var _b = first.split('-'), firstLow = _b[0], firstHigh = _b[1];
    var _c = second.split('-'), secondLow = _c[0], secondHigh = _c[1];
    if ((+firstLow >= +secondLow && +firstLow <= +secondHigh)
        || (+secondLow >= +firstLow && +secondLow <= +firstHigh)
        || (+firstHigh >= +secondLow && +firstHigh <= +secondHigh)
        || (+secondHigh >= +firstLow && +secondHigh <= +firstHigh)) {
        count++;
    }
});
console.log(count);
