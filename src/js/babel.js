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