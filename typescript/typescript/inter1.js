var sq = {
    x: 10,
    y: 10,
    printArea: function () {
        console.log(this.x * this.y);
    }
};
console.log(sq.x);
sq.printArea();
var createShape = function (shape) {
    shape.printArea();
};
createShape({
    x: 10,
    y: 10,
    z: 30,
    printArea: function () {
        console.log('SQ', (this.x * this.y * this.z));
    }
});
createShape({
    x: 10,
    y: 40,
    printArea: function () {
        console.log('Rect', 2 * (this.x + this.y));
    }
});
