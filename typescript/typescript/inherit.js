var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Employ = (function () {
    function Employ(name, city) {
        this.name = name;
        this.city = city;
        this.print = function () {
            console.log('welcome');
        };
    }
    return Employ;
}());
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager(name, city, salary) {
        _super.call(this, name, city);
        this.name = name;
        this.city = city;
        this.salary = salary;
        this.printw = function (msg) {
            console.log('Hello');
        };
    }
    return Manager;
}(Employ));
var emp = new Manager('Ram', 'Bangalore', 1000);
emp.print();
console.log(emp instanceof Employ);
console.log(emp instanceof Manager);
