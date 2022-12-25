{
	class Animal{
constructor(name='',age=0,color='',legs=''){
	this.name = name
	this.age = age
	this.color = color
	this.legs = legs

}
get getData(){
	console.log(`${this.name} is a good animal of age ${this.age} with body color ${this.color} and has ${this.legs} legs`)

}

}
class Dog extends Animal{
get getData(){
	console.log(`${this.name} is a good Dog of age ${this.age} with body color ${this.color} and has ${this.legs} legs`)

}
}
class Cat extends Animal{
get getData(){
	console.log(`${this.name} is a good Cat of age ${this.age} with body color ${this.color} and has ${this.legs} legs`)

}
}
let dog = new Dog('Dog',12,'Black',5)
dog.getData
let cat = new Cat('cat',1,'Black',2)
cat.getData}//Animal classes

{
	class Statistics{
	constructor(array=[]){
		this.array=array
	}
	count(){
		return this.array.length
	}
	sum(){
		return this.array.reduce((a,c)=>a+c,0)
	}
	min(index=0){
		return this.array.sort((a,b)=>a-b)[index]
	}
	max(){
		return this.array.sort((a,b)=>a-b)[this.array.length-1]
	}
	range(){
		return this.max()-this.min()
	}
	mean(){
		return Math.ceil(this.sum()/this.array.length)
	}
	median(){
		let temp =Math.floor(this.sum()/this.array.length)
		return (this.array.filter((a)=>a==temp)).length>0?temp:mean()
		
	}
	mode(){
		let set = new Set(this.array)
		let dic ={}
		let temp =  [...set]
		temp.forEach((a)=>dic[a]=0)
		this.array.forEach((a)=>dic[a]++)
		return Object.entries(dic).sort((a,b)=>b[1]-a[1])[0]
	}
}

let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
let statistics = new Statistics(ages)
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
}//Statics

class PersonAccount{
	constructor (firstname, lastname){
		this.firstname =firstname
		this.lastname=lastname
		this.incomes = []
		this.expenses = []
	}

	totalIncomes(){
		let sum=0;
		Object.values(this.incomes).map((x)=>{sum+=Number(x)})
		return sum
	}
	totalExpens(){
		let sum=0;
		Object.values(this.expenses).map((x)=>{sum+=Number(x)})
		return sum
	}
	accountinf(){
		return this.firstname+' '+this.lastName+' '+this.expenses
	}
	addIncome(amount,des) {
		this.incomes[des]=amount;
	}
	addExpense(amount,des) {
		this.expenses[des]=amount
	} 
	accountBalance(){
		return this.totalIncomes() - this.totalExpens()	
	}
}

let peron = new PersonAccount('k','D')
peron.addIncome(100,"asds")
peron.addIncome(100,"asdasds")
peron.addIncome(100,"asdasdwws")
peron.addExpense(1.00,"asdasds")
peron.addExpense(10.120,"asdasdwws")
console.log(peron.totalIncomes())
console.log(peron.accountBalance())

//END 12/23/22 03:26 
