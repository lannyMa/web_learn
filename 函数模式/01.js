function fn(){
    var age = 100;
    this.name = "maotai";
    this.getName=function () {
        console.log(this.name);
    }
}


console.log(fn.prototype);