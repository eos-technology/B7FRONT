<template>
    <div ref="chatContainer" class="body-chat d-flex flex-column align-items-stretch">
        <div class="chat-bubble" v-for="chat in chats" :key="chat.id"
            :class="user.id == chat.from_user_id ? 'outgoing' : 'incoming'">
            <p class="message b-regular">{{ chat.text }}</p>
            <span class="time xs-regular">{{ formatDateHumanize(chat.created_at) }}</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('chat', ['chats']),
        ...mapState('auth', ['user'])
    }
}
</script>

<style lang="scss" scoped>
.body-chat {
    padding: 24px;
    flex-grow: 1;
    gap: 16px;
    overflow-y: scroll;

    .chat-bubble {
        padding: 8px;
        border-radius: 12px;
        width: 30%;
        display: flex;
        flex-direction: column;
        position: relative;

        &.incoming {
            background: #15153B;
            align-self: flex-start;

            &::before {
                content: url('/bubble-tails/tail-left.svg');
                position: absolute;
                width: 10.5px;
                height: 14px;
                left: -8px;
                bottom: 14px;
            }
        }

        &.outgoing {
            background: #3C3987;
            align-self: flex-end;

            &::after {
                content: url('/bubble-tails/tail-right.svg');
                position: absolute;
                width: 10.5px;
                height: 14px;
                right: -7px;
                bottom: 14px;
            }
        }

        .message {
            align-self: flex-start;
        }

        .time {
            color: #B5C2D7;
            align-self: flex-end;
        }
    }
}
</style>