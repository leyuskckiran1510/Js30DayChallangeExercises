let a = document.querySelectorAll('p')
	let b = document.getElementsByTagName('p')[0]
	//console.log(a,b,a.forEach((x)=>console.log(x.innerHTML)))
	let count=0
	a.forEach((x)=>{
		count++
		x.setAttribute('class','oeoe')
		x.id="NoNO"
		count%2==0
		?x.style.background="red"
		:x.style.background="green"
		x.style.fontSize="24px"
		x.style.fontFamily="Times Roman"
		x.style.borderRadius="24px"
		x.style.borderWidth="10px"
		x.style.borderStyle="dotted"
		if(count==4)x.innerHTML="Fourth"
	})