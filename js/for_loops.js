function showMultiplicationTable(number) {
    for (var multiplier = 0; multiplier<=10; multiplier++) {
        console.log(number + " * " + multiplier + " = " + (number * multiplier))
    }
}
showMultiplicationTable(7);

for (var randoms = 1; randoms <= 10; randoms++) {
    var randomNumber = Math.floor((Math.random()*180)+20);
    if (randomNumber % 2 === 1) {
        console.log(randomNumber + " is odd.")
    } else {
        console.log(randomNumber + " is even.")
    }
}


    for (var i = 1; i <= 9; i++) {
        var number = i;
        console.log(Array(number + 1).join(number));
    }

for (var number = 100; number > 0; number -= 5) {
    console.log(number);
}