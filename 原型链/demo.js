// var num = 1002;
// var obj = {
//     num: 13,
//     fn: (function (num) {
//         this.num = num + 20;
//         num += 20;
//         return function () {
//             this.num = num + 20;
//             num += 20;
//             console.log(num);
//         }
//     })(obj.num)
// };
// var fn=obj.fn();
// fn();
// obj.fn();
// console.log(global.num,obj.num);

function Fn(){

}

Fn.prototype={
    a:function () {

    },
    b:function () {

    }
};

console.log(Fn.constructor);