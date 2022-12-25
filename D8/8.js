//Started 12/20/22 02:01

//SCOPE
const print = (...args)=>{console.log(args.join(' '));}
//8.1
/*TWO types of Scope
1. Local 
2. Global
var is function scoped and let and const are block scoped
meaning var will be accessiable through out the function once defined 
But let will onlt be accessiable insede the block.
Example:-
function t(){
	var a=10;
	if(1){
		let b=10
		var c=21
	console.log(a,b,c)//no errors
	}
	console.log(a,c)//a,c is still accessiable
	console.log(b)//but B is not 
}
ACTUAL WILL BE LIKE THIS
10 10 21
10 21
/##/##/##/##/D8/8.js:21
        console.log(b)//but B is not
                    ^

ReferenceError: b is not defined
    at t (/##/##/##/##/D8/8.js:21:14)

*/

//Object /Dictonary/Map kinda acts like a struct of C++
//8.2

const dict = {
	key1:10,
	key2:21
}
print(dict['key1'])//Don't have to explictly define keys as
					// string but to access need to be string

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {//can't use arrow function here as `this` method 
    return `${this.firstName} ${this.lastName}`//in arrow means the function it self not the object's
  },
  'phone number': '+3584545454545'
}

print(person.getFullName())

const copyPerson = Object.assign({}, person) //can't just do cp = person as it will reference the person
console.log(copyPerson) //meaning making changes to cp will cause changes to person itself.


//for keys
print(Object.keys(person))
//for checking the keys value 
//person.hasOwnProperty

