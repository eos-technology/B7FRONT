<template>
    <div ref="chatContainer" class="body-chat d-flex flex-column align-items-stretch">
        <div class="chat-bubble incoming">
            <p class="message b-regular">Hola buenos días</p>
            <span class="time xs-regular">00:00 PM</span>
        </div>
        <div class="chat-bubble incoming">
            <p class="message b-regular">consectetur adipiscing elit. Donec dignissim tempor mauris sit amet dapibus.</p>
            <span class="time xs-regular">00:00 PM</span>
        </div>
        <div class="chat-bubble incoming">
            <p class="message b-regular">consectetur adipiscing elit. Donec dignissim tempor mauris sit amet dapibus.</p>
            <span class="time xs-regular">00:00 PM</span>
        </div>
        <div class="chat-bubble outgoing">
            <p class="message b-regular">Hola buenos días</p>
            <span class="time xs-regular">00:00 PM</span>
        </div>
        <div class="chat-bubble outgoing">
            <p class="message b-regular">consectetur adipiscing elit. Donec dignissim tempor mauris sit amet dapibus.</p>
            <span class="time xs-regular">00:00 PM</span>
        </div>
        <div class="chat-bubble incoming">
            <p class="message b-regular">consectetur adipiscing elit. Donec dignissim</p>
            <span class="time xs-regular">00:00 PM</span>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const chatContainer = ref(null)

const scrollChatToBottom = () => {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
}

onMounted(scrollChatToBottom)
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