<template>
  <div class="chat-window d-flex">
    <AllChats />
    <CurrentChat />
  </div>
</template>

<script setup>
import AllChats from "./AllChats.vue";
import CurrentChat from "./CurrentChat.vue"
</script>

<style lang="scss">
.chat-window {
  border: 1px solid #3C3987;
  border-radius: 16px;
  height: calc(100vh - 180.66px - 24px - 24px);
}
</style>