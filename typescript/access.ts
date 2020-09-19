class Stud{
   private _studName:string;
  
   get studName():string{
     return this._studName;
   }
   set studName(sname: string) {
    this._studName = sname;
    }
    setStud(sname:string){
        this._studName = sname;
    }
    move(){
        console.log('hi');
    }   
}
let stud1 = new Stud();
stud1.studName = 'Kumaran';
console.log(stud1.studName);
stud1.move()

