<template>
  <section class="tabs-academy">
    <div class="center-tabs">
      <b-tabs pills align="center">
        <b-tab title="First" active><InformationTab/></b-tab>
        <b-tab title="Second"><p>I'm the second tab</p></b-tab>
        <b-tab title="Disabled"><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script setup>
import InformationTab from './Tabs/InformationTab.vue';


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
