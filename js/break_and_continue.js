    var oddChosen = prompt("What's an odd number between 0 and 50?");
    while((oddChosen)) {
        if (oddChosen % 2 === 1 && oddChosen < 50 && oddChosen > 0) {
            break;
        } else {
            oddChosen = prompt("Please pick an odd number between 0 and 50.");
        }
    }
console.log("Number to skip is " + oddChosen);
for (var oddNumber = 1; oddNumber < 50; oddNumber += 2) {
    if (oddNumber == oddChosen) {
        console.log("Skipping " + oddNumber);
    } else {
        console.log(oddNumber);
    }
}