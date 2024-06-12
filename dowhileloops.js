setTimeout(() => {
    console.log("Numbers from 1 to 10:");
    let i = 1;
    do {
      console.log(i);
      i++;
    } while (i <= 10);
  
    let sum = 0;
    let j = 1;
    do {
      sum += j;
      j++;
    } while (j <= 100);
    console.log("Sum of all numbers from 1 to 100:", sum);
  
    let number;
    do {
      number = parseInt(prompt("Enter a number greater than 10:"));
    } while (number <= 10);
    console.log("You entered:", number);
  
    const correctNumber = Math.floor(Math.random() * 10) + 1;
    let guess;
    do {
      guess = parseInt(prompt("Guess a number between 1 and 10:"));
      if (guess == correctNumber) {
        console.log(
          "You Win!:",
          correctNumber
        );
        break;
      } else {
        console.log("Try again!");
      }
    } while (guess != correctNumber);
  
    console.log("Thank you for playing! Game Over.");
  }, 10000);
  