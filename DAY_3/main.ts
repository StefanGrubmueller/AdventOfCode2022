const f = require('fs');
const Rucksack= require('./Rucksack.js');
const INPUT= 'input.txt';


let rucksack = new Rucksack();

const allFileContents = f.readFileSync(INPUT, 'utf-8');
//allFileContents.split(/\r?\n/).map((row: string) => rucksack.readRucksack(row.trim()));
rucksack.readAllRucksacks(allFileContents);
let prioritySum = rucksack.getPrioritySum();
console.log('sum: ', prioritySum);