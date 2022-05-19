console.log("we can see Shorthand character class");

let reg = /ROCKY/;
reg = /\wKY/;
reg = /\w+Y/;
reg = /\WIS/;
reg = /\W+IS/;
reg = /\sBA/;
reg = /\s+BA/;
reg = /\SA/;
reg = /\S+C/;
reg = /Y\d+/;
reg = /7\D+/;


let str = "ROCKY007 IS BACK";
let result = reg.exec(str);
console.log("Result in exec function: " + result);

if (reg.test(str)) {
    console.log(`The string is ${str} match the expression ${reg.source}`);
} else {
    console.log(`The string is ${str} do not match the expression ${reg.source}`);
}