<script>
import { services } from '@tomtom-international/web-sdk-services';
import { store } from '../../data/store.js';
import AppSidebar from '../AppSidebar.vue'
import BaseGallery from '../BaseGallery.vue';
import BaseCard from '../BaseCard.vue';
import SearchForm from '../SearchForm.vue';
import axios from 'axios';
export default {
    name: 'FilterPage',
    components: { BaseGallery, SearchForm, AppSidebar, BaseCard },
    data: () => ({
        flats: [],
        flatServices: [],
        address: '',
        room: '',
        bathroom: '',
        services: [],
        distance: '20',
        store,
    }),
    methods: {
        async fetchFlats(address) {
            const stringServices = JSON.stringify(this.services);
            // Creo l'endpoint in base a se mi arriva un address o meno
            // const endpoint = !address ? store.baseUri : `${store.baseUri}?address=${address}&room=${this.room}&bed=${this.bed}&services=${stringServices}`;
            // attivo il loader                             ?room=1&bed=1&services=1,2,4,8&distance=1&address=via prova
            store.isLoading = true;
            try {
                const res = await axios.get(store.baseUri, {
                    params: {
                        address,
                    }
                });
                // destrutturo i dati dalla risposta
                const { data } = res;
                const { flats, services } = data;
                // stampo i risultati in console
                // riassegno la risposta all'array degli appartamenti
                this.flats = flats;
                // riassegno la risposta all'array dei servizi
                this.flatServices = services;
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
            }
            // Disattivo il loader
            store.isLoading = false;
        },
        async fetchFlatsFilters() {
            const stringServices = JSON.stringify(this.services);
            // Creo l'endpoint in base a se mi arriva un address o meno
            // const endpoint = !address ? store.baseUri : `${store.baseUri}?address=${address}&room=${this.room}&bed=${this.bed}&services=${stringServices}`;
            // attivo il loader                             ?room=1&bed=1&services=1,2,4,8&distance=1&address=via prova
            store.isLoading = true;
            try {
                const res = await axios.get(store.baseUri, {
                    params: {
                        address: store.address,
                        room: this.room,
                        bathroom: this.bathroom,
                        services: stringServices,
                        distance: this.distance
                    }
                });
                // destrutturo i dati dalla risposta
                const { data } = res;
                const { flats, services } = data;
                // stampo i risultati in console
                // riassegno la risposta all'array degli appartamenti
                this.flats = flats;
                // riassegno la risposta all'array dei servizi
                this.flatServices = services;
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
            }
            // Disattivo il loader
            store.isLoading = false;
        },
        emptyFilters() {
            this.address = '';
            this.room = '';
            this.bathroom = '';
            this.services = [];
            this.distance = '';
        }
    },
    computed: {
        sponsoredFlats() {
            return this.flats.filter(flat => flat.sponsored);
        },
        nonSponsoredFlats() {
            return this.flats.filter(flat => !flat.sponsored);
        }
    },
    created() {
        this.fetchFlats(store.address);
    }
}
</script>

<template>
    <!-- MODALE E SEARCHBAR -->
    <div class="container">
        <div class="d-flex gap-3 align-items-center mt-3">
            <SearchForm @send="fetchFlats" />
            <button type="button" class="btn btn-primary filter" data-bs-toggle="modal" data-bs-target="#modal">
                <font-awesome-icon icon="fa-solid fa-filter" />
                <span class="ms-2">Filtri avanzati</span>
            </button>
        </div>
        <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalLabel">Filtri</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <form @submit.prevent="fetchFlatsFilters">
                                <div class="row">
                                    <div class="col-12">
                                        <label for="distance">Raggio di ricerca {{ distance }} km</label>
                                        <input type="range" class="form-range" id="distance" min="1" max="20" step="1"
                                            v-model="distance">
                                    </div>
                                    <div class="col">
                                        <label for="rooms">Numero di stanze:</label>
                                        <input id="rooms" type="number" min="0" step="1" v-model="room">
                                    </div>
                                    <div class="col">
                                        <label for="bathrooms">Numero di bagni:</label>
                                        <input id="bathrooms" type="number" min="0" step="1" v-model="bathroom">
                                    </div>
                                </div>
                                <h5 class="mt-3">Servizi</h5>
                                <div class="mt-3">
                                    <div class="row row-cols-3">
                                        <div class="col" v-for="(flatService, i) in flatServices" :key="i">
                                            <div class="form-check form-check-inline">
                                                <label class="form-check-label" :for="flatService.id">{{
                                                    flatService.name }}
                                                </label>
                                                <input class="form-check-input" :id="flatService.id" type="checkbox"
                                                    :value="flatService.id" v-model="services">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-3 mt-2">
                                    <button class="btn btn-primary" data-bs-dismiss="modal">Cerca</button>
                                    <span @click="emptyFilters" class="btn btn-warning">Svuota i campi</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- LISTA SPONSORIZZATI -->
    <div class="container">
        <div class="gallery text-center row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 ">
            <div v-for="flat in sponsoredFlats" :key="flat.id" class="col">
                <BaseCard :flat="flat" :isDetail="false" :isSponsored="true" />
            </div>
        </div>
    </div>
    <!-- <AppSidebar :flats="store.flats" :flatServices="store.services" @send-form="" /> -->
    <!-- LISTA NORMALI -->
    <BaseGallery :flats="nonSponsoredFlats" />

    <div v-if="!nonSponsoredFlats.length" class="container">
        <div class="alert alert-primary" role="alert">
            <h4>Non ci sono appartamenti che rispecchiano le richieste effettuate</h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.filter {
    height: 35px;
}
</style>