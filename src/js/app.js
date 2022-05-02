// style
import '../scss/main.scss'
import '../../node_modules/normalize.css/normalize.css'
import '../../node_modules/photoswipe/dist/photoswipe.css';

// js
import './babel'
import './photoswipe'

const navToggle = document.querySelector(".navbar_toggle")
const links = document.querySelector(".main_nav")
const navbar = document.querySelector('.navbar')
const body = document.querySelector('body')


navToggle.addEventListener('click', () => {
    if(links.classList.toggle("show_nav")){
        window.onscroll =  function (){
            window.scrollTo(0, 0);
        }
    }else {
        window.onscroll = () => {
            window.scroll()
        }
    }
})


window.addEventListener('scroll', function(){
    if(window.scrollY > 30) {
        navbar.style.position = 'fixed'
    }else {
        navbar.style.position = ''
    }
})



















