//countries_data = [
/*

{
        "name": "Afghanistan",
        "capital": "Kabul",
        "languages": [
					"Pashto",
					"Uzbek",
					"Turkmen"
			],
        "population": 40218234,
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        "region": "Asia",
        "area": 652230
	}
	]
*/

document.querySelector(".subtitle").innerHTML = `
Currently, We have ${countries_data.length} countries`
let sortedLang = new Array()
let sortedPopu = new Array()
let totalPop = new Number()
let totalLang = new Number()
let update = () => {
    let lang = new Object()
    let popu = new Array()

    countries_data.forEach((a) => {

        typeof a['population'] == 'number' ?
            totalPop += a['population'] :
            totalPop

        popu.push({
            'c': a['name'],
            'p': typeof a['population'] == 'number' ?
                a['population'] : NaN
        })
        a['languages'].forEach((l) => {
            totalLang++
            lang.hasOwnProperty(l) ?
                lang[l] += 1 :
                lang[l] = 1
        })



    })
    sortedPopu = popu.sort((a, b) => b['p'] - a['p']).slice(0, 10)
    let arrayLang = []
    Object.keys(lang).forEach((a) => {
            arrayLang.push({
                'l': a,
                'c': lang[a]
            })
        }

    )
    sortedLang = arrayLang.sort((a, b) => b['c'] - a['c']).slice(0, 10)

}

let buttonPopu = () => {
    let div = document.querySelector('#stat')
    div.innerHTML = `<h3 style="grid-column: 1;">TotalLang </h3> <progress style="grid-column: 2;"value=${totalPop} max=${totalPop}> </progress><h3 style="grid-column: 3;"> ${totalPop}</h3>`
    sortedPopu.forEach((a) => {
        div.innerHTML += `<h3 style="grid-column: 1;">${a.c} </h3> <progress style="grid-column: 2;" value=${a.p} max=${totalPop}> </progress><h3 style="grid-column: 3;"> ${a.p}</h3>`

    })
}
let buttonLang = () => {
    let div = document.querySelector('#stat')
    div.innerHTML = `<h3 style="grid-column: 1;">TotalLang </h3><progress style="grid-column: 2;" value=${totalLang} max=${totalLang}> </progress>  <h3>${totalLang}</h3> `
    sortedLang.forEach((a) => {
        div.innerHTML += `<h3 style="grid-column: 1;">${a.l}</h3> <progress style="grid-column:2;" value=${a.c} max=${totalLang}> </progress>  <h3>${a.c}</h3> `
    })
}
document.querySelector('.population').addEventListener('click', buttonPopu)
document.querySelector('.languages').addEventListener('click', buttonLang)