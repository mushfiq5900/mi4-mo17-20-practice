function mileConv(kmValue){
    var mile = kmValue/1.60934;
    return mile;
}

var input = 10;
var output = mileConv(input);
console.log(output);