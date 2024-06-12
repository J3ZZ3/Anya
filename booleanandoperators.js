var num1 = 22;
var num2 = 18;

var isGreaterThan = num1 > num2;
var isLessThanOrEqualTo = num1 <= num2;
var isEqualTo = num1 === num2;
var isNotEqualTo = num1 !== num2;

console.log("Is num1 greater than num2?", isGreaterThan);
console.log("Is num1 less than or equal to num2?", isLessThanOrEqualTo);
console.log("Is num1 equal to num2?", isEqualTo);
console.log("Is num1 not equal to num2?", isNotEqualTo);

var x = 8;
var y = 12;

console.log("Is x greater than y?", x > y);

console.log("Is x less than or equal to y?", x <= y);

console.log("Is x equal to y?", x === y);

console.log("Is x not equal to y?", x !== y);

var a = true;
var b = false;

console.log("a AND b:", a && b);

console.log("a OR b:", a || b);

console.log("NOT a:", !a);

var p = 10;
var number = 5;

p += number;
console.log("p after += number:", p);

p -= number;
console.log("p after -= number:", p);

p *= number;
console.log("p after *= number:", p);

p /= number;
console.log("p after /= number:", p);

p %= number;
console.log("p after %= number:", p);
