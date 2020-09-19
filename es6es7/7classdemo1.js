// class Employee{
let Employee = class{
    constructor(name,city){
        this.name = name;
        this.city = city;
    }
    setName(name){
        this.name=name.toUpperCase();
    }
    getName(){
        return this.name;
    }
}
// emp = new Employee('Ram','Ban');
// console.log(emp);
// emp.setName('Ram');
// console.log(emp.getName());
// console.log(typeof emp);
// console.log(emp instanceof Employee);

let Student = class{
    constructor(fname,city){
        this.fname = name;
        this.city = city;
    }
    set details(lname){
        this.fname = (this.fname+" "+lname).toUpperCase();
        this.city.toUpperCase();
    }
    get details(){
        return this.fname+" "+this.city;
    }
}
stud = new Student('Ram','Bangalore');
console.log(stud);
stud.details='Krish';
console.log(stud.details);
export {Student}