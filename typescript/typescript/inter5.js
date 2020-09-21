function gadgetDetails() {
    console.log('gadgets');
    return ({
        charging: function () { },
        call: function () { }
    });
}
var newgadget = gadgetDetails();
newgadget.charging(); // same method can be called
//newgadget.call();    // not visible, throws error
