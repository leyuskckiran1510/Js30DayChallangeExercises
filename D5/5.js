//Start 12/18/22 03:27

//ARRAY

// 5.1
// crearting a empty arry
let arr = new Array(10).fill('0')
// or
	// arr = []
	//static array declartion for same value

	arr.fill('X')

arr=	arr.concat([1,1,1,])
	console.log(arr,Array.isArray('asdasd'),Array.isArray('asd asd asd asd asdasd '.split()))

	const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString())

const countries = require('./con.js');
const webTechs = require('./web.js');

console.log(countries)