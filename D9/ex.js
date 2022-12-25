//
const print = console.log
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']




const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/*
forEach -> it iterates through the given iterable object and takes a callback function to take action over the values. and doesn't returns array in response. Like a for loop

map -> it does the same but returns a array of the value returned by the call back function

filter -> it does what it sounds like;It filters out the specific elements on th basis of callback function. If callback returns true (or any equivakent value) it puts that elemnts in new array or else ignore it

reduce -> it does same as forEach but it has acumulator which store the last returned value by callback function and retakes it as a 1st parameter and the elemnt as 2nd parameter. Good for doing recursive tasks which requires privous values like factorial, sum ..*/

let nums = [1,2,3,4,5,6,7]
console.log(nums.reduce((acc,elm)=>{
  return acc*elm
},1)) //fractorial of 7

let calbck = (...x)=>{
  console.log(x)
}

countries.forEach((x)=>console.log(x))
let newcont = new Array()
newcont = countries.map((a)=>a.toUpperCase())
print(newcont)

newcont = countries.filter((a)=>a.toLowerCase().includes('land'))
print(newcont)
countries.push('EngLand')
newcont = countries.filter((a)=>a.startsWith('E'))
print(newcont)

let getStringLists = (x)=>{
  return x.filter((b)=>(typeof b == 'string'))
}

ncountries = countries.concat(nums)
print(ncountries,getStringLists(ncountries))


print(nums.reduce((a,c)=>a+c,0))
countries.sort()
print(countries.reduce((a,c)=>{

  if (countries.indexOf(c)==countries.length-2)
    return a+c+' and '
  if (countries.indexOf(c)==countries.length-1)
    return a+c+' are north European cont'

  return a+c+', '
},''))

print(names.some((a)=>a.length>=7))

print(countries.every((a)=>a.toLowerCase().includes('land')))

/*
find -> returns the first condition matched value
findIndex -> return index of find 
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
*/

print('the total Price is ',products.map((a)=>a.price).filter((a)=>typeof a== 'number').reduce((a,c)=>a+c,0))

print('the total Price is ',products.reduce((a,c)=>
{
  if (typeof c.price == 'number')
    return c.price+a
  return a+0
}
  ,0))

//The final excersie is at cont.js as it took value from different file I had to merge both file in index.html
// as i haven't learnt importing till now
//running index.html works for cont.js
//END 12/21/22 04:03 really fun and amazing 
//leanrt a lot roday higerOrder Function are amzing and makes thing alot easier 


