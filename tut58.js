console.log("we can see set");

// let myset = new Set();
// myset.add('MAYUR');
// myset.add({});
// myset.add(23);
// console.log(myset);

let myset2 = new Set(['ANIKET', 10, { a: 10, b: 20 }, true, false]);
// console.log(myset2.has('ANIKET'));
// console.log(myset2);
// myset2.delete(10);
// console.log(myset2);

// myset2.forEach(abc => {
//     console.log(abc);
// });

arr = Array.from(myset2);
console.log(arr);