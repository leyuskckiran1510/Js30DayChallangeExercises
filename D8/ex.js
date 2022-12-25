const print = (...args)=>{console.log(args.join(' '))}
let dog = new Object()
print(dog)
dog.name = 'Dog'
dog.legs = 4;
dog.color = 'Black'
dog.age = 4
dog.bark = function(){
	return 'woof woof'
}
Object.keys(dog).map((x)=>{print(`Dog.${x} == ${dog[x]}`);})
dog.bread = 'German'
dog.getDogInfo = function(){
	return `Name:${this.name}`

}

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
let max =0
let name=''
let pname=[]
let pmern=[]
Object.keys(users).map((x)=>{
	let user = users[x]
	if(user['skills'].length >max){
		max=user['skills'].length
		name = x
	}
	if(user['points']>=50){
		pname.push(x)
	}
	if(user['skills'].includes('MongoDB', 'Express', 'React', 'Node')){
		pmern.push(x)
	}
	


})
print(Object.entries(users[name]),'\n',name,'\n',pname
	,'\nMern Devs:-',pmern)


let personAccount={
	firstname:'',
	lastName:'',
	incomes:{},
	expenses:{},
	totalIncomes : function(){
		let sum=0;
		Object.keys(this.incomes).map((x)=>{sum+=Number(x)})
		return sum
	},
	totalExpense:function(){
		let sum=0;
		Object.keys(this.expenses).map((x)=>{sum+=Number(x)})
		return sum
	},
	accountinfo:function(){
		return firstname+' '+lastName+' '+expenses
	},
	addIncome : function (amount,des) {
		this.incomes[des]=amount;
	},
	addExpense:function (amount,des) {
		this.expenses[des]=amount
	}, 
	accountBalance : function(){
		return totalIncomes - totalExpense	
	},
}
personAccount.firstname ='k'
personAccount.lastName = 'd'
personAccount.addIncome('labour',100)
personAccount.addIncome('labasdur',123123)
personAccount.addIncome('labodwadaur',12313)
personAccount.addIncome('labwadwaoaur',12313)

print(Object.entries(personAccount.incomes),personAccount.totalIncomes())


const data = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

/*
{
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
*/

let signUp =(dic={})=>{
	let exsists=false;
	data.map((x)=>{
		if(!dic.hasOwnProperty('_id')){
			exsists=true
			
		}
		if(x['_id']==dic['_id']){
			exsists=true
		};
	});
	if(!exsists){
		data.push(dic)
	}

}
print(signUp({
        _id: 'ab12exasd',
        username: 'tester',
        email: 'asd@aasdwadsx.com',
        password: 'dwadwad23sad!#3',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    }))
print(signUp({
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    }))
print(signUp({
        _id: 'a1232d',
        username: 't13212ter',
        email: 'as123d@a12331dwadsx.com',
        password: 'd~!!d#$#ad!#3',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    }))
console.log(data)

//ended 12/20/22 2:23








