var array = ["buy", "sell", "trade"];

function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}	
}

var uniArray = [2,1,1,1];



function isUniform(arr) {
	for(var i = 0; i < arr.length; i++) {
		for(var k = 0; k < arr.length; k++) {
			if (arr[i] !== arr[k]) {
				return false;
			}
		}
		return true;
	}
}

var numArray = [1,2,3,4];

function sumArray(arr) {
	var sumArr = 0;

	for(var i = 0; i < arr.length; i++) {
		sumArr += arr[i];
	}

	return sumArr;
}

sumArray(numArray);

var maxArray = [1,3,5,10,15,25];

function max(arr){
	var largeNum = 0; 

	for(var i = 0; i < arr.length; i++) {
		if (arr[i] > largeNum) {
			largeNum = arr[i];
		}
	}

	return largeNum;
}

max(numArray)