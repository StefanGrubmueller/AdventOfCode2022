"use strict";
exports.__esModule = true;
module.exports = /** @class */ (function () {
    function PairRange(inputArray) {
        var _this = this;
        this.count = 0;
        this.inputArray = [];
        this.inputArray = inputArray;
        this.setElvePairs()
            .map(function (elve) { return _this.calculateNumberOfOverlappingPairs(elve); });
    }
    // Public
    PairRange.prototype.getCountOfOverlappingPairs = function () {
        return this.count;
    };
    // Private
    PairRange.prototype.setElvePairs = function () {
        var elvePairs = [];
        this.inputArray.map(function (line) {
            var _a = line.split(','), first = _a[0], second = _a[1];
            var _b = first.split('-'), firstLow = _b[0], firstHigh = _b[1];
            var _c = second.split('-'), secondLow = _c[0], secondHigh = _c[1];
            elvePairs.push({
                first: {
                    low: +firstLow,
                    high: +firstHigh
                }, second: {
                    low: +secondLow,
                    high: +secondHigh
                }
            });
        });
        return elvePairs;
    };
    PairRange.prototype.calculateNumberOfOverlappingPairs = function (elvePair) {
        if ((elvePair.first.high >= elvePair.second.low
            && elvePair.first.low <= elvePair.second.high)
            || (elvePair.second.low >= elvePair.first.low
                && elvePair.second.low <= elvePair.first.high)
            || (elvePair.first.high >= elvePair.second.low
                && elvePair.first.high <= elvePair.second.high)
            || (elvePair.second.high >= elvePair.first.low
                && elvePair.second.high <= elvePair.first.high)) {
            this.count++;
        }
    };
    return PairRange;
}());
