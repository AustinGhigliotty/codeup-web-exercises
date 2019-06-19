var double = 1;
while(double < 50000) {
    double *= 2;
    console.log(double);
}

var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones);
do {
    var sellCones = Math.floor(Math.random() * 5) + 1;
    if (allCones >= sellCones) {
        allCones -= sellCones;
    } else {}
    if (allCones === 0) {
        console.log("I sold all the cones!");
    } else if (allCones < sellCones) {
        console.log("I don't have " + sellCones + " cones, I only have " + allCones + "...")
    } else {
        console.log(sellCones + " cones sold.")
    }
} while(allCones >= sellCones);