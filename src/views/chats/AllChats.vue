<template>
    <div class="all-chats d-flex flex-column">
        <header class="d-flex justify-content-between align-items-center">
            <h4 class="h4-semibold">Chats</h4>
            <img :src="getFile('images', 'edit-create', 'svg')" alt="" />
        </header>
        <div class="search-field d-flex align-items-center position-relative">
            <input type="search" id="chat-search" name="search" class="b-light" :placeholder="$t('chats.search')">
            <i class="b7-search position-absolute"></i>
        </div>
        <div class="chats d-flex flex-column align-items-stretch">
            <SingleChat @click="selectUser(chat.id)" v-for="chat in conversations" :key="chat" :chat="chat" />
        </div>
    </div>
</template>

<script>
import SingleChat from "./SingleChat.vue";
import { mapActions, mapState } from 'vuex'
export default {
    components: { SingleChat },
    data() {
        return {
            loading: false,
            active: null
        }
    },
    created() {
        this.loadData()
    },
    methods: {
        ...mapActions('chat', ['getConversations', 'getChat', 'getUsersToChat']),
        loadData() {
            this.loading = true
            this.getConversations().then(() => {
                this.loading = false
            })
        },
        getUsers() {
            this.loading = true
            this.getUsersToChat().then(() => {
                this.loading = false
            })
        },
        selectUser(id) {
            this.active = id
            this.$emit('selected', id)
        }
    },
    computed: {
        ...mapState('chat', ['conversations'])
    }
}
</script>

<style lang="scss" scoped>
.all-chats {
    gap: 24px;
    padding: 24px;
    flex-grow: 1;
    border-right: 1px solid #3C3987;
    overflow-y: scroll;

    header {
        gap: 8px;

        img {
            cursor: pointer;
            width: 24px;
            height: 24px;
        }
    }

    .search-field {
        width: 100%;

        input {
            border-radius: 8px;
            background: rgba(194, 204, 214, 0.10);
            border: none;
            padding: 12px 16px 12px 40px;
            color: #596471;
            width: 100%;
        }

        i {
            left: 16px;
            color: #5E6F87;
            width: 16px;
        }
    }

    .chats {
        gap: 16px;
    }
}
</style>