<template>
    <div class="current-chat d-flex flex-column">
        <HeaderChat />
        <BodyChat />

    </div>
</template>

<script setup>
import HeaderChat from "./current/HeaderChat.vue";
import BodyChat from "./current/BodyChat.vue";


</script>

<style lang="scss" scoped>
.current-chat {
    flex-grow: 2;
}
</style>