<template>
  <section class="plan" v-if="course === false">
    <div class="plan__header">
      <h2 class="h2-bold">Academy</h2>
      <b-button variant="primary" @click="course = true">Crear curso</b-button>
    </div>

    <div class="plan__chart">
      <ChartPlans />
    </div>

    <section class="tabs-courses">
      <!-- Tabs -->
      <header>
        <div class="courses-picker">
          <b-button
            :variant="
              activeTab === 'showAllCourses' ? 'primary' : 'transparent'
            "
            class="w-100"
            @click="changeTab('showAllCourses')"
          >
            Cursos
          </b-button>
          <b-button
            :variant="activeTab === 'showUsers' ? 'primary' : 'transparent'"
            class="w-100"
            @click="changeTab('showUsers')"
          >
            Usuarios
          </b-button>
          <b-button
            :variant="activeTab === 'showTeachers' ? 'primary' : 'transparent'"
            class="w-100"
            @click="changeTab('showTeachers')"
          >
            Docentes
          </b-button>
        </div>
        <div class="filter-box" v-if="activeTab === 'showAllCourses'">
          <div class="search-filter">
            <div class="field-search">
              <b-form-input
                type="search"
                placeholder="search"
                class="b-light"
              ></b-form-input>
              <i class="b7-search"></i>
            </div>
          </div>
          <Filter />
        </div>
      </header>
      <h3 class="h3-medium" v-if="activeTab === 'showAllCourses'">
        Todos los cursos
      </h3>
      <h3 class="h3-medium" v-if="activeTab === 'showUsers'">Lista usuarios</h3>
      <div class="courses-grid">
        <CourseCard
          v-show="activeTab === 'showAllCourses'"
          v-for="(course, index) in allCourses"
          :key="index"
          :course="course"
        />
      </div>
      <Withdrawls v-show="activeTab === 'showUsers'" />
      <TeachersList v-show="activeTab === 'showTeachers'" />
    </section>
  </section>

  <section class="edit" v-if="course">
    <GoBackDummy @click="course = false" />
    <CreateCourse />
  </section>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import ChartPlans from "./charts/ChartPlans.vue";
import CourseCard from "./content/CourseCard.vue";
import Withdrawls from "./content/Withdrawls.vue";
import TeachersList from "./content/TeachersList.vue";
import CreateCourse from "./content/CreateCourse.vue";

const course = ref(false);

// Estado de las tabs
const tabs = reactive({
  showAllCourses: ref(true),
  showUsers: ref(false),
  showTeachers: ref(false),
});

// Tab activa actualmente
const activeTab = computed(() => {
  if (tabs.showAllCourses) return "showAllCourses";
  if (tabs.showUsers) return "showUsers";
  if (tabs.showTeachers) return "showTeachers";
});

// Función para cambiar la tab activa
const changeTab = (tab) => {
  Object.keys(tabs).forEach((key) => {
    tabs[key] = false;
  });
  tabs[tab] = true;
};

let allCourses = [
  {
    name: "Nombre del curso",
    price: 80,
    topic: "Finanzas",
    numberOfVideos: 20,
    startDate: "Inicia 11 de Julio",
    imagePath: "images",
    imageName: "students",
    imageExtension: "webp",
  },
  {
    name: "Nombre del curso",
    price: 70,
    topic: "Coding",
    numberOfVideos: 15,
    startDate: "Inicia 15 de Julio",
    imagePath: "images",
    imageName: "students",
    imageExtension: "webp",
  },
  {
    name: "Nombre del curso",
    price: 80,
    topic: "Finanzas",
    numberOfVideos: 20,
    startDate: "Inicia 11 de Julio",
    imagePath: "images",
    imageName: "students",
    imageExtension: "webp",
  },
  {
    name: "Nombre del curso",
    price: 70,
    topic: "Coding",
    numberOfVideos: 15,
    startDate: "Inicia 15 de Julio",
    imagePath: "images",
    imageName: "students",
    imageExtension: "webp",
  },
  {
    name: "Nombre del curso",
    price: 80,
    topic: "Finanzas",
    numberOfVideos: 20,
    startDate: "Inicia 11 de Julio",
    imagePath: "images",
    imageName: "students",
    imageExtension: "webp",
  },
  {
    name: "Nombre del curso",
    price: 70,
    topic: "Coding",
    numberOfVideos: 15,
    startDate: "Inicia 15 de Julio",
    imagePath: "images",
    imageName: "students",
    imageExtension: "webp",
  },
  {
    name: "Nombre del curso",
    price: 80,
    topic: "Finanzas",
    numberOfVideos: 20,
    startDate: "Inicia 11 de Julio",
    imagePath: "images",
    imageName: "students",
    imageExtension: "webp",
  },
  {
    name: "Nombre del curso",
    price: 70,
    topic: "Coding",
    numberOfVideos: 15,
    startDate: "Inicia 15 de Julio",
    imagePath: "images",
    imageName: "students",
    imageExtension: "webp",
  },
];
</script>

<style lang="scss" scoped>

.edit{
  display: grid;
  gap: 4.8rem;
}
.plan {
  display: grid;
  gap: 2.4rem;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.2rem;
  }
  &__filter {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
  &__table {
    padding: 2.4rem;
    display: grid;
    gap: 2.4rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.05);
    @media (max-width: 600px) {
      padding: 1.2rem;
    }
  }
}

.tabs-courses {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  header {
    display: flex;
    justify-content: space-between;

    .courses-picker {
      display: flex;
      width: 320px;
      border-radius: 100px;
      background: rgba(246, 248, 250, 0.05);
      padding: 0.25rem;

      button {
        padding: 0.5rem;
      }
    }
  }

  .courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1.6rem;
  }
}

.filter-box {
  display: flex;
  gap: 1rem;
}
</style>
