//STARTED 12/23/22 02:01 

//Console Object Methods

//13.1
/*
console.log()
console.warn()
console.error()
console.table()
console.time()
console.info()
console.assert()
console.group()
console.count()
console.clear()
*/

console.log('%c For Loggin purpose. It logs the provided data in Browser Console/System Console as output\
	and yes it support %s',"color:green ","String Formating") //can use %c for color onlyin browser
console.warn('This is a warning')//yellow color `!` sign
console.error('This is an error message')//red color `x` sign
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)//table
console.time('forEach loop')//takes time Id and starts timer
for(let i=0;i<10000000;i++);
console.timeEnd('forEach loop')//takes timeid and stops timer
console.info('30 Days Of JavaScript challenge is trending on Github')//blue color

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, "asds")//takes first argument as bollean expression and second a message or
  										//output can be any print able object 
}
console.group('Names') //just makes a group not much
console.log(names)
console.log(names)
console.groupEnd()

console.count('');//takes an ID and counts the number of call made to that id console and return integer
console.clear();//to clear console