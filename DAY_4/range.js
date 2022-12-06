"use strict";
exports.__esModule = true;
module.exports = /** @class */ (function () {
    function PairRange(inputArray) {
        this.count = 0;
        this.inputArray = [];
        this.elvePairs = [];
        this.inputArray = inputArray;
        this.setElvePairs();
        this.calculateNumberOfOverlappingPairs();
    }
    // Public
    PairRange.prototype.getCountOfOverlappingPairs = function () {
        return this.count;
    };
    // Private
    PairRange.prototype.setElvePairs = function () {
        var _this = this;
        this.inputArray.map(function (line) {
            var _a = line.split(','), first = _a[0], second = _a[1];
            var _b = first.split('-'), firstLow = _b[0], firstHigh = _b[1];
            var _c = second.split('-'), secondLow = _c[0], secondHigh = _c[1];
            _this.elvePairs.push({
                first: {
                    low: +firstLow,
                    high: +firstHigh
                }, second: {
                    low: +secondLow,
                    high: +secondHigh
                }
            });
        });
    };
    PairRange.prototype.calculateNumberOfOverlappingPairs = function () {
        for (var _i = 0, _a = this.elvePairs; _i < _a.length; _i++) {
            var elvePair = _a[_i];
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
        }
    };
    return PairRange;
}());
