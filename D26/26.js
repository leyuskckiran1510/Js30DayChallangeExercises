let temp = countries
let toggledA = [0, 0, 0]

let toggleSort = (y) => {
    if (y) {
        temp = temp.sort(() => -1)
        toggledA[2] = (toggledA[2] + 1) % 2
    } else {
        temp = temp.sort(() => -1)

    }
    if (toggledA[2]) {
        document.querySelector('#c').className = 'active'
        return
    }
    document.querySelector('#c').className = ''
}

let first = (y) => {
    let pseudo = []
    let field = document.querySelector('.field').value
    field = typeof field == 'string' ? field : ''
    temp.forEach((a) => {
        if (a.toLowerCase().startsWith(field.toLowerCase())) {
            pseudo.push(a)
        }
    })
    temp = pseudo
    y ? toggledA[0] = (toggledA[0] + 1) % 2 : 1
    toggledA[1] = 0
    if (toggledA[0]) {
        document.querySelector('#a').className = 'active'
        document.querySelector('#b').className = ''
        return
    }
    document.querySelector('#a').className = ''
}

let check = (y) => {
    let pseudo = []
    let field = document.querySelector('.field').value
    field = typeof field == 'string' ? field : ''
    temp.forEach((a) => {
        if (a.toLowerCase().includes(field.toLowerCase())) {
            pseudo.push(a)
        }
    })
    temp = pseudo
    y ? toggledA[1] = (toggledA[1] + 1) % 2 : 1
    toggledA[0] = 0
    if (toggledA[1]) {
        document.querySelector('#b').className = 'active'
        document.querySelector('#a').className = ''
        return
    }
    document.querySelector('#b').className = ''
}

let update = (c) => {
    let div = document.querySelector('.grid')
    div.innerHTML = ''
    temp.forEach((a) => {
        div.innerHTML += `<div class='data'>${a}</div>`
    })
    temp = countries
    console.log(toggledA)
    if (toggledA[0]) {
        first(0)
        if (toggledA[2]) toggleSort(0)
    } else if (toggledA[1]) {
        check(0)
        if (toggledA[2]) toggleSort(0)
    }
    console.log(toggledA)
}