<script>
export default {
    name: 'AppLoader'
}
</script>

<template>
    <!-- contenitore-sfondo del loader -->
    <div class="loader-background">
        <!-- loader -->
        <div class="spinner-border text-danger " role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader-background {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>