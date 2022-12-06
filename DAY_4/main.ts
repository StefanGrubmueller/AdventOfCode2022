const fs = require('fs');
const PairRange= require('./range.js');

const input = fs.readFileSync('input.txt', 'utf-8');
const inputArray: Array<string> = input.split('\n');

let range = new PairRange(inputArray);
console.log('count:', range.getCountOfOverlappingPairs());