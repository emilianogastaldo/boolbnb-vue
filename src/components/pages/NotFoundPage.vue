<script>
export default {
    name: 'NotFound'
}
</script>

<template>
    <div class="d-flex justify-content-center align-items-center">
        <h1>404 | Not Found</h1>
        <button @click="$router.back()">Torna indietro</button>
    </div>
</template>

<style lang="scss" scoped>
div {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
</style>
