function initMap() {
    // The location of Kalush
    const Kalush = { lat: 49.0445757, lng: 23.2412288 };
    // The map, centered at Kalush
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: Kalush,
    });
    // The marker, positioned at Kalush
    const marker = new google.maps.Marker({
        position: Kalush,
        map: map,
    });
    }

    window.initMap = initMap;