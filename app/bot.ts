/**
 * Bot
 */
 class Bot {
	constructor(parameters) {
	}
	
	generateHash(){
		
	}
}

// Convert the number into scientific notation with 16 digits after "."
// If power of e is greater than 20, get the number between "." and "e"
// Else return the number itself
function scientificNotation(num: string) {
	let value = parseInt(num);
	let data = value.toExponential(16);
	let result = (parseInt(data.split("e+")[1]) > 20) ? data : value
	return result;
}

export = Bot