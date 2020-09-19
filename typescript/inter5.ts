//union types
interface Mobile {
    charging: ()=>void;
    call: ()=>void;
}
interface Laptop {
    charging: ()=>void;
    work: ()=>void;
}
function gadgetDetails(): Mobile | Laptop {
    console.log('gadgets');
    return ({
      charging: ()=>{console.log('charging')},
      call: ()=>{console.log('calling')},
      work: ()=>{console.log('working')},

       });
}

let newgadget = gadgetDetails();
newgadget.charging(); // common methods can be called
newgadget.work();    // not visible, throws error


















