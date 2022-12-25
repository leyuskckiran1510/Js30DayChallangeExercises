//STARTED 12/19/22 02:58 today nobraek in middle i am enjoying it

//FUNCTIONS
//7.1

// A function can be declared or created in couple of ways:

// Declaration function
// Expression function
// Anonymous function
// Arrow function
// Function Declaration
// Let us see how to declare a function and how to call a function.

// //declaring a function without a parameter
// function functionName() {
//   // code goes here
// }
// functionName() 

//Example of unlimeted argumesnts it creats a dictonary named as argumenst
let print = console.log
function functionName(){
  //code goes here
	print(arguments)
}
let parm1=10,parm2=21,parm3='asdasd';
functionName(parm1,parm2,parm3)

//where as this makes list named as args
function st(...args){
	print(args)
}

st(12,31,3,1,31,23,13,1,23)




const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
print(anonymousFun());

//self ionvoking

(function (x){print(x**2)})(20)
//arrow funcions
//1
let d=n=>n**n
print(d(2))

//2
let f = (m)=>{m*123}//{return m*123}