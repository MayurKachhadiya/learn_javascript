console.log("we can see fetch api");

let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

function getdata() {
    url = "https://api.github.com/users";
    fetch(url).then(element => element.json())
        .then(data => console.log(data))

}

function postdata() {
    url = "https://dummyjson.com/products/add";
    data = '{"id": 101,"title": "BMW Pencil"}';
    params = {
        method: 'post',
        headers: { 'Content-Type': 'application/json ' },
        body: data
    }
    fetch(url, params).then(element => element.json())
        .then(element => console.log(data))
}

postdata();
// getdata();