function leapCheck(yearInp) {
    if (yearInp % 4 == 0) {
        let leapYear = "This year is Leap Year";
        return leapYear;
    }
    else if (yearInp % 4 != 0) {
        let notLeapYear = "This year is not Leap Year"
        return notLeapYear;
    }
}

let input = "2009";
let result = leapCheck(input);
console.log(result);