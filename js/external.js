console.log("Hello from external JavaScript");
alert('Welcome to my Website!');
var color = prompt("What is your favorite color?");
alert("Great, " + color + " is my favorite color too!");

var movieMermaid = prompt("How many days for The Little Mermaid?");
var movieBear = prompt("How many days for Brother Bear?");
var movieHercules = prompt("How many days for Hercules?");
alert("At $3 a day, you would pay $" + ((3 * movieMermaid) + (3 * movieBear) + (3 * movieHercules)));

var hoursFacebook = prompt("How many hours working for Facebook?");
var hoursGoogle = prompt("How many hours working for Google?");
var hoursAmazon = prompt("How many hours working for Amazon?");
alert("You will get paid $" + ((400 * hoursGoogle) + (350 * hoursFacebook) + (380 * hoursAmazon)));

var classMax = prompt("What is the maximum number of students in the class?");
confirm("Are there less than " + classMax + " students currently registered?");
var classTime = prompt("When did this class start?");
confirm("Are you available at " + classTime + " to take this class?");

var itemsBought = prompt("How many items are you buying?");
if (itemsBought > 2) {
    var offerExpired = confirm("Has the product offer expired?");
    if (offerExpired === true) {
        alert("You're good to go!")
    } else {
        alert("You can't use an expired offer.")
    }
} else {
    alert("You don't have enough items.")
}