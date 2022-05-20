console.log("we can see Destructuring");

// let a, b;
// [a, b] = [10, 20];
// console.log(a, b);

// let a, b, c, d;
// [a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// console.log(a, b, c, d);

({ a, b, c, ...d } = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, f: 9, i: 10 });
console.log(a, b, c, d);

const leptop = {
    company: "Asus",
    memory: "1tb",
    size: "16cm",
    price: 40000
}
let company, memory, size, price = leptop;
console.log(company, memory, size, price);