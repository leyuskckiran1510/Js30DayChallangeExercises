console.group('Exercises')
//console.table(countries_array);
//console.table(countries_object);

console.assert(10>2*10, '10>2*10 is false');
console.warn('Continue to practise');
console.error("Error while practising");

let test = new Array(100000).fill('x');
let store = new Array(100000).fill('x');
console.time('while');
{
	a=0
	while(a<test.length)
	{
		
		store[a]=test[a];
		a++;
	}

}

console.timeEnd('while');
console.time('for')
{
	for(a=0;a<test.length;a++)
	{
		store[a]=test[a];
	}

}
console.timeEnd('for');
console.time('for of')
{
	a=0
	for(let b of test)
	{
		store[a]=b;
		a++;
	}

}
console.timeEnd('for of');
console.time('forEach')
{
	a=0
	test.forEach((x)=>{store[a]=x;a++})

}
console.timeEnd('forEach');

console.groupEnd('Exercises');


//END 12/23/22 02:27 