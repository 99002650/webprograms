let comp= true
var promise = new Promise(function(resolve,reject){
    setTimeout(function(){
    if(comp){
        resolve('task completed')
    }else{
        reject('error occured');
    }
    },1000);
})