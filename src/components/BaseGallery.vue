<script>
import { RouterLink } from 'vue-router';
import BaseCard from './BaseCard.vue'
export default {
    name: 'BaseGallery',
    components: {
        BaseCard
    },
    props: {
        flats: Array,
    }
}
</script>

<template>
    <div class="container">
        <div
            class="gallery text-center row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 text-decoration-none my-2 pb-4">
            <BaseCard v-for="flat in flats" :key="flat.id" :flat="flat" :isDetail="false" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
// div {
//     // height: calc(100vh - 160px);

// }

/* galleria */
.gallery {
    flex-grow: 1;
    overflow: auto;
}
</style>