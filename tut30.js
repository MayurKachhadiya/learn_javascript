console.log("we can see prototype inheritance");

const family = {
    name: function() {
        return "Mayur";
    },
    surname: function() {
        return "kachhadiya";
    }
}

let fm = Object.create(family);
fm.name = "mayure.k";
fm.surname = "kachhadiya";
fm.chamgename = ("smit")
console.log(fm);

// function fruits(name, price) {
//     this.name = name;
//     this.price = price;
// }
// fruits.prototype.status = function() {
//     return "fruits is available";
// }

// let frt = new fruits("mango", 90);
// // let lt = new fruits("apple", 140);
// // let fly = new fruits("apricot", 80);
// // let lu = new fruits("banana", 120);

// console.log(frt.status());
// // console.log(lt);
// // console.log(fly);
// // console.log(lu);

// function jyus(name, price, size) {
//     fruits.call(this, name, price);
//     this.size = size;
// }

// jyus.prototype = Object.create(fruits.prototype);
// let frt2 = new jyus("Apple", 90, 14);
// console.log(frt2);
// console.log(frt2.status());

function fruit(name, price) {
    this.name = name;
    this.price = price;
}
fruit.prototype.status = function() {
    return "Fruit is available";
}

let frt = new fruit("Apple", 140);
console.log(frt);
console.log(frt.status());

function jyus(name, price, size) {
    fruit.call(this, name, price, size);
}

jyus.prototype = Object.create(fruit.prototype);
let jys = new jyus("banana", 110, 2);
console.log(jys);
console.log(jys.status());