var fs = require('fs');
var INPUT_FILE = 'input.txt';
module.exports = /** @class */ (function () {
    function ManageInputFile() {
    }
    ManageInputFile.prototype.getCalories = function () {
        var allFileContents = fs.readFileSync(INPUT_FILE, 'utf-8');
        return allFileContents.split(/\r?\n/).map(function (calory) { return +calory; });
    };
    return ManageInputFile;
}());
