"use strict";
var file1_1 = require("./file1");
//import * as trial from "./file1";
//import {Product as NewProduct} from './file1'
//console.log(trial.greeting);
console.log(file1_1.greeting);
file1_1.greet();
var prod = new file1_1.Product('Laptop', 2000);
prod.getinfo();
var greeting = 'jojo';
console.log(file1_1.greeting);
