var x = 100;
var y = 100;
//gives compilation error
//var total:number = "200";
var total = "sum";
console.log(total + x + y);
// using any
var tot = "200";
//Inferred typing -decide based on the value given
var val = 2;
//val="200";// compilation fails as val is set to number
console.log(val);
