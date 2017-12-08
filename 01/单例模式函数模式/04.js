var p1 = {
    name: 'wxb',
    age: 22,
    writejs: function () {
        console.log(this.name + ' can sing.....')
    }
};


var p2 = {
    name: 'mmm',
    age: 18,
    writejs: function () {
        console.log(this.name + 'i can sing.....')
    }
};

// 工厂模式: 减少冗余代码.实现函数的封装

function writeNode(name,age) {
    var obj = {};
    obj.name=name;
    obj.age = age;
    obj.writeNode=function () {
        console.log(this.name+"hello")
    };
    return obj;
}

var p3 = writeNode("yifei",22);
p3.writeNode();
var p4 = writeNode("feifei",18);
p4.writeNode();
