var num = 12;
function fn() {
    var num = 120;
    return function () {
        console.log(num);
    }
}

var f = fn();
f();

~function () {
    var num = 1200;
    f();
}();