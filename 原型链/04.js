function Fn() {
    this.x = 1996;
    this.sum = function () {
    }
}

Fn.prototype.getX = function () {
    console.log(this.x);
};

f1 = new Fn;
f2 = new Fn;

// console.log(Fn);
// console.log(Fn.prototype);
// console.log(Fn.prototype.constructor);
// console.log(Fn.prototype.constructor === Fn);
// x 是f1的一个属性
console.log(f1.hasOwnProperty("x"));

/*
* 3.原型链模式
* 3.1 先在私有作用域查找
*     console.log(f1.hasOwnProperty("x"));
* 3.2 原型上定义的属性和方法都是共有方法
* */

f1.getX === f2.getX;
f1.__proto__.getX === f2.getX;
f1.getX === f2.__proto__.getX;
f1.getX === Fn.prototype.getX;

console.log(f1.sum === Fn.prototype.sum);

// f1.hasOwnProperty -->f1.__proto__.__proto__.hasOwnProperty();

f1.sum = function () {
    //修改私有的sum
};

f1.__proto__.sum = function () {
    //修改所属类原型上的sum  ie浏览器不允许这样做
};


Fn.prototype.sum = function () {
    // 修改公有的sum
};



/*
* 单例模式--隔离
工厂模式/构造函数--减少重复
            - 创建对象有new
            - 自动创建obj,this赋值
            - 无return
原型链模式 - 进一步去重

类是函数数据类型,每个函数都有prototype
                                    constructor->指向原型本身
                                    __proto__->指向object类的prototype地址
实例是对象数据类型:每个对象都有__proto__属性->指向所属类的prototype地址


* */