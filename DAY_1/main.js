var ManageElves = require('./manageElves.js');
var ManageInputFile = require('./manageInputFile.js');
var manageInputFile = new ManageInputFile();
var allCalories = manageInputFile.getCalories();
var manageElves = new ManageElves(allCalories);
var caloriesOfLargestElve = manageElves.findTotalCaloriesOfLargestElve();
console.log('most calories of all elves: ', caloriesOfLargestElve);
var totalCaloriesOfThreeLargestElves = manageElves.findSumOfTotalCaloriesFromThreeLargestElves();
console.log('total calories of three largest elves: ', totalCaloriesOfThreeLargestElves);
