console.log("we can see symbols");

let mysym = Symbol("My Name is mayur");
let mysys = Symbol("My Name is mayur");

console.log(mysym === mysys);
// if (mysym === mysys) {
//     console.log("it is not same");
// }

let k1 = "hyy";
let k2 = "hyy";
console.log(k1 === k2);
myobj = {
    k1: "ANIKET",
    k2: "SMIT"
};

console.log(myobj.k1);
for (const key in myobj) {
    console.log(key, myobj[key]);
}