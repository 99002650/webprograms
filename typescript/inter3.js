var Calc = (function () {
    function Calc() {
        this.add = function (x, y) {
            console.log(x + y);
        };
        this.sub = function (x, y) {
            console.log(x - y);
        };
        this.square = function (x) {
            console.log(x * x);
        };
    }
    return Calc;
}());
function performOperation(calc, x, y) {
    calc.square(x);
    calc.add(x, y);
}
performOperation(new Calc(), 20, 30);
