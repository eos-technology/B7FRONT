<template>
  <section class="tabs-academy">
    <div class="center-tabs">
      <b-tabs pills align="center">
        <b-tab :title="$t('users.information')" active><InformationTab /></b-tab>
        <b-tab :title="$t('users.password')"><PasswordTab /></b-tab>
        <b-tab :title="$t('users.membership')"><MemberShipsTab /></b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script setup>
import InformationTab from "./Tabs/InformationTab.vue";
import PasswordTab from "./Tabs/PasswordTab.vue";
import MemberShipsTab from "./Tabs/MembershipsTab.vue";
</script>

<style lang="scss" scoped>
.tabs-academy {
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 32px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
}
</style>
