// let sentence = 'The quick brown fox jumps over the lazy dog';
// let count = (sentence.match(/the/g) || []).length;
// alert('The word "the" occurs ' + count + ' times in the sentence.');

// *************************************Chapter 21-25 ******************************************
// **********************************Question1****************************
// var number = parseInt(prompt("Please enter a positive number:"));
// if (number > 0) {
//     document.write("Number: " + number + "<br>");
//     document.write("Round off value: " + Math.round(number) + "<br>");
//     document.write("Floor value: " + Math.floor(number) + "<br>");
//     document.write("Ceil value: " + Math.ceil(number));
// } else {
//     alert("Please enter a positive number!");
// }
// **********************************Question2***************************
// var number = parseFloat(prompt("Please enter a negative number:"));
// if (number < 0) {
//     document.write("Number: " + number + "<br>");
//     document.write("Round off value: " + Math.round(number) + "<br>");
//     document.write("Floor value: " + Math.floor(number) + "<br>");
//     document.write("Ceil value: " + Math.ceil(number));
// } else {
//     alert("Please enter a negative number!");
// }
// **********************************Question3***************************
// var number = parseInt(prompt("Please enter a number:"));
// document.write("The absolute value of " + number + " is " + Math.abs(number));
// **********************************Question4***************************
// var diceRoll = Math.floor(Math.random() * 6) + 1;
// alert("You rolled a " + diceRoll + "!");
// **********************************Question5**************************
// var coinToss ;
// coinToss = Math.floor(Math.random() * 2);
// if (coinToss == 0) {
//     alert("You got heads!");
// } else {
//     alert("You got tails!");
// }
// **********************************Question6**************************
// randomNumber = Math.floor(Math.random() * 100) + 1;
// alert("Your random number is: " + randomNumber);

// **********************************Question7**************************
// var userInput;
// userInput = prompt("What is your weight?");
// var weight = parseFloat(userInput.replace(/[^\d.-]/g, ''));
// alert("Your weight is: " + weight + "kgs");
// **********************************Question8**************************

// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userInput;
// userInput = prompt("Please enter a number between 1 and 10:");

// if (parseInt(userInput) === secretNumber) {
//     alert("Congratulations! You guessed the secret number!");
// } else {
//     alert("Sorry, that's not the secret number. Try again!");
// }
// ***************************************Done*************************************