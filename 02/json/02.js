var arr = [44, 13, 12, 11, 1, 22, 29];
//1. 先排序 后取出第一项和最后一项
// arr.sort(
//     function (a, b) {
//         return a - b
//     }
// );
// var min = arr[0];
// var max = arr[arr.length - 1];
// console.log(min, max);

//2. 字符串拼接
// var max = Math.max(11,5,24,1);
// console.log(max);
//
// var max = Math.max(eval(arr.toString())); // 可惜返回最后一个
// console.log(max);

// Math.max(33,11,8) 使用数学方法,这样才可以找出max
// var max = eval("Math.max("+[33,1,23,11].toString()+")");
// console.log(max);

// 另一种思路
var max = Math.max.apply(null,arr);
var min = Math.min.apply(null,arr);
console.log(max);
console.log(min);

//3. 假设法
// var max = arr[0],
//     min = arr[0];
// for (i = 0; i < arr.length; i++) {
//     var cur = arr[i];
//     cur > max ? max = cur : null;
//     cur < min ? min = cur : null;
// }
// console.log(max);
// console.log(min);




// eval("1+2+3");
// eval("11,33,12"); // 12
// eval("11,33"); // 33
// 6.括号表达式
// function fn1() {
//     console.log(1);
// }
//
// function fn2() {
//     console.log(this);
// }
// ;(fn2)(); // -> 2
// ;(fn1, fn2)(); // ->2
//
// console.log('--------------');
//
// var obj = {name: "zf", fn: fn2};
// (fn2, obj.fn)();











