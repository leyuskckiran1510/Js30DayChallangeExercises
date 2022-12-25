//STARt 12/24/22 05:50


//Promise

/*METHODS
Promise.prototype.then()
Promise.prototype.catch()
*/
//18.1

//Promise constructor
/*
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})
*/

//Example
/*const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise.then(result => {
    console.log(result)
  }).catch(error => console.log(error))
*/
/*
Basically what has happen in above code is not that complex let me explain you.
think doPromise as a normal function that takes two functions as argumenst

function doPromise(func1,func2)
{
	
}
then it does something that you define in your code and calls anyone function on the basis of your code 
For example 
function doPromise(greater,smaller)
{
	if(1>10)greater();
	else smaller();
	
}
doPromise(()=>{console.log("1 is greater then 10")},()=>{
	console.log("1 is smmaller then 10");
})
Now same code in Promise syntax
const doPromise = new Promise((greater,smaller) => {
	if(1>10) greater()
	else smaller();
}
doPromise.then(greater=>{console.log("1 is greater then 10")}).catch(()=>{
	console.log("1 is smmaller then 10");
})
*/
function doPromise2(greater,smaller)
{
	if(1>10)greater();
	else smaller();
	
}
doPromise2(()=>{console.log("1 is greater then 10")},()=>{
	console.log("1 is smmaller then 10");
})//1 is smaller then 10

const doPromise3 = new Promise((greater,smaller) => {
	if(1>10) greater()
	else smaller();
})
doPromise3.then(greater=>{console.log("1 is greater then 10")}).catch(()=>{
	console.log("1 is smmaller then 10");
}) //1 is smaller then 10

//18.2
//Fetch API
/*

The Fetch API provides an interface for fetching resources
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens
*/
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  }).then(a=>console.log("%c SucessFull","color:green"))
  .catch(error => error)

  //Async and Await
  //18.3

const square = async function (n) {
  return n ===2 
}
square("2").then(value=>console.log("here",value)
).catch(a=>console.warn(a))



const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()

