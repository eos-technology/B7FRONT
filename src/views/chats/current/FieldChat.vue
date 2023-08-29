<template>
    <div class="field d-flex align-items-center">
        <input v-model="form.text" type="text" class="flex-grow-1 b-light" placeholder="Mensaje">
        <button @click="sendMessage()">
            <img :src="getFile('images', 'send-message', 'svg')" alt="" />
        </button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    props: ['id'],
    data() {
        return {
            loading: false,
            form: {
                to_user_id: null,
                text: null,
                file: null
            },
            name: null
        }
    },
    created() {
        this.form.to_user_id = this.id
    },
    methods: {
        ...mapActions('chat', ['newMessage']),
        changeFiles() {
            this.form.file = this.$refs.miarchivo.files[0]
        },
        sendMessage() {
            this.form.to_user_id = this.id
            if (this.form.text == null || this.form.text == '' || this.form.to_user_id == null) {
                return
            }
            this.loading = true

            const formData = new FormData()
            formData.append('to_user_id', this.form.to_user_id)
            formData.append('text', this.form.text)
            formData.append('file', this.form.file)


            this.newMessage(formData).then(() => {
                this.form.text = null
                this.form.file = null
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState(['progressBarState'])
    }
}
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