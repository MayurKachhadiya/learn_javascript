console.log("we can see more events");

let even = document.getElementById("btn");
even.addEventListener("click", fun1);
even.addEventListener("dblclick", fun2);
even.addEventListener("mouseleave", fun3);
even.addEventListener("mousemove", fun4);


function fun1(e) {
    console.log("you are click btn", e);
    e.preventDefault();
}

function fun2(e) {
    console.log("you are dbl click", e);
}

function fun3(e) {
    console.log("your mouse leave", e);
}

function fun4(e) {
    console.log("your mouse move", e);
}