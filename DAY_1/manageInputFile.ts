const fs = require('fs');
const INPUT_FILE= 'input.txt';

module.exports = class ManageInputFile {
    public getCalories(): Array<number> {
        const allFileContents = fs.readFileSync(INPUT_FILE, 'utf-8');
        return allFileContents.split(/\r?\n/).map((calory: number) => +calory);
    }
};