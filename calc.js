const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate? Type your desired operator (+, -, *, /, or ^) and up to two numbers, separated by spaces. Ex: '/ 36 6'  or '^ 49'", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);

	if(mathSymbol === '+'){
		console.log(num1 + num2)
	} else if(mathSymbol === '-'){
		console.log(num1 - num2)
	} else if(mathSymbol === '*'){
		console.log(num1 * num2)
	} else if(mathSymbol === '/'){
		console.log(num1 / num2)
	} else if(mathSymbol === '^'){
		console.log(Math.sqrt(num1))
	}

console.log('mathSymbol', mathSymbol)
console.log('num1', num1)
console.log('num2', num2)

	// This line closes the connection to the command line interface.
	reader.close()

});
