interface NewShaper{
    x:number;
    y:number;
    z?:number;
    printArea():void;
}
class Rectangle implements NewShaper{
    constructor(public x:number,
        public y:number){}
    printArea = ()=>{
        console.log(this.x*this.y);
    }
}
var square = {
    x:10,
    y:10,
    printArea: function(){
        console.log(this.x*this.x);
    }    
}

var createShape =function(shape:NewShaper){
    shape.printArea();
}
createShape(new Rectangle());
createShape(square);

createShape({
    x:10,
    y:10,
    printArea: function(){
       console.log(this.x*this.x);
        
})








