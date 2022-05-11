console.log('this is if else switch tutorial ');
const age = 18;
const dosedrive = false;

// if (age == 18) {
//     console.log("you can drive");
// } else if (age == 38) {
//     console.log("you can drive");
// } else {
//     console.log("you cannot drive");
// }

// if (dosedrive && age > 18) {
//     console.log("you can drive");
// } else {
//     console.log("you cant drive");
// }


// if (dosedrive || age > 18) {
//     console.log("you can drive");
// } else {
//     console.log("you cant drive");
// }

// console.log(age > 18 ? "you can drive" : "you cant drive");

switch (age) {
    case 18:
        console.log("you can drive");
        break;
    case 28:
        console.log("you can drive");
        break;
    case 38:
        console.log("you can drive");
        break;
    default:
        console.log("please enter your age");
        break;
}