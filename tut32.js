console.log("we can see sycronice and asycronice");

// for (let index = 0; index < 10005; index++) {
//     const element = index;
//     console.log("This is index no" + index);
// }

// console.log("done printing");

setTimeout(() => {
    for (let index = 0; index < 10005; index++) {
        const element = index;
        console.log("This is index no" + index);
    }
}, 100);

console.log("done printing");