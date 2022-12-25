//Started at 12/21/22 02:06

//Higher Order Function
//9.1

// Callback
// A callback is a function which can be passed as parameter to other function.
//example
//
//I have habit of writing python so print make it easier for me
const print = console.log
const sqr = (n) => { // function that gets called by cube in this case
  return n ** 2
}

function cube(sqr, n) {//takes function def and a value
  return sqr(n) * n //returns a function call multiplied by value
}

//console.log(cube(sqr, 3)) // this calls cube function with parametr sqr function def and 3 value

//9.2
//Setting time
// setInterval it will call continiously with pause of  given interval
// setTimeout it will pause for given interval before it calls the function once

//example
let afterthisinterval = 100 //as 100 miliseconds
function tobecalledWEB() { // let's just change  a integer and make it count up
  // code goes here
	if (document !=undefined){
		let c= document.getElementById('id');
		j=c.innerHTML;
		j = Number(j)+1;
		c.innerHTML = j
	}
}

function tobecalledConsole(a){
	print(`HEllo from ${a}`);
}

// setInterval(()=>{return tobecalledConsole('Interval')}, afterthisinterval)
// setTimeout(()=>{return tobecalledConsole('TimeOut')}, afterthisinterval)

let numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => {return acc + cur}, 0) // it takes two arugments
														//first one if callback function and second is the acumulator value
														//and the returned value is store in accumulator itself like ADD B;
{														// and the function takes two argumet acumulator and the array element
const numbers = [9.81, 3.14, 100, 37];

//console.log(numbers.sort()); // [100, 3.14, 37, 9.81]

numbers.sort(function (a, b) {
  return a-b;
});

//console.log(numbers);
}

{
	const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
  //console.log(number);
});
}


