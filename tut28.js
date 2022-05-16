console.log("we can see prototype");

function cars(name, speed) {
    this.cname = name;
    this.cspeed = speed;
}

// function obj(givanname) {
//     this.name = givanname
// }
cars.prototype.getName = function() {
    return this.cname;
}
cars.prototype.setName = function() {
    return this.cname;
}
let car1 = new cars("bmw", 190);
console.log(car1);