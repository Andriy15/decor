// style
import '../scss/main.scss'
import '../../node_modules/normalize.css/normalize.css'
import '../../node_modules/photoswipe/dist/photoswipe.css';

// js
import './babel'
import './photoswipe'

const navToggle = document.querySelector(".navbar_toggle")
const links = document.querySelector(".main_nav")
const body = document.querySelector('body')
const toggle = document.querySelector('show_nav')


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



















