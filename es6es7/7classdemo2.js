// computed member names
let dname = 'details'
let Student = class{
    constructor(name,city){
        this.name = name;
        this.city = city;
    }
    set[dname](lname){
        this.name = this.name+" "+lname.toUpperCase();
        this.city.toUpperCase();
    }
    get[dname](){
        return this.name+" "+this.city;
    }
    // static method
    static show(){
        console.log('static methods');
    }
}
stud = new Student('Ram','Bangalore');
console.log(stud);
stud.details='Krish';
console.log(stud.details);
Student.show();