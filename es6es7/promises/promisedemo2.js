let completed = false
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    if(completed)
        resolve('Task completed')
    else{
        reject('task incomplete')
    }},1000);
})
promise.then((data)=>console.log(data),(error)=>console.log('error '+error));
