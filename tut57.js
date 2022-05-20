console.log("we can see maps");

const myMap = new Map();
const key1 = "String1";
const key2 = {};
const key3 = function() {};

myMap.set(key1, "this is a string");
myMap.set(key2, "this is a blank object");
myMap.set(key3, "this is a blank function");

let value = myMap.get(key3);
console.log(value);

for (const [key, value] of myMap) {
    console.log(key, value);
}

for (const key of myMap.keys()) {
    console.log(key);
}

for (const value of myMap.values()) {
    console.log(value);
}

myMap.forEach((key, value) => {
    console.log(key);
    console.log(value);
});

let myarray = Array.from(myMap);
console.log(myarray);

let mykey = Array.from(myMap.keys());
console.log(mykey);

let myvalue = Array.from(myMap.values());
console.log(myvalue);