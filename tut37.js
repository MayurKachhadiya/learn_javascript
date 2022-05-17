console.log("we can see callback function");

const students = [
    { name: "mayur", subject: "PYTHON" },
    { name: "aniket", subject: "JAVA" }
]

function enrollStudent(student, callback) {
    setTimeout(function() {
        students.push(student);
        console.log("student has been enrolled");
        callback();
    }, 1000);
}

function getstudents() {
    setTimeout(function() {
        let str = "";
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 7000);

}

let newstudent = { name: "sunny", subject: "DBMS" }
enrollStudent(newstudent, getstudents);
// getstudent();