import './scss/main.scss'
import 'normalize.css'
import './babel'



const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})


