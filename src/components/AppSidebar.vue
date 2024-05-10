<script>

export default {
    name: 'AppSidebar',
    props: {
        flats: Array,
        flatServices: Array
    },
    data: () => ({
        form: {
            range: '',
            rooms: '',
            bathrooms: '',
            services: [],
        }
    }),
    methods: {
        resetForm() {
            this.form.range = '';
            this.form.rooms = '';
            this.form.bathrooms = '';
            this.form.services = [];
        }
    },
    emits: ['send-form'],
}
</script>

<template>

    <div class="sidebar text-center">
        <div class="mt-2">
            <h5>Filtri</h5>
            <form @submit.prevent>
                <div class="my-3">
                    <label for="range">Raggio di ricerca</label>
                    <input type="range" id="range" min="1" max="20" step="1" value="10" v-model="form.range"
                        @input="$emit('send-form', form)">

                </div>
                <!-- <button class="btn btn-warning" type="reset" @click="resetForm">Svuota i campi</button> -->
                <div class="row">
                    <div class="col">
                        <label class="col-10" for="rooms">Numero di stanze:</label>
                        <input class="col-10" id="rooms" type="number" min="0" step="1" v-model.trim="form.rooms"
                            @change="$emit('send-form', form)">
                    </div>
                    <div class="col">
                        <label class="col-10" for="bathrooms">Numero di bagni:</label>
                        <input class="col-10" id="bathrooms" type="number" min="0" step="1"
                            v-model.trim="form.bathrooms" @change="$emit('send-form', form)">
                    </div>
                </div>
                <!-- <vue3-collapse v-model="open"> -->
                <div>
                    <h5 class="mt-3">Servizi</h5>
                    <div class="mt-3 text-center services">
                        <div v-for="(flatService, i) in flatServices" :key="i">
                            <label class="col-5" :for="flatService.id">{{ flatService.name }}</label>
                            <input class="col-5" :id="flatService.id" type="checkbox" :value="flatService.id"
                                v-model="form.services" @change="$emit('send-form', form)">
                        </div>
                    </div>

                </div>
                <!-- </vue3-collapse> -->

            </form>


        </div>
    </div>

</template>
<style lang="scss" scoped>
/* barra laterale */
.sidebar {
    flex-basis: 250px;
    padding: 10px;
    flex-shrink: 0;
    overflow: hidden;
    // height: calc(100vh - 160px);

    form {
        width: 100%;
    }
}

.services {
    height: 200px;
    overflow: auto;
    width: 100%;

}
</style>
