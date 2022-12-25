const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

let array = new Array()
array = [1,2,3,4,5,6]
console.log(array.length)
l = array.length
console.log(array[0],array[Math.ceil(l/2)],array[l-1])

let mixedDataTypes = [
  1,
  2,
  '123123',
  "Hellow",
  null,
  undefined,
  true,
  false,
  ]

console.log(mixedDataTypes)

let comapny = ['Facebook', 'Google', 'Microsoft',
 'Apple', 'IBM','Oracle', 'Amazon']
console.log(comapny.toString(),comapny.map((a)=>{a.match(/[o]/gi)!=null?
  a.match(/[o]/gi).length>1?console.log('Company with oo"s:-',a): null:null}))
console.log(comapny.sort(),comapny.reverse()
  ,comapny.slice(0,3),comapny.splice(3,3,12,12));

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
words = text.replaceAll(',','').replaceAll('.','').split(' ')
console.log(words)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()
l = ages.length
median = ages[Math.ceil(l/2)]
console.log(ages,median,ages[0],ages[l-1])

//END 12/.18/22 04:10