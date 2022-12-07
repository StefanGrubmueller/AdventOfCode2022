const fl= require('fs');
const input = fl.readFileSync('input.txt', 'utf-8');
const inputArray = input.split('');
const currentFour: string[] = [];
let index = 0;
for (const char of inputArray) {
    currentFour.push(char);
    index++;

    if (currentFour.length > 14) {
        currentFour.shift();
    }

    if (currentFour.length === 14) {
        // @ts-ignore
        const fourSet = [...new Set(currentFour)];
        if (fourSet.length === 14) {
            break;
        }
    }
}
console.log('index', index);