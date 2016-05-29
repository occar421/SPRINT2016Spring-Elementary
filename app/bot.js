/**
 * Bot
 */
var Bot = (function () {
    function Bot(parameters) {
    }
    Bot.prototype.generateHash = function () {
    };
    return Bot;
})();
// Convert the number into scientific notation with 16 digits after "."
// If power of e is greater than 20, get the number between "." and "e"
// Else return the number itself
function scientificNotation(num) {
    var value = parseInt(num);
    var data = value.toExponential(16);
    var result = (parseInt(data.toString().split("e+")[1]) > 20) ? data : value;
    return result;
}
module.exports = Bot;
