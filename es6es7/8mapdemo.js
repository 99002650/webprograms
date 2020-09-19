var empMap = new Map();
empMap.set('name', 'John'); 
empMap.set('id', 2345796);
empMap.set('hobbies', ['js', 'ruby', 'python']);

console.log(empMap.get('name')); // John
console.log(empMap.get('id')); // 2345796
console.log(empMap.get('hobbies')); // ['js', 'ruby', 'python']
console.log(empMap.keys());
console.log(empMap.values());
console.log(empMap.size);

empMap.forEach((val,index)=>{
 console.log("Key",index,"Value",val);
})
for (let [key, value] of empMap) {
    console.log(key+" - "+value);
   }
