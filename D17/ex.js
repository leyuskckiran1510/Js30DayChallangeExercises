const myInfo = {
	"firstName":"k",
	"lastName":"D",
	"age":20,
	"country":"N",
	"city":"D",
}

Object.keys(myInfo).map((a)=>{
	window.localStorage.setItem(a,myInfo[a])
})

for(let i =0;i<10;i++)console.log(`%c${window.localStorage.key(i)} \n %c [+] ${window.localStorage.getItem(window.localStorage.key(i))}`,"color:#ff6600","color:#66ff00");

	//END 12/24/22 05:48