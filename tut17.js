console.log("we can see events");

document.getElementById('heading').addEventListener('click', function(e) {
    let variable;
    console.log("you have clicked the heading");
    variable = e.target.className;
    variable = e.target.classList;
    variable = Array.from(e.target.classList);
    variable = e.target.id;
    console.log(variable);
    // location.href = "//vnsgu.com";
});