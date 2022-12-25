//1
let firstname = 'k'
let lastName = 'D'
let country = 'N'
let city= 'K'
let age = 1253
let isMarried = false
let year = new Date().getFullYear()

// console.log(firstname,lastName,country,city,age,isMarried,year);
// console.log(typeof '10'==typeof 10)

console.log(parseInt('9.8')==10); //=>fasle

//trythy vfalue
1==1
''==0
false==0
'1'==1

//falsy bvalue
1==='1'
false===0
''===0

4>3 //=>true
4>=3 //=>true
4<3 //=>fasle
4<=3 //=>fasle
4==4 //=>true
4===4 //=>true
4!=4 //=>fasle
4!==4 //=>fasle
4!='4' //=>fasle
4!=='4' //=>true
4=='4' //=>true
4==='4' //=>fasle

//
console.log('python'.length!='jargon'.length)//=>fasle

4 > 3 && 10 < 12 //>true
4 > 3 && 10 > 12//>fasle
4 > 3 || 10 < 12//>true
4 > 3 || 10 > 12//>true
!(4 > 3)//>fasle
!(4 < 3)//>true
!(false)//>true
!(4 > 3 && 10 < 12)//>fasle
!(4 > 3 && 10 > 12)//>true
!(4 === '4')//>true

//There is no 'on' in both dragon and python
//=>true
console.log('python'.search('on')!=-1
	&&'jargon'.search('on')!=-1)

const ad = new Date()
console.log(ad.getFullYear());

console.log(ad.getMonth());

console.log(ad.getDate());

console.log(ad.getDay());

console.log(ad.getHours());

console.log(ad.getMinutes());

console.log(Date.now());

//Write a script that prompt the user 
// to enter base and height of the triangle 
// and calculate an area of a triangle 
// (area = 0.5 x b x h).

// let base = Number(prompt('Enter Base'))
// let height = Number(prompt('Enter height'))
// alert(0.5*base*height)

// Write a script that prompt the user to enter
// side a, side b, and side c of the triangle and
//  and calculate the perimeter of triangle
//  (perimeter = a + b + c)

 // base = Number(prompt('Enter b'))
 // height = Number(prompt('Enter h'))
// let hypot = Number(prompt('Enter hypo'))
// alert(base+height+hypot)

// alert(prompt('Name').length>=7?'yourname is long':'your name is short')


 firstName = 'Asabeneh'
 lastName = 'Yetayeh'
console.log(firstName.length>lastName.length?
	`Your firstname,${firstName} is longer than your family\
	name,${lastName}`:`Your lastname,${lastName} is longer than your firt\
	name,${firstName}`)

myAge=250
yourAge=25
console.log(myAge>yourAge?
	`I am ${myAge-yourAge} older than you`:
	`You are ${yourAge-myAge} older than me`)

alp = new Date('1995')//new Date(prompt('Enter Your Age').match(/\d+/)[0])
k = new Date()
console.log(k.getFullYear()-alp.getFullYear()>18
	?'You are old enough to drive':
	'You are still a child')
year = 100
console.log(year*365*24*60*60)


 date = new Date();

 year = date.getFullYear();
 month = String(date.getMonth() + 1).padStart(2, '0');
 day = String(date.getDate()).padStart(2, '0');
 hour = String(date.getHours()).padStart(2, '0');
 minute = String(date.getMinutes()).padStart(2, '0');

 formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;

console.log(formattedDate); // "2022-12-18 07:05"

//END 12/18/22/03:03