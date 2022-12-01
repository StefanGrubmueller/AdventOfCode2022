export interface Elve {
    calories: Array<number>;
    totalCalories: number;
}

module.exports = class ManageElves {

    elves: Array<Elve> = [];

    constructor(allCalories: Array<number>) {
        this.createElvesWithCalories(allCalories);
    }

    // public  
    public findSumOfTotalCaloriesFromThreeLargestElves(): number {
        const sortedTotalCalories: Array<Elve> = this.elves.sort((a,b) => b.totalCalories -a.totalCalories);
        return sortedTotalCalories[0].totalCalories + sortedTotalCalories[1].totalCalories + sortedTotalCalories[2].totalCalories;
    }

    public findTotalCaloriesOfLargestElve(): number {
        return Math.max(...this.elves.map(o => o.totalCalories));
    }

    // private
    private createElvesWithCalories(allCalories: Array<number>): void {
        this.splitCaloriesToIndividualElves(allCalories);
    }

    private splitCaloriesToIndividualElves(allCalories: Array<number>): void {
        let elve: Elve = {calories: [], totalCalories: 0};
        allCalories.forEach(calory => {
            if (!calory) {
                elve.totalCalories = this.getSummedCalories(elve.calories);
                this.elves.push(elve)
                elve = {calories: [], totalCalories: 0};
                return;
            }
            elve.calories.push(calory);
        });
    }

    private getSummedCalories(calories: Array<number>): number {
        return calories.reduce((accumulator, current) => accumulator + current, 0);
    }
};
