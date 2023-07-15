<template>
    <div class="field d-flex align-items-center">
        <input type="text" class="flex-grow-1 b-light" :placeholder="$t('chats.mensaje')">
        <button>
            <img :src="getFile('images', 'send-message', 'svg')" alt="" />
        </button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.field {
    padding: 20px 16px;
    gap: 16px;
    background: rgba(60, 57, 135, 0.20);

    input {
        border-radius: 100px;
        background: #C2CCD6;
        border: none;
        color: #596471;
        padding: 12px 16px;

        &::placeholder {
            color: #596471;
        }
    }

    button {
        border-radius: 100%;
        border: none;
        background: #3C3987;
        aspect-ratio: 1/1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 24px;
            height: 24px;
            aspect-ratio: 1/1;
        }
    }
}
</style>