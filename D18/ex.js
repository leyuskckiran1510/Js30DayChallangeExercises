const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'


let countryByArea=new Array()
let languageArray = new Array()
let russia = []
fetch(countriesAPI).then(res=>res.json())
.then(a=>{
	for(let {name,capital,languages,population,area} of a){
		//console.log(name,capital,languages,population,area);
		//if(name.toLowerCase().includes("russia"))russia.push({'c':`${name.split(" ")[0]}`,'a':area});
		countryByArea.push({'c':name,'a':area})
		languages.forEach(a=>languageArray.push(a['name']))
	}
	/*console.log(countryByArea.sort((a,b)=>{
		if(a['c'].toLowerCase().includes("russia"))console.log(a['c'],b['c']);
		return b['a']-a['a']}).slice(0,10),russia)*/
	 console.log(countryByArea.sort((a,b) => b['a'] - a['a']).slice(0,10));
})
.catch(a=>console.warn(a)) 
/*
Don't Know What is happening here it never seems to print russia in the top .
//12/24/22 07:20
Found the BUG
the countyByArea.push() had a small falut it should be like this
countryByArea.push({'c':name,'a':area!==undefined?area:0})
The Bug was caused by the area of a counrty being undefined which made russia to stay at
 it's position insed of comming up
*/

/*fetch(catsAPI	).then(res=>res.json()).then(a=>{
for(let {name,weight} of a){
		console.log(name,weight['metric'].match(/\d+/g).reduce((a,c)=>a+Number(c),0)/2)
	}
})
.catch(a=>console.warn(a))
*/
//END 12/24/22 07:06