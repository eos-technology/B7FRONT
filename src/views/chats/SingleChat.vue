<template>
    <div class="single-chat d-flex align-items-stretch">
        <img :src="getFile('images', 'avatar-chat', 'png')" alt="" />
        <div class="chat-data d-flex align-items-start justify-content-between grow-1">
            <div class="name-message d-flex flex-column grow-1">
                <p class="name b-regular">Camilo Rodrigez</p>
                <p class="last-message sm-regular">Hola Andrea!</p>
            </div>
            <div class="time-noreaded d-flex flex-column align-items-end">
                <p class="time sm-regular ">00:00 PM</p>
                <b-badge pill variant="light" class="xm-semibold">10</b-badge>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.single-chat {
    gap: 16px;

    img {
        width: 40px;
        height: 40px;
        aspect-ratio: 1 / 1;
        margin-bottom: 14px;
    }

    &:last-child .chat-data {
        border: none;
    }

    .chat-data {
        gap: 16px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        flex-grow: 1;

        .name-message {
            .last-message {
                color: #B5C2D7;
            }
        }

        .time-noreaded {
            .time {
                color: #B5C2D7;
                margin-top: 3px;
            }

            .badge {
                font-size: 10px;
            }
        }
    }
}
</style>