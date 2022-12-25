//ex.js
const print = console.log
function fullName(){
	print('My FullName');
}

function addNumbers (a,b){
	return a+b
}

let indexs = ['Underweight','Normal weight','Overweight','Obese']

function BMI(weight,height){
	let bmi = weight/(height**2)
	if(bmi<=18.5)return indexs[0]
	else if(bmi<=24.9) return indexs[1]
	else if(bmi<=29.9) return indexs[2]
	else return indexs[3]
}

print(BMI(63,1.7));

let findMax = (a,b,c)=>{
	return (a>b)?a:(b>c)?b:c
}
print(findMax(1,123,3))

let printArray = (arr)=>{
	for(const telm of arr){
		print(telm);
	}
}

printArray([1,2,3,3,4,5,6,67,7,87,78,7,76])

let ranIP = ()=>{
	let ipStr = new Array()
	ipStr[0]=Math.ceil(Math.random()*256);
	ipStr[1]=Math.ceil(Math.random()*256);
	ipStr[2]=Math.ceil(Math.random()*256);
	return ipStr.join('.')

}

print(ranIP())

let userIdGeneratedByUser = ()=>{
	let len = Number(prompt('Enter Number of Characters'));
	let idLen = Number(prompt('Enter Numbers of id'));
	let id=''
	for(i=0;i<idLen;i++){
		id=''
		for(j=0;j<len;j++){
			id+=String.fromCharCode(Math.ceil(Math.random()*95)+32)
	}
	print(id);
	}

}

//userIdGeneratedByUser()

let factorial = (n)=>{
	if (n==1)return 1
	return n*factorial(n-1)
}
print(factorial(6))

let uniq = (arr)=>{
	let new_arr = new Array()
	for(const elm of arr){
		if(new_arr.includes(elm))continue;
		new_arr.push(elm)

	}
	return new_arr.length==arr.length
}
print(uniq([1,2,3,4,1]))//=>false
print(uniq([1,2,3,4]))//=>true

//END 12/19/22 03:46








