<script>
import axios from 'axios';
import { store } from '../../data/store'
import SearchForm from '../SearchForm.vue';
import BaseCarousel from '../BaseCarousel.vue'
export default {
    name: 'HomePage',
    components: { BaseCarousel, SearchForm },
    data: () => ({
        flats: [],
        store
    }),
    methods: {
        async fetchFlats(address) {
            // Creo l'endpoint in base a se mi arriva un address o meno
            // const endpoint = !address ? store.baseUri : `${store.baseUri}?address=${address}`;
            // attivo il loader
            store.isLoading = true;
            try {
                const res = await axios.get(store.baseUri, {
                    params: {
                        address
                    }
                });
                // destrutturo i dati dalla risposta
                const { data } = res;
                const { flats, services } = data;
                // stampo i risultati in console
                // riassegno la risposta all'array degli appartamenti
                this.flats = flats;
                // riassegno la risposta all'array dei servizi
                store.services = services;
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
            }
            // Disattivo il loader
            store.isLoading = false;
        },
    },
    created() {
        this.fetchFlats(store.address);
    }
}

</script>

<template>
    <div class="container wrapper">
        <div class="d-flex flex-column align-items-center position-relative">
            <div class="d-flex flex-column align-items-center ricerca">
                <h1>Benvenuti in BoolBnb</h1>
                <p>Ricerca un appartamento nei pressi di Roma</p>
                <SearchForm />
            </div>
            <img class="immagine"
                src="https://staticgeopop.akamaized.net/wp-content/uploads/sites/32/2022/10/iStock-177303568.jpg?im=AspectCrop=(16,9);"
                alt="colosseo">
        </div>

        <!-- <BaseCarousel :flats="flats" /> -->
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: calc(100% - 80px);
    overflow: auto;
}

.ricerca {
    margin-top: 2rem;
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.3) -4px 9px 25px -6px;
}

.immagine {
    max-width: 1000px;
    position: absolute;
    z-index: -1;
    top: 180%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
}
</style>