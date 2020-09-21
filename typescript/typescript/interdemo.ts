interface IShape{
    nlength: number;
    breth: number;
    printArea:()=>void;
}
let square :IShape = {
    nlength:10,
    breth:10,
    printArea: ()=>{
        console.log(this.nlength*this.breth);
    }
}
console.log(square.nlength);
square.printArea();

var createNewShape = (shape:IShape)=>{
    shape.printArea();
}
createNewShape({
    nlength:10,
    breth:10,
    printArea: ()=>{
        console.log('SQ',(this.nlength*this.breth));
    }
});
createNewShape({
    length:10,
    breth:10,
    printArea: ()=>{
        console.log('Rect',2*(this.nlength+this.breth));
    }
});