console.log("we can see for-in and for-of loop");

let people = ["MAYUR", "FENIL", "ANIL", "KENIL", "SMIT"];

//For-in loop
for (const abc in people) {
    console.log(people[abc]);
}

//For-of loop 
for (const abcd of people) {
    console.log(abcd);
}