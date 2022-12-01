"use strict";
exports.__esModule = true;
module.exports = /** @class */ (function () {
    function ManageElves(allCalories) {
        this.elves = [];
        this.createElvesWithCalories(allCalories);
    }
    // public  
    ManageElves.prototype.findSumOfTotalCaloriesFromThreeLargestElves = function () {
        var sortedTotalCalories = this.elves.sort(function (a, b) { return b.totalCalories - a.totalCalories; });
        return sortedTotalCalories[0].totalCalories + sortedTotalCalories[1].totalCalories + sortedTotalCalories[2].totalCalories;
    };
    ManageElves.prototype.findTotalCaloriesOfLargestElve = function () {
        return Math.max.apply(Math, this.elves.map(function (o) { return o.totalCalories; }));
    };
    // private
    ManageElves.prototype.createElvesWithCalories = function (allCalories) {
        this.splitCaloriesToIndividualElves(allCalories);
    };
    ManageElves.prototype.splitCaloriesToIndividualElves = function (allCalories) {
        var _this = this;
        var elve = { calories: [], totalCalories: 0 };
        allCalories.forEach(function (calory) {
            if (!calory) {
                elve.totalCalories = _this.getSummedCalories(elve.calories);
                _this.elves.push(elve);
                elve = { calories: [], totalCalories: 0 };
                return;
            }
            elve.calories.push(calory);
        });
    };
    ManageElves.prototype.getSummedCalories = function (calories) {
        return calories.reduce(function (accumulator, current) { return accumulator + current; }, 0);
    };
    return ManageElves;
}());
