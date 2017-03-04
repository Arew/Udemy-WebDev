function isEven(num) {
	if(num % 2 === 0 ) {
		return true; 
	} else {
		return false; 
	}

}

var even = prompt("Enter a number: ");

isEven(even);




function factorial(num) {
	for(var i = num - 1; i > 0; i--) {
		num = num * i;
	}
	return num;
}

function kebabToSnake(str) {
	
str = str.replace(/-/g, "_");

	return str;
}
