<template>
  <div class="chat-window d-flex">
    <AllChats @selected="selectUser" />
    <CurrentChat :selected="selected" :key="selected" />
    {{ selected }}
  </div>
</template>

<script>
import AllChats from "./AllChats.vue";
import CurrentChat from "./CurrentChat.vue"
export default {
  components: { AllChats, CurrentChat },
  data() {
    return {
      selected: null
    }
  },
  methods: {
    selectUser(data) {
      this.selected = data
    }
  }
}
</script>

<style lang="scss">
.chat-window {
  border: 1px solid #3C3987;
  border-radius: 16px;
  height: calc(100vh - 24px - 24px);
  max-height: 700px;
}
</style>