document.getElementsByTagName('html')[0].style.padding = '5% 5%'
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let hexColor = () => {
    let strs = "0123456789abcdef"
    b = Math.random
    c = Math.ceil
    return `#${strs[c(b()*15)]}${strs[c(b()*15)]}${strs[c(b()*15)]}${strs[c(b()*15)]}${strs[c(b()*15)]}${strs[c(b()*15)]}`
}
let div = document.querySelector('.wrapper')
let challanges = leyuskcChallenges2020.challenges


//Upper Part like date and title Handler
{
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    let u = document.createElement('ul')
    p.id = 'date'


    h2.innerHTML = leyuskcChallenges2020.challengeSubtitle
    h1.innerHTML = leyuskcChallenges2020.challengeTitle + ' in ' + leyuskcChallenges2020.challengeYear
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

    h1.style.padding = "5px 5px 5px 5px"
    h1.style.margin = "5px 5px 5px 5px"
    h2.style.padding = "5px 5px 5px 5px"
    h2.style.margin = "5px 5px 5px 5px"
    div.appendChild(h1)
    div.appendChild(h2)
    div.appendChild(p)
}
let topics = (arr) => {
    let html = ''
    arr.forEach((a) => {
        html += "<li>" + a + "</li>"
    })
    return html
}

//Challanges Handeler
{
    challanges.forEach((clang) => {
        let x = document.createElement('li')
        let projName = clang.name
        x.innerHTML = `<a href=${clang.githubUrl}>${clang.name}</a>
    <details>
  <summary>${projName.split(' ')[3]}</summary>
  ${topics(clang.topics)}
</details>

 ${clang.status}`
        if (x.innerHTML.includes('Done')) x.style.background = 'green'
        if (x.innerHTML.includes('Ongoing')) x.style.background = 'yellow'
        if (x.innerHTML.includes('Coming')) x.style.background = 'red'
        x.style.padding = "5px 5px 5px 5px"
        x.style.margin = "5px 5px 5px 5px"
        div.appendChild(x)
    })
}
//Aurthor Part
let authorDiv = document.createElement('div')
let socialDiv = document.createElement('div')
let nameTitle = document.createElement('h1')
nameTitle.innerHTML = `${leyuskcChallenges2020.author.firstName} ${leyuskcChallenges2020.author.lastName}`
socialDiv.style.display = 'grid'
socialDiv.style.gridTemplateColumns = 'auto auto auto'
let socialIcons = ''
leyuskcChallenges2020.author.socialLinks.forEach((a) => {
    socialIcons += `<a href='${a.url}'>${a.fontawesomeIcon}</a>`
})
socialDiv.innerHTML = socialIcons
authorDiv.appendChild(nameTitle)
authorDiv.appendChild(socialDiv)
authorDiv.innerHTML += `<p>${leyuskcChallenges2020.author.bio}</p>`

/*
skill and titles skipped becaused I don't know grid manupulation till now and without it;
their is not much same as above code repetation nothing different to Do also today's 2hrs is completed.
*/
document.body.appendChild(authorDiv)