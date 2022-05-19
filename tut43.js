console.log("we can see async and await");

// async function getdata() {
//     console.log("inside getdata function");
//     const response = await fetch('https://api.github.com/users');
//     console.log("After fetch api");
//     const users = await response.json();
//     console.log("now resolve a users problem");
//     return users
// }

// console.log('Before calling getdata')
// let a = getdata();
// console.log('After calling getdata');
// console.log(a);
// a.then(data => console.log(data));
// console.log('last line of js file');


async function getdata() {
    console.log("first create api");
    const response = await fetch('https://api.github.com/users');
    console.log("after fetch data");
    const users = await response.json();
    console.log("we can resolve problem");
    return users;
}

console.log("before calling getdata");
let a = getdata();
console.log("after calling getdata");
console.log(a);
a.then(data => console.log(data));
console.log("Last line of the js file");