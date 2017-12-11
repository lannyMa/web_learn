function WriteJsPerson(name,age) {
    var obj = {};
    obj.name=name;
    obj.age = age;
    obj.writeJs=function () {
        console.log(this.name+"hello")
    };
    return obj;
}

p1 = WriteJsPerson("yifei",22);
p1.writeJs();


p2 = new WriteJsPerson("yifei",23);
p2.writeJs();

//构造函数和工厂模式区别
/*

1,执行时候
普通函数-> createJsPerson()
工厂模式-> new CreateJsPerson(),返回值是该类的一个实例.

var arr=[];
var arr = new Array[]; //(构造函数方法创建)arr是数据类的一个实例

*/

