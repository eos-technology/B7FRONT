<template>
    <div class="header-chat d-flex align-items-center justify-content-between">
        <img :src="getFile('images', 'avatar-chat', 'png')" alt="" class="avatar" />
        <div class="user-status mr-auto">
            <p class="l-medium">Yohana Ramirez</p>
            <p class="status sm-regular">En linea</p>
        </div>
        <img :src="getFile('images', 'paper-clip', 'svg')" alt="" class="header-tools" />
        <img :src="getFile('images', 'search', 'svg')" alt="" class="header-tools" />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header-chat {
    gap: 16px;
    padding: 16px;
    background: rgba(60, 57, 135, 0.20);

    .avatar {
        width: 40px;
        height: 40px;
    }

    .user-status {
        .status {
            color: #B5C2D7;
        }
    }

    .header-tools {
        width: 32px;
        height: 32px;
        padding: 4px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
        cursor: pointer;
    }
}
</style>