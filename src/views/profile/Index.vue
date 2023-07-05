<template>
  <h2 class="h2-bold">Perfil</h2>
  <section class="tabs-academy">
    <div class="center-tabs">
      <b-tabs pills align="center">
        <b-tab title="Información" active>
          <InformationTab />
        </b-tab>
        <b-tab title="Contraseña">
          <PasswordTab />
        </b-tab>
        <b-tab title="2FA">
          <MemberShipsTab />
        </b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script setup>
import InformationTab from "./tabs/InformationTab.vue";
import PasswordTab from "./tabs/PasswordTab.vue";
import MemberShipsTab from "./tabs/AuthTab.vue";
</script>

<style lang="scss" scoped>
.h2.bold {
  margin-bottom: 25px;
}

.tabs-academy {
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 32px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
}
</style>
