document.getElementsByTagName('html')[0].style.padding = '5% 5%'
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let hexColor = () => {
    let strs = "0123456789abcdef"
    b = Math.random
    c = Math.ceil
    return `#${strs[c(b()*15)]}${strs[c(b()*15)]}${strs[c(b()*15)]}${strs[c(b()*15)]}${strs[c(b()*15)]}${strs[c(b()*15)]}`
}
let h1 = document.getElementsByTagName('h1')[0]
let h2 = document.getElementsByTagName('h2')[0]
let challanges = document.querySelectorAll('li')
let tempH1 = h1.innerHTML.toString().split(' ')
h1.innerHTML = `${tempH1.slice(0,tempH1.length-2).join(" ")} <span id='year'>${tempH1[tempH1.length-1]}<span>`
h2.style.textDecoration = " underline";
setInterval(() => {
    document.querySelector('#year').style.color = hexColor()
    let dt = document.querySelector('#date')
    let date = new Date()
    dt.innerHTML = `${months[date.getMonth()]} ${date.getDate()},${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    dt.style.background = hexColor()
    dt.style.color = "black"
    dt.style.padding = "5px 5px 5px 5px"
    dt.style.margin = "5px 20% 5px  20%"
}, 1000)
console.log();
(challanges)
challanges.forEach((x) => {
    if (x.innerHTML.includes('Done')) x.style.background = 'green'
    if (x.innerHTML.includes('Ongoing')) x.style.background = 'yellow'
    if (x.innerHTML.includes('Coming')) x.style.background = 'red'
    x.style.padding = "5px 5px 5px 5px"
    x.style.margin = "5px 5px 5px 5px"
})
h1.style.padding = "5px 5px 5px 5px"
h1.style.margin = "5px 5px 5px 5px"
h2.style.padding = "5px 5px 5px 5px"
h2.style.margin = "5px 5px 5px 5px"