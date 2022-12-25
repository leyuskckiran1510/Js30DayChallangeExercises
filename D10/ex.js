const a = [3,4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
const set = new Set()
for(i=0;i<11;i++){
	set.add(i)
}
console.log(set.delete(2),set)
set.clear()
console.log(set)
const setString = new Set([...countries,...countries.map((a)=>a.toUpperCase())])
console.log(setString)

const map = new Map([...countries.map((a)=>[a,a.length])
	])
console.log(map)

const union =new  Set([...a,...b])
const intersection = new Set([...b.filter((x)=>(a.indexOf(x)!=-1))])

console.log(intersection,union)


//END 12/22/22 02:24 
//Not Bad