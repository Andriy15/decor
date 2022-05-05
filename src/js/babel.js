const navToggle = document.querySelector(".navbar_toggle")
const links = document.querySelector(".main_nav")
const navbar = document.querySelector('.navbar')


function initMap() {
    // The location of Kalush
    const Kalush = { lat: 48.932396, lng: 24.7124942 };
    // The map, centered at Kalush
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: Kalush,
    });
    // The marker, positioned at Kalush
    const marker = new google.maps.Marker({
        position: Kalush,
        map: map,
    });
    }
    
window.initMap = initMap;


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


$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});




