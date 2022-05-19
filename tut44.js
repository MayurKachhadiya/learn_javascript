console.log("we can see try catch final");

// let a = "";
let a = "Mayur";
if (a != undefined) {
    // console.log("hyy");
    throw new Error("this is not undefined");
    console.log("hyy");

} else {
    console.log('this is undefined');
}

try {
    console.log("we can see try");
    Abort();
} catch (error) {
    console.log("Are you okay");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log("Finally we will run this");
}