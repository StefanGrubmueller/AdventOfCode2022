module.exports = /** @class */ (function () {
    function Rucksack() {
        this.totalPriorities = 0;
    }
    // Public
    Rucksack.prototype.readRucksack = function (row) {
        this.firstCompartment = row.slice(0, row.length / 2).split('');
        this.secondCompartment = row.slice(row.length / 2, row.length - 1).split('');
        this.findSharedItems();
    };
    Rucksack.prototype.readAllRucksacks = function (rucksackArray) {
        var array = rucksackArray.split('\n');
        for (var i = 0; i < array.length; i += 3) {
            for (var itemIndex = 0; itemIndex < array[i].length; itemIndex++) {
                if (array[i + 1].includes(array[i][itemIndex]) && array[i + 2].includes(array[i][itemIndex])) {
                    this.findPriorityOfSharedItem(array[i][itemIndex]);
                    break;
                }
            }
        }
    };
    Rucksack.prototype.getPrioritySum = function () {
        return this.totalPriorities;
    };
    // Private
    Rucksack.prototype.findSharedItems = function () {
        for (var _i = 0, _a = this.firstCompartment; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this.secondCompartment.includes(item)) {
                this.findPriorityOfSharedItem(item);
                break;
            }
        }
    };
    Rucksack.prototype.findPriorityOfSharedItem = function (item) {
        item == item.toLocaleLowerCase() ? this.totalPriorities += item.charCodeAt(0) - 96 : item == item.toUpperCase() ? this.totalPriorities += item.charCodeAt(0) - 38 : console.log('error', item);
    };
    return Rucksack;
}());
