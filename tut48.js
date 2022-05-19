console.log("we can see regular expression with character set");

let reg = /Rocky bhai/;
reg = /R[a-z]cky bhai/;
reg = /R[a-zA-Z]cky bhai/;
reg = /R[a-zA-Z]cky b[0-9]hai/;
reg = /R[^0-9]cky bhai/;

// Quantifiers
reg = /Roc{2}ky bhai/;
reg = /Roc{0,2}ky bhai/;

// Grouping
reg = /(Roc){0,3}/;
let str = "RocRocky bhai";
let result = reg.exec(str);
console.log('result in exec ' + result);

if (reg.test(str)) {
    console.log(`this string is ${str} match the expression ${reg.source}`);
} else {
    console.log(`this string is ${str} do not match the expression ${reg.source}`);
}