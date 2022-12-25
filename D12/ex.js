console.log('‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’'.match(/\d+/g).reduce((a,c)=>a+Number(c),0))
counter=0
console.log(Math.abs('The position of some particles on the horizontal x-axis -1,2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. '.match(/-?\d+/g).map(x=>{counter++;return Number(x)}).sort((a,b)=>a-b)[0])+Math.abs('The position of some particles on the horizontal x-axis -1,2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. '.match(/-?\d+/g).map(x=>Number(x)).sort((a,b)=>a-b)[counter-1]))

let is_valid_variable = (str)=>str.search(/^[a-z][a-zA-Z0-9_]+/gi)!=-1
console.log(is_valid_variable('first_name') ,
is_valid_variable('first-name') ,
is_valid_variable('1first_name') ,
is_valid_variable('firstname') ,)

let tenMostFrequentWords = (str,l)=>{
	let ans = new Array();
	let dic={}
	for(let word of str.match(/[a-z]+/gi)){
		if(Object.keys(dic).includes(word)) dic[word]+=1
		else dic[word]=1
	}
	Object.entries(dic).sort((a,b)=>b[1]-a[1]).slice(0,l).forEach((a)=>{
		ans.push({word:a[0],count:a[1]})
	})
	return ans
}

console.log(tenMostFrequentWords(`I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`,10))




console.log(tenMostFrequentWords('%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?'.replace(/[%@$#&;!?]/g,''),10))


//END 12/22/22 04:00 Had lot of fun

