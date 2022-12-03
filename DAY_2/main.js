var f = require('fs');
var RockPaperScissor = require('./RockPaperScissor.js');
var INPUT = 'input.txt';
var rockPaperScissor = new RockPaperScissor();
var allFileContents = f.readFileSync(INPUT, 'utf-8');
allFileContents.split(/\r?\n/).map(function (row) {
    rockPaperScissor.setCommands(row);
});
console.log('totalScore: ', rockPaperScissor.getTotalScore());
