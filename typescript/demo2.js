var Trial = (function () {
    function Trial() {
    }
    Trial.prototype.greet = function () {
        console.log("welcome to TS");
    };
    return Trial;
}());
var obj = new Trial();
obj.greet();
