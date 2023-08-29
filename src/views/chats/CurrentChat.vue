<template>
    <div class="current-chat d-flex flex-column">
        <!-- <HeaderChat /> -->
        <BodyChat />
        <FieldChat :id="selected" />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import HeaderChat from "./current/HeaderChat.vue";
import BodyChat from "./current/BodyChat.vue";
import FieldChat from "./current/FieldChat.vue";
export default {
    props: ['selected'],
    components: { HeaderChat, BodyChat, FieldChat },
    data() {
        return {
            loading: false
        }
    },
    methods: {
        ...mapActions('chat', ['getChat']),
        loadData() {
            this.loading = true
            this.getChat(this.selected).then(() => {
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState('chat', ['chats']),
        ...mapState('auth', ['user'])
    },
    watch: {
        selected: {
            immediate: true,
            handler(val) {
                this.loadData();
            },
        },
    }
}
</script>

<style lang="scss" scoped>
.current-chat {
    flex-grow: 2;
}
</style>