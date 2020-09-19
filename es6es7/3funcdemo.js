greet();
greet('Welcome');
function greet(){
    console.log("Hello");
}
function greet(msg){
    console.log("Hi "+msg);
}
var greeter = ()=> "Welcome to js";
var sum = (x,y)=> console.log(x+y);

// console.log(greeter());
// sum(10,20);

var inFunction = function(){
    var x = 10;
    var trial = function(){
      console.log("Inside function"+x);
    }
    trial();
    console.log("outside function"+x);
}
inFunction();

// //IIFE
var imFun = function(){
    var x = 10;
    var trial = function(){        
        console.log("Inside function"+x);
    }();
    console.log("outside function"+x);
}
imFun();

// //IIFE
var immFun = function(){
    var x =10;
    (function(){
     console.log("Inside function"+x);
    })();
    console.log("outside function"+x);
}
// immFun();

var calcAvg = function(num1,num2,num3){
    return(function(){
        return (num1 +num2+num3);
    })()/3; 
}
console.log(calcAvg(10,20,30));

var calcAvg = (num1,num2,num3)=>{
    return(function(){
        return (num1 +num2+num3);
    })()/3; 
}
console.log(calcAvg(10,20,30));

// //arrow functions
// var greetMsg = () =>{
//     console.log("Arrow function");
// }
// greetMsg();
// greeter = ()=> console.log("Single line function");
// greeter();
//default values
var fun = (a,b=10)=>console.log(a+b); 
fun();
fun(500);
fun(30,20);

// var fun = (a=20,b)=>console.log(a+b); 
// fun();      //NAN
// fun(300); //NAN
// fun(30,20);




