const ManageElves = require('./manageElves.js');
const ManageInputFile= require('./manageInputFile.js');


let manageInputFile = new ManageInputFile();
const allCalories: Array<number> = manageInputFile.getCalories();


let manageElves = new ManageElves(allCalories);

const caloriesOfLargestElve: number = manageElves.findTotalCaloriesOfLargestElve()
console.log('most calories of all elves: ', caloriesOfLargestElve);

const totalCaloriesOfThreeLargestElves: number = manageElves.findSumOfTotalCaloriesFromThreeLargestElves()
console.log('total calories of three largest elves: ', totalCaloriesOfThreeLargestElves);