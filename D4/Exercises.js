age = prompt('Enter Your Age:')
alert(Number(age)>=18?'You are old enough to drive':
	`You need to wait still ${18-age} to be able`
	)
myage=200
if (Number(age)>200){
	console.log(`You are ${age-myage} years old then me`)
}
else{
	console.log(`You are ${myage-age} years young then me`)
}
  let a = 4
  let b = 3
console.log(a>b?
	`${a} is greater than ${b}`:
	`${b} is greater than ${a}`)

alert(Number(age)%2==0?'Even':'Odd')

// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

mark = Number(prompt("Enter Your Final Marks"))
if (mark>=80 && mark<=100) alert('A')
else if (mark>=70 && mark<=89) alert('B')
	if (mark>=60 && mark<=69) alert('C')
		if (mark>=50 && mark<=59) alert('D')
			if (mark>=0 && mark<=49) alert('F')

day = prompt('What is the Day Today?').toLowerCase()
if(day=='saturday') alert('Saturday is weekend.')
else{ alert(`${day} is work day`)}

//END 12/15/22 3:24