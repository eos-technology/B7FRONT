<template>
  <section class="tabs-academy">
    <div class="center-tabs">
      <b-tabs pills align="center">
        <b-tab title="Información" active><InformationTab/></b-tab>
        <b-tab title="Módulo"><ModuleTab/></b-tab>
        <b-tab title="Comentarios"><CommentsTab/></b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script setup>
import InformationTab from './Tabs/InformationTab.vue';
import ModuleTab from './Tabs/ModuleTab.vue';
import CommentsTab from './Tabs/CommentsTab.vue';


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
