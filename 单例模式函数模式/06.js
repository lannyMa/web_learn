function WriteJsPerson(name,age) {
    this.name=name;
    this.age = age;
    this.writeJs=function () {
        console.log(this.name+"hello")
    };
}


p2 = new WriteJsPerson("yifei",23);
p2.writeJs();

console.log("----------------------------");
console.log(typeof p2);
console.log(typeof WriteJsPerson);
//构造函数和工厂模式区别
/*

1,执行时候
普通函数-> createJsPerson()
工厂模式-> new CreateJsPerson(),返回值是该类的一个实例.

var arr=[];
var arr = new Array[]; //(构造函数方法创建)arr是数据类的一个实例

所有的类都是函数数据类型   CreateJsPerson
所有的实例都是对象数据类型  p2


2. 写的时候
不用手动新建 obj --自动会创建
不会返回 obj    --自动会返回
*/

