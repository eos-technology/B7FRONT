<template>
  <b-button variant="outline-light"
    ><img class="referrals" :src="getFile('icons', 'copy')" alt="" />Link
    Referrals</b-button
  >
</template>

<script setup></script>

<style lang="scss" scoped>
.btn{
  padding: 8px 12px 8px 8px;
}
.referrals {
  padding: 6px;
  background: #3bbeee;
  border: 1px solid #3bbeee;
  border-radius: 100px;
}
</style>
