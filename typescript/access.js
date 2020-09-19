var Stud = (function () {
    function Stud() {
    }
    Object.defineProperty(Stud.prototype, "studName", {
        get: function () {
            return this._studName;
        },
        set: function (sname) {
            this._studName = sname;
        },
        enumerable: true,
        configurable: true
    });
    Stud.prototype.setStud = function (sname) {
        this._studName = sname;
    };
    Stud.prototype.move = function () {
        console.log('hi');
    };
    return Stud;
}());
var stud1 = new Stud();
stud1.studName = 'Kumaran';
console.log(stud1.studName);
stud1.move();
var Emp = (function () {
    function Emp() {
    }
    Object.defineProperty(Emp.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            this._fullName = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Emp;
}());
var emp1 = new Emp();
emp1.fullName = "Bob Smith";
console.log(emp1.fullName);
