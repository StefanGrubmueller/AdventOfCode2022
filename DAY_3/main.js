var f = require('fs');
var Rucksack = require('./Rucksack.js');
var INPUT = 'input.txt';
var rucksack = new Rucksack();
var allFileContents = f.readFileSync(INPUT, 'utf-8');
//allFileContents.split(/\r?\n/).map((row: string) => rucksack.readRucksack(row.trim()));
rucksack.readAllRucksacks(allFileContents);
var prioritySum = rucksack.getPrioritySum();
console.log('sum: ', prioritySum);
