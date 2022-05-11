console.log("we can see selectors");

let elem = document.getElementById("heading");
elem.style.color = "red";
elem.innerText = "Welcome to Java Script";
elem.innerHTML = "<i>Welcome to Java Script</i>";
console.log(elem);

let eleme = document.querySelector(".childul");
eleme.style.color = "green";
eleme.innerHTML = "<b>child</b>";
console.log(eleme);

let elemet = document.getElementsByClassName("child");
elemet = document.getElementsByClassName("container");
elemet = document.getElementsByTagName("div");

Array.from(elemet).forEach(element => {
    console.log(element);
    element.style.color = "red";
});
// elemet.style.color = "green";