function showMenu() {
    let div = document.getElementById('showMenu')
    let div2 = document.getElementById('open-menu')
    if (div.style.display = "block") {
        div2.style.display = 'flex'
    }
    else {
        div.style.display = "block"
    }
}

function closeNav() {
    let div = document.getElementById('showMenu')
    let div2 = document.getElementById('open-menu')
    if (div2.style.display = "flex") {
        div2.style.display = 'none'
    }
    else {
    }
}   

