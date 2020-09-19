//interface with object literal
interface Shaper{
    x: number; y: number; z?: number;
    //printArea: ()=>void;
    printArea():void;
}
class Rect implements Shaper{
    constructor(public x: number,public y: number,public z?: number){

    }
    printArea =  ()=> {
        console.log(this.x*this.y);
    }
}
createShape(new Rect(10,30));
// no lambda inside object literal
var sq = {
    x: 10,
    y: 10,
    printArea: function () {
        console.log(this.x*this.y);
    }
};
console.log(sq.x);
sq.printArea();

var createShape = function (shape: Shaper) {
    shape.printArea();
};
createShape(sq);
createShape({
    x: 10,
    y: 10,
    z: 30,
    printArea: function () {
        console.log('SQ', (this.x*this.y*this.z));
    }
});

createShape({
    x: 10,
    y: 40,
    printArea: function () {
        console.log('Rect', 2 * (this.x+this.y));
    }
});