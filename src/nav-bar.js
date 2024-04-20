const navbar = document.getElementById('nav-bar')
const navbarClass = navbar.classList

window.addEventListener('scroll', ()=>{
    if (window.scrollY >= 700){
        if(!navbarClass.contains('nav-bar-style')){
            navbarClass.add('nav-bar-style')
        }
    } else {
        if(navbarClass.contains('nav-bar-style')){
            navbarClass.remove('nav-bar-style')
        }
    }
})