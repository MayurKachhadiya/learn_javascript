console.log('we can see create ,replacing, delete element');

let element = document.createElement("li");
let text = document.createTextNode("hyy, i am mayur kachhadiya");
element.appendChild(text);
element.id = "lastli";
element.className = "lastli";
// element.innerText = "hello created bt mayur";
// element.innerHTML = "<b>hello created by mayur</b>"
console.log(element);

let ul2 = document.querySelector("ul.this");
ul2.appendChild(element);
console.log(ul2);
console.log(element);

let hd = document.createElement("h3");
let text2 = document.createTextNode("this is code with harry");
hd.appendChild(text2);
hd.id = "h33";
hd.className = "h33";
hd.setAttribute("href",
    "www.codewithharry.com");
// console.log(hd);

let ul = document.querySelector("ul.this");
// ul.appendChild(hd);
ul.appendChild(hd);
element.replaceWith(ul);
// ul.replaceChild(element, document.getElementById("lastli"));
ul.removeChild(document.getElementById("h33"));
console.log(ul);
// console.log(hd);