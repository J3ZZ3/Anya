
console.log("Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


console.log("Even numbers between 1 and 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of all numbers from 1 to 100:", sum);


const numbers1 = [1, 2, 3, 4, 5];
console.log("array of numbers:");
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}


const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }
}

console.log("The largest number in the array numbers2 is:", largest);
