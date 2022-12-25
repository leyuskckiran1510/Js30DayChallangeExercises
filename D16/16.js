//START 12/24/22 04:52


//JSON

//16.1
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

let count =0
const usersObj = JSON.parse(usersText, (key, value) => {
  value =
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  //console.log(value,count++)
  key=value+`${count}`
  return value
})
console.log(usersObj)


let d=JSON.stringify(usersObj,(a,b)=>(b),' ')
// json or text , the data
// reviver is an optional callback function

console.log(d)
let b = JSON.parse(d,(a,b)=>typeof b == "number" ? Math.random()*b:b)
console.log(b)

const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age: 250,
  isLoggedIn: false,
  points: 30
}

const txt = JSON.stringify(user,['age'],4)
console.log(txt)
