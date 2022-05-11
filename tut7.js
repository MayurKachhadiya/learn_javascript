console.log('array');

let marks = [56, 43, 23, 89, 65];
let name = ['hardik', 'jay', 'sanket', 'aniket'];
let mixed = [34, 76, 'aniket', 32, 'ketan'];

console.log(Array.isArray(marks));
console.log(Array.isArray('jhfbjhd'));

console.log(marks);
marks.push(1000);
marks.unshift(00);
marks.pop();
marks.shift();
marks.reverse();

console.log(name);
console.log(mixed);
console.log(name.concat(marks));

let obj = {
    name: 'mayur',
    college: 's.v. patel college',
    rollno: 34,
    marks: [78, 45, 34, 89, 67]
}
console.log(obj);
console.log(obj.name);
console.log(obj.college);
console.log(obj.rollno);
console.log(obj.marks);