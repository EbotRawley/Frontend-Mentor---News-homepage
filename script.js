var menu = document.getElementById('menu')
menu.addEventListener('click', toggleMenu)
var cont = document.getElementById('cont')
cont.addEventListener('click', toggleOverlay)

function toggleMenu() {
    var links = document.getElementById("nav-links")
    var menu = document.getElementById("menu")
    // Toggle nav links on smaller screens
    links.classList.toggle("responsive")
    // Toggle open and close menu
    menu.classList.toggle("close")
    // Toggle menu when overlay clicked
    cont.classList.toggle("overlay")
}

function toggleOverlay() {
    toggleMenu()
    cont.classList.remove("overlay")
}