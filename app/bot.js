/**
 * Bot
 */
var Bot = (function () {
    function Bot(parameters) {
        this.command = parameters["command"];
        this.data = parameters["data"];
    }
    Bot.prototype.generateHash = function () {
        var seed = 0;
        switch (this.command) {
            case "color":
                if (this.data == "red") {
                    seed = 99111222212214;
                }
                break;
            case "xxxxxxxx":
                if (this.data == "yyyyyyyyy") {
                    seed = 412412412412412544;
                }
                break;
            case "daaaaaaaaaaaaaaaaaa":
                if (this.data == "dl") {
                    seed = 9797979798079946;
                }
                break;
        }
        this.hash = scientificNotation(seed).toString(16);
    };
    return Bot;
})();
// Convert the number into scientific notation with 16 digits after "."
// If power of e is greater than 20, get the number between "." and "e"
// Else return the number itself
function scientificNotation(num) {
    var data = parseInt(num).toExponential(16);
    var elements = data.split("e+");
    var result = (parseInt(elements[1]) > 20) ? elements[0].split(".")[1] : num;
    return result;
}
module.exports = Bot;
/*
5a2421317676
‭99111222212214

‬5b92ee76ecdc280
‭412412412412412544‬
412 412 412 412 412 544

412 412 412 412 412 412 + 122

22cf35f16189ca
‭9797979798079946‬

97 97 97 97 98079946

97 97 97 97 97 97 97 97 + 100149
*/ 
