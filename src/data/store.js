import { reactive } from 'vue';

export const store = reactive({
    address: '',
    flats: [],
    services: [],
    isLoading: false,
    baseUri: 'http://localhost:8000/api/flats/',
    endpointMail: 'http://localhost:8000/api/contact-mail/',
    apiKey: '7HTi0jsdt2LOACuuEHuHjOPmcdLsmvEw',

});