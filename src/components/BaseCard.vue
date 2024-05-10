<script>
import FlatMap from './FlatMap.vue';

export default {
    name: 'BaseCard',
    components: {
        FlatMap
    },
    props: {
        flat: Object,
        isDetail: Boolean,
        isSponsored: Boolean
    },
    computed: {
        getFormatedDistance() {
            let message = '';
            if (this.flat.distance > 0 && this.flat.distance < 1) {
                const dist = (1000 * this.flat.distance).toFixed(0);
                message = dist + ' m';
            }
            else if (this.flat.distance >= 1) {
                const dist = this.flat.distance.toFixed(1);
                message = dist + ' km';
            }
            return message;
        }
    }
}
</script>

<template>
    <div>
        <RouterLink v-if="!isDetail" :to="{ name: 'detail', params: { slug: flat.slug } }"
            class="text-decoration-none d-flex alig-items-center justify-content-center">
            <div class="card custom">
                <div class="position-relative">
                    <div class="image-container">
                        <img :src="flat.image" class="card-img rounded">
                    </div>
                    <div>
                        <h5 class="mt-2">{{ flat.title }}</h5>
                        <p class="card-text mb-0">{{ flat.address }}</p>
                        <p v-if="flat.distance" class="mb-0">Distanza dall'indirizzo cercato: <span class="fw-bold">{{
                            getFormatedDistance }}</span>
                        </p>
                    </div>
                    <font-awesome-icon v-if="isSponsored" icon="fa-solid fa-crown" class="premium" />
                </div>
            </div>
        </RouterLink>
    </div>
    <div v-if="isDetail">
        <div class="row">
            <!-- Immagine -->
            <div class="col-12 col-md-6 col-lg-6 img-container text-center mt-3">
                <img :src="flat.image" class="image-fluid rounded flat-img" :alt="flat.title">
            </div>
            <div class="col-12 col-md-6 col-lg-6 mt-2">
                <!-- Titolo -->
                <h3>{{ flat.title }}</h3>
                <!-- Indirizzo -->
                <h5>{{ flat.address }}</h5>
                <!-- Descrizione -->
                <p>{{ flat.description }}</p>
                <!-- Stanze e bagni -->
                <h5>Informazioni sull'appartamento</h5>
                <p class="mb-0">Numero di stanze: {{ flat.room }}</p>
                <p>Numero di bagni: {{ flat.bathroom }}</p>
                <!-- Servizi -->
                <h5 class="text-center">Servizi presenti nell'appartamento</h5>
                <div class="row text-center">
                    <div class="col-12 col-md-6 col-lg-6" v-for="service in flat.services" :key="service.id">
                        <span class="badge text-bg-dark same-w">{{ service.name }}: <font-awesome-icon
                                :icon="service.icon" /></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.custom {
    border-radius: 8px;
    box-shadow: 0px 0px 6px -2px rgba(0, 0, 0, 0.3);
    padding: 15px;
    height: 370px;
    transition: transform 0.4s;
}

.card-img {
    max-width: 310px;
    height: 200px;
}

.custom:hover {
    transform: scale(1.05);
}


.card {
    border: none;
}

.flat-img {
    max-width: 750px;
}

.same-w {
    width: 180px;
}

.services {
    width: 400px;
}

.desc {
    width: 400px;
    margin: 0 auto;
}

.more-infos {
    width: 400px;
    margin: 0 auto;
}

.image-fluid {
    width: 100%;
    height: auto;
}

.premium {
    color: #ffd700;
    background-color: #141155;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    padding: 8px;
    border-radius: 50%;

    position: absolute;
    top: 0;
    right: 0;
    transform: translate(60%, -60%);
}

@media screen and (max-width: 767px) {
    .custom {
        width: 330px;
    }
}
</style>
