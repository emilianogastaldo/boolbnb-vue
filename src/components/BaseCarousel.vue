<script>
export default {
    name: 'BaseCarousel',
    props: {
        flats: Array,
    },
    data: () => ({
        currentId: 0
    }),
    methods: {
        goToThePrev() {
            const firstId = this.flats.length - 1;
            if (this.currentId === 0) this.currentId = firstId;
            else this.currentId--;
        },
        goToTheNext() {
            const lastId = this.flats.length - 1;
            if (this.currentId === lastId) this.currentId = 0;
            else this.currentId++;
        }
    }

}
</script>

<template>
    <div id="carousel" class="carousel slide">
        <div class="buttons">

            <button @click="goToThePrev">
                <font-awesome-icon :icon="'fas fa-arrow-left'" />
            </button>
            <button @click="goToTheNext">
                <font-awesome-icon :icon="'fas fa-arrow-right'" />
            </button>
        </div>
        <div v-for="flat in flats" :key="flat.id" class="carousel-inner">
            <figure class="carousel-item" :class="{ 'active': flat.id === currentId }">
                <img class="d-block img-fluid" :src="flat.image" :alt="flat.title">
                <figcaption>
                    <h5>{{ flat.title }}</h5>
                    <p>{{ flat.address }}</p>
                </figcaption>
            </figure>

        </div>


    </div>

</template>

<style lang="scss" scoped>
#carousel {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    position: relative;
    border-radius: 20px;

    .buttons {
        position: absolute;
        bottom: 0;
        left: 50%;

        button {
            width: 30px;
            height: 30px;
            padding: 0;
            background-color: #051E34;
            border: none;
            border-radius: 50%;

            .fa-arrow-left,
            .fa-arrow-right {
                color: #FF9900;
            }
        }
    }

    .figure {
        position: relative;

        img {
            max-width: 100%;
        }

        figcaption {
            position: absolute;
            top: 5px;
            left: 5px;
        }
    }
}
</style>