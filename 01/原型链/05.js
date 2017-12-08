/**
 *
 * 批量设置共有属性和方法
 *
 *
 */


function Fn() {
    this.x = 100;
}

// 1,逐一添加法
// Fn.prototype.getX = function () {
//
// };
// Fn.prototype.getY = function () {
//
// };
// Fn.prototype.getZ = function () {
//
// };

// var pro = Fn.prototype;
// pro.getX = function () {
//
// };
// pro.getY = function () {
//
// };
// pro.getZ = function () {
//
// };

var f1 = new Fn();

// 2.重构原型方法
Fn.prototype = {
    constructor: Fn, // 如果不指定.就会变成object,而非本函数
    a: function () {

    },
    b: function () {

    }
};
console.log(Fn.prototype.constructor === Fn);
console.log(f.constructor);



// function Fn() {
//     this.x = 100;
// }
//
// Fn.prototype = {
//     a: function () {
//
//     }
// };
//
// var f = new Fn();
// console.log(f.constructor);