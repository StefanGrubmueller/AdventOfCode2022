export interface ElvePairs {
    first: ElveRange;
    second: ElveRange;
}

export interface ElveRange {
    low: number;
    high: number;
}

module.exports = class PairRange {

    count: number = 0;
    inputArray: Array<string> = [];

    constructor(inputArray: Array<string>) {
        this.inputArray = inputArray;
        this.setElvePairs()
        .map(elve => this.calculateNumberOfOverlappingPairs(elve));
    }

    // Public
    public getCountOfOverlappingPairs(): number {
        return this.count;
    }

    // Private
    private setElvePairs(): Array<ElvePairs> {
        let elvePairs: Array<ElvePairs> = [];
        this.inputArray.map((line: string) => {
            const [first, second] = line.split(',');
            const [firstLow, firstHigh] = first.split('-');
            const [secondLow, secondHigh] = second.split('-');
            elvePairs.push({
                first: {
                    low: +firstLow,
                    high: +firstHigh,
                }, second: {
                    low: +secondLow,
                    high: +secondHigh
                }
            })
        });
        return elvePairs;
    }

    private calculateNumberOfOverlappingPairs(elvePair: ElvePairs) {
        if ((elvePair.first.high >= elvePair.second.low
        && elvePair.first.low <= elvePair.second.high)
        || (elvePair.second.low >= elvePair.first.low
        && elvePair.second.low <= elvePair.first.high)
        || (elvePair.first.high >= elvePair.second.low
        && elvePair.first.high <= elvePair.second.high)
        || (elvePair.second.high >= elvePair.first.low
        && elvePair.second.high <=elvePair.first.high)) {
            this.count++;
        }
    }
}