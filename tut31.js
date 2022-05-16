console.log("we can see class ES6");

class employee {
    constructor(givanname, givanexperience, givansalary) {
        this.name = givanname;
        this.experience = givanexperience;
        this.salary = givansalary;
    }
    slogan() {
        return `i am ${this.name},this compuny is best `;
    }
    joiningYear() {
        return 2022 - this.experience;
    }
    static add(a, b) {
        return a + b;
    }
}
class programmer extends employee {
    constructor(givanname, givanexperience, givansalary, language, github) {
        super(givanname, givanexperience, givansalary);
        this.language = language;
        this.github = github;
    }
    favLanguage() {
        if (this.language == 'python') {
            return 'python';
        } else {
            return 'javascript';
        }
    }
    static multipy(e, r) {
        return e * r;
    }
}
let emp = new employee("Mayur", 10, 200000);
console.log(emp);
console.log(emp.slogan());
console.log(emp.joiningYear());
console.log(employee.add(4, 5));
let pgm = new programmer("Smit", 8, 120000, "python", "smit23");
console.log(pgm);
console.log(pgm.slogan());
console.log(pgm.joiningYear());
console.log(programmer.multipy(3, 4));
console.log(pgm.favLanguage());