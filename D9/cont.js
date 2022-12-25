let most_spoken = {}

function mostSpokenLanguages(countries_data,val=10){
countries_data.forEach((a)=>{
	a.languages.filter((c)=>
		Object.keys(most_spoken).includes(c)).map((c)=>
		most_spoken[c]+=1);
	a.languages.filter((c)=>
		!Object.keys(most_spoken).includes(c)).map((c)=>
		most_spoken[c]=1);

})
let arr = new Array()
Object.keys(most_spoken).forEach((a)=>{
	let dic={}
	dic['c']=a
	dic['v']=most_spoken[a]
	arr.push(dic)
})
return (arr.sort((a, b) => {
  if (a.v < b.v) return 1
  if (a.v > b.v) return -1
  return 0
}).slice(0,val));
}
console.table(mostSpokenLanguages(countries_data,100))
