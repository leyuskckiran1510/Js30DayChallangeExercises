let closure = ()=>()=>"inside";
console.log(closure()())

let threeInnerClosure=()=>{
	let in1 = ()=>"I am 1";
	let in2 = ()=>"I am 2";
	let in3 = ()=>"I am 3";
	return {
		1:in1,
		2:in2,
		3:in3
	}
}
console.log(threeInnerClosure()[1]())

let personAccount = (fnm,lnm)=>{
	let firstname=fnm, lastname=lnm, incomes=[], expenses=[];
	let totalIncome = ()=>{
		return incomes.reduce((a,c)=>a+Number(c['i']),0)
	}
	let totalExpense = ()=>{
		return expenses.reduce((a,c)=>a+Number(c['i']),0)
	}
	let accountInfo = ()=>{
		return `\nAccount Holder Name:- ${firstname} ${lastname}\n\
		Income History:- `+incomes+`\n\
		Expenses History:- ${expenses}\n\
		Current Balance:- ${accountBalance()}`
	}
	let addIncome = (inc,des)=>{
		incomes.push({'i':inc,'d':des})
	}
	let addExpense = (inc,des)=>{
		expenses.push({'i':inc,'d':des})
	}

	let accountBalance = ()=>{
		return totalIncome() - totalExpense()
	}
	return {
		addIncome:addIncome,
		addExpense:addExpense,
		accountBalance:accountBalance,
		accountInfo:accountInfo,
		totalExpense:totalExpense,
		totalIncome:totalIncome,
		incomes:incomes,
		expenses:expenses
	}

}


let person1 = personAccount("K","D")
person1.addIncome(1000,"work")
person1.addIncome(1000,"work")
person1.addIncome(1000,"work")
person1.addIncome(1000,"work")
person1.addIncome(1000,"work")
person1.addExpense(10.12,"work")
person1.addExpense(100.80,"work")
person1.addExpense(80,"work")
person1.addExpense(289.15,"work")
person1.addExpense(1000,"work")

console.log(person1.accountBalance(),person1.accountInfo()
	,person1.incomes)


//END 12/25/22 02:46