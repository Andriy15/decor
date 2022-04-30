// style
import '../scss/main.scss'
import '../../node_modules/normalize.css/normalize.css'
import '../../node_modules/photoswipe/dist/photoswipe.css';

// js
import './babel'
import './photoswipe'

const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})


