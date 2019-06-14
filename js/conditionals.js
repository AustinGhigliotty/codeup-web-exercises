"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
var numberYes = confirm("Would you like to enter a number?");
if(numberYes) {
    var number = prompt("Ok, what number?");
    if(isNaN(Number(number)) === false) {
        alert((Number(number) % 2 === 1) ? number + " is odd." : number + " is even.");
        alert(number + " + 100 is " + (Number(number) + 100));
        alert((Number(number) >= 0) ? number + " is positive." : number + " is negative.");
    } else {
        alert("That's not a number.")
    }
} else {
    alert("Ok then")
}


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) {
//     if (color === "red") {
//         return "Apples are red"
//     } else if (color === "orange") {
//         return "Oranges are orange"
//     } else if (color === "yellow") {
//         return "Sunflowers are yellow"
//     } else if (color === "green") {
//         return "Grass is green"
//     } else if (color === "blue") {
//         return "Sapphire is blue"
//     } else if (color === "indigo") {
//         return "Indigo flowers are indigo"
//     } else if (color === "violet") {
//         return "Grapes are violet"
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(color) {
    switch(color) {
        case "red":
            return "Apples are red";
            break;
        case "orange":
            return "Oranges are orange";
            break;
        case "yellow":
            return "Sunflowers are yellow";
            break;
        case "green":
            return "Grass is green";
            break;
        case "blue":
            return "Sapphire is blue";
            break;
        case "indigo":
            return "Indigo flowers are indigo";
            break;
        case "violet":
            return "Grapes are violet";
            break;
        default:
            return "I don't know anything about " + color;
            break;
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var colorYes = confirm("Would you like to enter a color?");
if(colorYes) {
    var colorPick = prompt("Ok, what color?");
        alert(analyzeColor(colorPick))
} else {
    alert("Ok then")
}

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var luckDiscount = 0;
switch(luckyNumber) {
    case 1:
        luckDiscount = 10;
        break;
    case 2:
        luckDiscount = 25;
        break;
    case 3:
        luckDiscount = 35;
        break;
    case 4:
        luckDiscount = 50;
        break;
    case 5:
        luckDiscount = 100;
        break;
    default:
        luckDiscount = 0;
        break;
}
var totalPrice = prompt("What was your total bill?");
function calculateTotal(lucky,total) {
    return total * ((100 - lucky) / 100);
}
alert("Your lucky number was " + luckyNumber + "!");
alert("Your total bill was $" + Number(totalPrice).toFixed(2) + ", but with your lucky number discount, your new total is $" + Number(calculateTotal(luckDiscount,totalPrice)).toFixed(2) + "!");