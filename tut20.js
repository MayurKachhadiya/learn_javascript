console.log("we can see local storage and sesson storage");

let ls = localStorage.setItem("Name", "Mayur");
let ld = localStorage.setItem("Name2", "keyur");
console.log(ls);
console.log(ld);

let lg = localStorage.getItem("Name");
let le = localStorage.getItem("Name2");
console.log(lg);
console.log(le);

let ss = sessionStorage.setItem("Name", "Aniket");
console.log(ss);
let sn2 = sessionStorage.setItem("Name2", "abhi");
console.log(sn2);

let ssg = sessionStorage.getItem("Name");
console.log(ssg);
let sa = sessionStorage.getItem("Name2");
console.log(sa);

// let scc = sessionStorage.clear();


// let lc = localStorage.clear("Name");
// console.log(lc);