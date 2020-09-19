function sayHello(){
    console.log('hi')
    return 'Have a great day';
}
// sayHello()
var sample =(greet=sayHello)=>{
    console.log('welcome');
    console.log(greet())
}
sample()