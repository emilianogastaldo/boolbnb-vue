<script>
import BaseCard from '../BaseCard.vue';
import EmailForm from '../EmailForm.vue';
import { store } from '../../data/store.js';
import FlatMap from '../FlatMap.vue';
import axios from 'axios';
const defaultForm = {
    first_name: '',
    last_name: '',
    email_sender: '',
    text: '',
    flat_id: '',
};
export default {
    name: 'DetailPage',
    components: { BaseCard, EmailForm, FlatMap },
    data: () => ({
        flat: {},
        store,
        isError: false,
        isSent: false,
        form: {
            first_name: '',
            last_name: '',
            email_sender: '',
            text: '',
            flat_id: '',
        },
    }),
    methods: {
        async getFlat() {
            // attivo il loader
            store.isLoading = true;
            try {
                // raccolgo i dati relativi al dettaglio
                const res = await axios.get(store.baseUri + this.$route.params.slug);
                // destrutturo i dati dalla res
                const { data } = res;
                // riassegno i data all'oggetto vuoto
                this.flat = data;
            } catch (err) {
                // segnalo un eventuale errore
                console.error(err);
                // forzo il reindirizzamento verso la pagina 404
                this.$router.push({ name: 'not-found' });
            }
            // spengo il loader
            store.isLoading = false;
        },
        sendEmail(form) {
            form.flat_id = this.flat.id
            store.isLoading = true;
            axios.post(store.endpointMail, form)
                .then(res => {
                    this.isError = false;
                    this.isSent = true;
                    this.form = { defaultForm };
                })
                .catch(err => {
                    this.isError = true;
                }).then(() => {
                    store.isLoading = false;
                })
        },
        closeError() {
            this.isError = false;
        },
        closeSent() {
            this.isSent = false;
        }
    },
    created() {
        this.getFlat();
    }

}
</script>

<template>
    <div class="container">
        <BaseCard v-if="!store.isLoading && flat" :flat="flat" :isDetail="true" />
        <div class="row mt-5 mb-3 me-2">
            <div v-if="flat.longitude" class="col-12 col-lg-8 mb-5">
                <FlatMap :lon="flat.longitude" :lat="flat.latitude" />
            </div>
            <div class="col-12 col-lg-4 pippo">
                <EmailForm :isError="isError" :isSent="isSent" :form="form" @closeError="closeError"
                    @closeSent="closeSent" @sendEmail="sendEmail" />
            </div>
        </div>
        <RouterLink :to="{ name: 'filter' }" class="btn btn-primary mb-3">
            Torna indietro
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.pippo {
    border-radius: 8px;
    box-shadow: 0px 0px 6px -2px rgba(0, 0, 0, 0.5);
    padding: 20px;
}
</style>