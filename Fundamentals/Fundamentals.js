//1. Sigma :
function sigma(x) {
	var sum = 0;
	for (var i = 1; i <= x; i++) {
		sum += i;
	}
	console.log(sum);
}

//sigma(3);

//2. Factorial :
function factorial(x) {
	var sum = 1;
	for (var i = 1; i <= x; i++) {
		sum *= i;
	}
	console.log(sum);
}

//factorial(5);

//3. Star Art : 
function drawLeftStars(x = 5) {
	var str = "";
	var i = 1;
	while (i <= x) {
		str += "*";
		i++;
	}
	console.log(str);
}

drawLeftStars();

function drawRightStars(x = 5) {
	var str = "";
	var spaces = 75 - x;
	for (var i = 1; i <= spaces; i++) {
		str += ".";
	}
	for (var j = 1; j <= x; j++) {
		str += "*";
	}
	console.log(str);
//	console.log(str.length);
}

drawRightStars();

function drawCenteredStars(x = 15)  {
	var str = "";
	var spaces = 75 - (x*2);
	console.log(spaces);
	for (var i = 1; i <=spaces; i++) {
		code
	}
	
}

drawCenteredStars();