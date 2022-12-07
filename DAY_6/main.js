var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var fl = require('fs');
var input = fl.readFileSync('input.txt', 'utf-8');
var inputArray = input.split('');
var currentFour = [];
var index = 0;
for (var _i = 0, inputArray_1 = inputArray; _i < inputArray_1.length; _i++) {
    var char = inputArray_1[_i];
    currentFour.push(char);
    index++;
    if (currentFour.length > 14) {
        currentFour.shift();
    }
    if (currentFour.length === 14) {
        // @ts-ignore
        var fourSet = __spreadArrays(new Set(currentFour));
        if (fourSet.length === 14) {
            break;
        }
    }
}
console.log('index', index);
