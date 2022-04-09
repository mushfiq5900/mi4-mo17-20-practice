function checker(inpNumber) {
    if (inpNumber % 2 == 0) {
        inpNumber = "Even";
        return inpNumber;
    }
    else if (inpNumber % 2 != 0) {
        inpNumber = "Odd";
        return inpNumber;
    }
}

var input = 100;
var result = checker(input);
console.log(result);