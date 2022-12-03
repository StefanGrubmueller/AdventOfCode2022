const f = require('fs');
const RockPaperScissor= require('./RockPaperScissor.js');
const INPUT= 'input.txt';


let rockPaperScissor = new RockPaperScissor();

const allFileContents = f.readFileSync(INPUT, 'utf-8');
allFileContents.split(/\r?\n/).map((row: string) => {
    rockPaperScissor.setCommands(row);
});

console.log('totalScore: ', rockPaperScissor.getTotalScore());

