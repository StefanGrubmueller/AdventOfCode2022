var fs = require('fs');
var PairRange = require('./range.js');
var input = fs.readFileSync('input.txt', 'utf-8');
var inputArray = input.split('\n');
var range = new PairRange(inputArray);
console.log('count:', range.getCountOfOverlappingPairs());
