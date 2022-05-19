console.log("Dragon Travel desk Form");

let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let valueuser = false;
let valueemail = false;
let valuephone = false;
$('#success').hide();
$('#failure').hide();


name.addEventListener('blur', () => {
    console.log("user blurred..");
    let reg = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(reg, str);
    if (reg.test(str)) {
        console.log("it is matched");
        name.classList.remove("is-invalid");
        name.classList.add("is-valid");
        valueuser = true;

    } else {
        console.log("it is not matched");
        name.classList.add("is-invalid");
        name.classList.remove("is-valid");

    }
})

email.addEventListener('blur', () => {
    console.log("email blur..");
    let reg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(reg, str);
    if (reg.test(str)) {
        console.log("it is matched");
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        valueemail = true;
    } else {
        console.log("it is not matched");
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");

    }
})

phone.addEventListener('blur', () => {
    console.log("phone blur..");
    let reg = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(reg, str);
    if (reg.test(str)) {
        console.log("it is matched");
        phone.classList.remove("is-invalid");
        phone.classList.add("is-valid");
        valuephone = true;
    } else {
        console.log("it is not matched");
        phone.classList.add("is-invalid");
        phone.classList.remove("is-valid");
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(valueuser, valueemail, valuephone);

    if (valueuser && valueemail && valuephone) {
        let success = document.getElementById("success");
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();

    } else {
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();

    }
});