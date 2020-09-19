var x:number = 100;
var y:number = 100;

//gives compilation error
//var total:number = "200";
var total:string = "sum";
console.log(total+x+y);

// using any
 var tot:any = "200";

 //Inferred typing -decide based on the value given
 var val=2;
 //val="200";// compilation fails as val is set to number
 console.log(val);
 
