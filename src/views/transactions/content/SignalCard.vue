<template>
    <div class="signal-card">
        <img :src="getFile('images', 'brand', 'png')" alt="" />
        <div class="info">
            <span class="b-regular">Available USD</span>
            <span class="l-bold">$0.000</span>
        </div>
        <i class="b7-dollar text-primary"></i>
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.signal-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    background: #201E61;
    border-radius: 1rem;
    padding: 0.25rem 1.5rem 0.25rem 0.25rem;
    width: min-content;

    .info {
        display: flex;
        flex-direction: column;

        span {
            width: max-content;
        }
    }

    i {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 1rem;
        padding: 0.625rem;
    }
}
</style>