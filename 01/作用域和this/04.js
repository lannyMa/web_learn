console.log(total);
var total = 0;

function fn(num1, num2) {
    console.log(total);
    var total = num1 + num2;
    console.log(total);
}

fn(100, 200);
console.log(total);
