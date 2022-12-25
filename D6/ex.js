//
let print = console.log;
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let i=0;
for ( i=0;i<11;i++)
{
	console.log(i)
}
i=0
while(i<11){
	console.log(i)
	i++
}
do
{
	console.log(i)
	i++
}while(i<11)
let j;
for(i=0;i<7;i++){
	console.log("#".repeat(i))
}

for (i=0;i<11;i++){
	console.log(`${i} x ${i} = ${i*i}`)
}
let sumeven=0,sumodd=0;
for(i=0;i<=100;i++){
	if(i%2==0){console.log(`${i} is even`);sumeven+=i}
	else {console.log(`${i} is odd`);sumodd+=i}
}
console.log(sumodd,sumeven)
let togl=0
for(i=0;i<=100;i++){
	for(j=2;j<Math.sqrt(i);j++){
		if(i%j==0){
			togl=1;
			console.log(`${i} is not prime`);
			break;
		}
	}
	if (!togl) console.log(`${i} is prime`);
	togl=0;

}
print('wait');
let arr = new Array(5).fill()
let temp=0
for(i=0;i<5;i++){
	temp = Math.ceil(Math.random()*100);
	if(arr.includes(temp)){i--;continue}
	arr[i]=temp;
}
console.log(arr)

let alpha = 'qwertyuiopasdfghjklzxcvbnm'
let string = alpha.toUpperCase()+alpha+'1234567890';
let ran=Math.random()*20
let ans=''
for(i=0;i<ran;i++){
	ans+=string[Math.ceil(Math.random()*(string.length-1))]

}
print(ans,`\nrgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`)

let con = new Array()
for(const ct of countries){
	con.push([ct,ct.toUpperCase().slice(0,3),ct.length])
}

print(con)

const fruits = ['banana', 'orange', 'mango', 'lemon']
let Rfruit= new Array();

for(i=fruits.length;i>0;i--)
	Rfruit[fruits.length-i]=fruits[i-1]

print(Rfruit)

let sortedCountries = new Array()
for(const yt of countries){
	sortedCountries.push(yt)
}
print(sortedCountries.sort(),countries)



//END 12/19/22 02:54