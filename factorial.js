// var factorialInput = 21;
// var res = 1;
// for(var i=1;i<=factorialInput; i++){
//     res = res * i;
// }
// console.log(res);

//**********Using While Loop *************/


// var input = 5;
// var res = 1;
// while (input != 1) {
//     res = res * input;
//     input--;
// }
// console.log(res);

//**********Using While Loop And Function *************/

function factorial(getInput) {
    let res = 1;
    while (getInput != 1) {
        res = res * getInput;
        getInput--;
    }
    return res;
}

let factResult = factorial(5);
console.log(factResult);  