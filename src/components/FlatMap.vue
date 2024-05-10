<script>
import tt from '@tomtom-international/web-sdk-maps';
import { store } from '../data/store.js';

export default {
    name: 'FlatMap',
    data: () => ({
        store,
    }),
    props: {
        lon: String,
        lat: String,
    },
    mounted() {
        console.log(this.lon);
        console.log(this.lat);
        let map = tt.map({
            key: this.store.apiKey,
            container: "map",
            center: [this.lon, this.lat],
            zoom: 14,
            radius: 20000
        });

        const marker = new tt.Marker().setLngLat([this.lon, this.lat]).addTo(map);
        map.addControl(new tt.NavigationControl());
    }
}
</script>

<template>
    <div id='map' class='map-container'></div>
</template>

<style lang="scss" scoped>
.map-container {
    height: 450px;
    width: auto;
    max-width: 800px;
}
</style>
