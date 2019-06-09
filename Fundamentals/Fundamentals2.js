//// 1. “Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

function threesFives(num1, num2) {
	var sum = 0;
	for (var i = num1; i <= num2; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			break;
		}
		
		if (i % 3 == 0 | i % 5 == 0) {
			sum += i;
		}
	}
	console.log(sum);
}

//threesFives(100,4000000);



///// 2. Generate Coin Change

//3. Messy Math Mashup

function messyMath(num) {
	var sum = 0;
	for (var i = 0; i <= num; i++) {
		if (num / 3 == i) {
			return -1;
		}
		if (i % 3 == 0) {
			break;
		}
		if (i % 7 == 0) {
			sum += i;
			sum += i;
			break;
		}
		else {
		sum += i;
		}
	}
	console.log(sum);
}

messyMath(10);