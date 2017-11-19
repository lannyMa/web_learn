function createJs(name, age) {
    this.name = name;
    this.age = age;
    this.writeJs = function () {
        console.log(this.name, this.age)
    }
}

p1 = new createJs("maotai", 22);
p1.writeJs();
p2 = new createJs("maotai2", 23);
p2.writeJs();