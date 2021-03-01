/*
*  Author: Joanna Rubio
* created: Febuary 28, 2021
* License: Public Domain
*/

/******************************************************************************/
/******************************************************************************/


function mult(x){
    return (x * 2);
}

//test function
console.log("6 double is ", mult(6));
console.log("6 double is ", mult(17));

array = [14, 8, 43, 6, 54, 90, 2, 17, 23]
console.log("my array ", array);

var result = array.map(mult);

// should return [x *2]

console.log("Double the array variables ", result);

var results = array.map(function(x){
  return x += 2;
})

// should return [16, 10, 45, 8, 56, 92, 4, 19, 25]

console.log("Array plus 2 is ", result);

document.write("Original array: ", array, "<br>");
document.writeln("Doubled array: ", result, "<br>");
document.writeln("Array plus 2: ", results);