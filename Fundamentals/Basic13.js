// 1. Print 1-255 :
function print1To255(x = 255) {
	var i = 1;
	while (i <= x) {
		console.log(i);
		i++;
	}
	return;
}

//print1To255();


// 2. Print Ints and Sum 0-244 :
function printIntsAndSum0To255(x = 255) {
	var sum = 0;
	var i = 0;
	while (i <= x) {
		console.log(i);
		console.log(sum+=i);
		i++;
	}
}

//printIntsAndSum0To255();




