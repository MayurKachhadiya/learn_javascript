console.log("we are see object & constructor");


let car = {
    name: "BMW",
    speed: 180,
    run: function() {
        console.log("car is running");
    }
}

// Now we can create constroctor & object

// function generalCar(Cname, Cspeed) {
//     this.Carname = Cname;
//     this.Carspeed = Cspeed;
//     this.run = function() {
//         console.log(`${this.Carname} is running`);
//     }
//     this.analyze = function() {
//         console.log(`This is slower by ${200 - this.Carspeed} KM/H Than Mercedes`);
//     }
// }
// car1 = new generalCar("Maruti", 80);
// car2 = new generalCar("Nissan", 140);
// console.log(car1);

// constroctor
function generalCar(Cname, Cspeed, Ccolor) {
    this.Carname = Cname;
    this.Carspeed = Cspeed;
    this.Carcolor = Ccolor;
    this.run = function() {
        console.log(`${this.Carname} is running`);
    }
    this.analyze = function() {
        console.log(`This is slower ${200 - this.Carspeed} than mercedes`);
    }
}
car1 = new generalCar("Maruti", 80, "red");
car2 = new generalCar("BMW", 190, "GREEEN");
console.log(car1, car2);