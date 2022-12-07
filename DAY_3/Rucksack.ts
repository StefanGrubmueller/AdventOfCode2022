module.exports = class Rucksack {

    firstCompartment: Array<string>;
    secondCompartment: Array<string>;
    totalPriorities: number = 0;

    // Public
    public readRucksack(row: string) {
        this.firstCompartment = row.slice(0, row.length / 2).split('');
        this.secondCompartment = row.slice(row.length / 2, row.length -1).split('');
        this.findSharedItems();
    }

    public readAllRucksacks(rucksackArray: string) {
        let array: Array<string> = rucksackArray.split('\n');
        for (let i = 0; i < array.length; i+= 3) {
            for (let itemIndex = 0; itemIndex < array[i].length; itemIndex++) {
                if (array[i+1].includes(array[i][itemIndex]) && array[i+2].includes(array[i][itemIndex])) {
                    this.findPriorityOfSharedItem(array[i][itemIndex]);
                   break;
                }
           }
        }
    }

    public getPrioritySum(): number {
        return this.totalPriorities;
    }

    // Private
    private findSharedItems() {
        for(const item of this.firstCompartment) {
            if (this.secondCompartment.includes(item)) {
                this.findPriorityOfSharedItem(item);
                break;
            }
        }
    }

    private findPriorityOfSharedItem(item: string) {
            item == item.toLocaleLowerCase() ? this.totalPriorities += item.charCodeAt(0) - 96 : item == item.toUpperCase()  ? this.totalPriorities += item.charCodeAt(0) - 38: console.log('error', item);
    }
}