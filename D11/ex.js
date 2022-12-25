const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
/*
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{*/

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
let[fin, est, sw, den, nor] = countries

let { width,height,area,perimeter} = rectangle

for(let {name,scores,skills,age} of users ){
  console.log(name,scores,skills.length<2?"Less Skills":skills,age)
}

  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, [reactScore,jsScore,...scores]] = student.map((a)=>{
    if (typeof a == 'object')
      return (typeof a[0]=='number')?a.reverse():a
    return a
  })
      console.log(name, skills, jsScore, reactScore)



const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

let convertArrayToObject = (obj)=>{
  let ans = new Array()
  let temp = new Object()
  for(let [name,skills,scores] of obj){
    temp.name = name;
    temp.skills = skills;
    temp.scores = scores;
    ans.push(temp)
  }
  return ans

}

console.log(convertArrayToObject(students))
/*[
{
  name: 'David',
  skills: ['HTM','CSS','JS','React'],
  scores: [98,85,90,95]
},
{
  name: 'John',
  skills: ['HTM','CSS','JS','React'],
  scores: [85, 80,85,80]
}
]*/

{
const student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }
var util = require('util');
let newStudent = {...student}
newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 })
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 })
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 })
newStudent.skills.dataScience.push('SQL')
//console.log(JSON.stringify(newStudent))
console.log( util.inspect(newStudent,{ depth: null }))//just to print proper output not necessary to do this
}

//END 12/22/22 03:03 noice