<template>
    <main>
        <b-button variant="transparent" class="b-light"><i class="b7-back"></i> Regresar</b-button>
        <h2 class="h2-bold">Clase de Trading - Operaciones Binarías</h2>
        <img :src="getFile('images', 'pre-video', 'webp')" style="aspect-ratio: 16 / 9" alt="" />
    </main>
</template>
<script setup>


</script>
<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;

    img {
        width: 100%;
    }

}
</style>