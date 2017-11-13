// 单例模式: 把描述同一个事物的属性和方法放在同一个内存空间下.
// 优点: 分组,防止冲突
// p1 p2也叫做命名空间(模块开发)

var p1 = {
    name: "yifei",
    age: 22
};

var p2 = {
    name: "wangjie",
    age: 18
};

console.log(p1.name);
console.log(p2.name);