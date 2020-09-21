// interface extending class
// methods will come as abstract
class Vehicle{
    constructor(public brand:string,public model:string){}
    getBrand= ():string=>{
        return this.brand;
    }
}
class Accessories{
    constructor(public acc1:string,public acc2:string){}
    getAccessories = ():void=>{
        console.log(this.acc1,this.acc2);
    }
}
interface IDetails extends Vehicle,Accessories{
    getMileage: () =>void;
}
class A implements IDetails{
    getMileage= () =>{}
    getBrand= () => {
        return 'p'};
    getAccessories= () =>{ };
    
}

