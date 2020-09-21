abstract class Animal{
    constructor(public name:string){}
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}
class Dog extends Animal{
    constructor(public name:string){
        super(name);
    }
    makeSound(){
        console.log("bark");
    }
    play(){
        console.log("play");

    }
}
let bruno:Animal = new Dog('Bruno');
bruno.makeSound();
bruno.move();

