// 1. “Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.

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



/// 2. Generate Coin Change

//3. Messy Math Mashup

function messyMath(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        if (num * 1/3 == i) {
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

//messyMath(4);

//4. Twelve-Bar Blues
function twelveBarBlues(x=12) {
    for (var i = 1; i <= 12; i++) {
        console.log(i);
        console.log("chick");
        console.log("boom");
        console.log("chick");
    }
}

//twelveBarBlues();

//5. Is Prime
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if (value % i === 0) {
            return console.log("false");
        }
    }
    return console.log("true");
}

isPrime(5)
