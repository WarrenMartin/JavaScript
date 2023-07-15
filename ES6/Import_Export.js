// exporting the variable
export const name=’Warren’ ;


// exporting the function

export function sum(x,y){

     return x+y;

}






/***************  To import we do *******************/

import {name,sum} from ‘./module.js’;


console.log(name);  // shrilata

let add=sum(4,9);

console.log(add); //13
