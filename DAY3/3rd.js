//Start 12/18/22/02:00
//3.1 Booleans
/*Truthy values
All numbers(positive and negative) are truthy except zero
All strings are truthy except an empty string ('')
The boolean true


Falsy values
0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string

*/


// let check = 4 > 3 && 10 > 5         // true && true -> true
// check = 4 > 3 && 10 < 5         // true && false -> false
// check = 4 < 3 && 10 < 5         // false && false -> false

// // || pipe or operator, example

// check = 4 > 3 || 10 > 5         // true  || true -> true
// check = 4 > 3 || 10 < 5         // true  || false -> true
// check = 4 < 3 || 10 < 5         // false || false -> false

// //! Negation examples

//  check = 4 > 3                     // true
//  check = !(4 > 3)                  //  false
// let isLightOn = true
// let isLightOff = !isLightOn           // false
// let isMarried = !false                // true



// let isRaining = true
// isRaining?console.log('You need a rain coat.'):console.log('No need for a rain coat.')
// isRaining = false

// isRaining?console.log('You need a rain coat.'):console.log('No need for a rain coat.')

//Window Methods 
/*
message ="Hello"
alert(message)
let number = prompt('Enter number', 'tempoararyvaluee')
console.log(number)
const agree = confirm('Are you sure you like to delete? ')
console.log(agree)
*/
//DATETime Object

let a = new Date()
console.log(Date.now())



