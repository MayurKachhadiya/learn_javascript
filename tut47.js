console.log("we can see regular expression");

let reg = /Mayur/;
reg = /^Mayur/;
reg = /r$/;
reg = /M*ayur/;
reg = /M.ayur/;
reg = /Ma?yur?/;


str = "Mayus is web developer";

let result = reg.exec(str);
console.log("string exec is " + result);

if (reg.test(str)) {
    console.log(`The string ${str} match the expression ${reg.source}`);
} else {
    console.log(`The string ${str} do not match the expression ${reg.source}`);

}