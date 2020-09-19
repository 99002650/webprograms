class User{
    private _name:string;
    public constructor(name:string){
        this._name = name;
    }
    public print(name:string){
        console.log(name);
    }
   
}
class WebUser extends User{
    public constructor( name:string){
        super(name);
    }
    
 
}
let user: User = new WebUser('Ram');
const user1: User = new User('Rama');
