console.log("we can see Ajex");

let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', addfetchdata)

function addfetchdata() {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://dummyjson.com/products/1', true);
    xhr.getResponseHeader('content-type', 'application/json');

    xhr.onprogress = function() {
        console.log("On Progress");
    }

    xhr.onreadystatechange = function() {
        console.log('ready state is ', xhr.readyState);
    }

    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.error("some error occured");
        }
    }
    params = `
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "...",
      "images": ["...", "...", "..."]
    }`;

    xhr.send(params);

}