<template>
  <section class="team">
    <h2 class="h2-bold">{{ $t('team.title') }}</h2>
    <div class="card overflow-x-auto">
      <OrganizationChart :value="data" collapsible>
        <template #person="slotProps">
          <div class="d-flex flex-column">
            <div class="d-flex flex-column align-items-center">
              <img
                style="width: 100px"
                :src="getFile('images', 'logo', 'webp')"
                alt=""
              />
              <img
                :alt="slotProps.node.data.name"
                :src="slotProps.node.data.image"
                class="mb-3 user-tree"
              />
              <span class="h6-bold">{{ slotProps.node.data.name }}</span>
              <span class="b-light">{{ slotProps.node.data.title }}</span>
            </div>
          </div>
        </template>
        <template #default="slotProps">
          <span>{{ slotProps.node.label }}</span>
        </template>
      </OrganizationChart>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import OrganizationChart from "primevue/organizationchart";

const data = ref({
  key: "0",
  type: "person",
  styleClass: "text-white rounded-4 bg-secondary border-0 px-5 py-4",
  data: {
    image: "https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",
    name: "Amy Elsner",
    title: "User #00",
  },
  children: [
    {
      key: "0_0",
      type: "person",
      styleClass: "text-white rounded-4 bg-success border-0 px-5 py-4",
      data: {
        image: "https://primefaces.org/cdn/primevue/images/avatar/annafali.png",
        name: "Anna Fali",
        title: "CMO",
      },
      children: [
        {
          key: "0_1",
          type: "person",
          styleClass: "text-white rounded-4 bg-light border-0 px-5 py-4",
          data: {
            image:
              "https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png",
            name: "Stephen Shaw",
            title: "CTO",
          },
        },
        {
          key: "0_1",
          type: "person",
          styleClass: "text-white rounded-4 bg-light border-0 px-5 py-4",
          data: {
            image:
              "https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png",
            name: "Stephen Shaw",
            title: "CTO",
          },
        },
      ],
    },
    {
      key: "0_1",
      type: "person",
      styleClass: "text-white rounded-4 bg-success border-0 px-5 py-4",
      data: {
        image:
          "https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png",
        name: "Stephen Shaw",
        title: "CTO",
      },
      children: [
        {
          key: "0_1",
          type: "person",
          styleClass: "text-white rounded-4 bg-light border-0 px-5 py-4",
          data: {
            image:
              "https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png",
            name: "Stephen Shaw",
            title: "CTO",
          },
        },
        {
          key: "0_1",
          type: "person",
          styleClass: "text-white rounded-4 bg-light border-0 px-5 py-4",
          data: {
            image:
              "https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png",
            name: "Stephen Shaw",
            title: "CTO",
          },
        },
      ],
    },
  ],
});
</script>

<style lang="scss" scoped>
.team {
  display: grid;
  gap: 2.4rem;
}
.card {
  background-color: transparent;
}

.user-tree {
  width: 6.4rem;
  height: 6.4rem;
}
</style>
