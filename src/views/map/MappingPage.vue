<template>
    <div class="div">
        <div id="map"></div>

        <div id="geocoder" class="geocoder"></div>


    </div>

    <!-- Promise polyfill script required to use Mapbox GL Geocoder in IE 11 -->



</template>

<script>
/* eslint-disable */

mapboxgl.accessToken = 'pk.eyJ1IjoibGxveWRsd2VlbmRvIiwiYSI6ImNrNzVjbGUzMjBlNDUzZXNicnhycnpraGwifQ.ZlURI2KWF1ihr57-LNmj8g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-79.4512, 43.6568],
    zoom: 13
});

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

export default {


}

</script>


<style>
body {
    margin: 0;
    padding: 0;
}

#map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

.geocoder {
    position: absolute;
    z-index: 1;
    width: 50%;
    left: 50%;
    margin-left: -25%;
    top: 20px;
}

.mapboxgl-ctrl-geocoder {
    min-width: 100%;
}
</style>