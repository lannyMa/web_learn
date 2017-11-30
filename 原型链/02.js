function createJs(name, age) {
    this.name = name;
    this.age = age;

}

createJs.prototype.writeJs = function () {
    console.log(this.name, this.age)
};

p1 = new createJs("maotai", 22);
p1.writeJs();
p2 = new createJs("maotai2", 23);
p2.writeJs();

console.log(p1.writeJs === p2.writeJs);


/*
*
* 1.每个函数数据类型(普通函数  类)都有个prototype属性,这个属性是一个对象数据类型的值
* 2.prototype上的浏览器天生给他加上了个constructor(构造函数),属性只是类本身
*     类:prototype
*         constructor
*         __proto__
* 3.每个对象都有__proto__属性
* 4.对象的__proto__指向所属类的原型
* 5.object原型上没有__proto__
* */


