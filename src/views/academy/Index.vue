<template>
  <div v-if="!purchase">
    <Main class="academy" v-if="showAcademyMain">
      <h2 class="h2-bold">{{ $t('academy.title') }}</h2>
      <Slider @purchase="purchase = true" />
      <section>
        <!-- Tabs -->
        <header>
          <div class="courses-picker">
            <b-button :variant="showAllCourses ? 'primary' : 'transparent'" class="w-50"
              @click="toggleCourses('all')">{{ $t('academy.courses') }}</b-button>
            <b-button :variant="!showAllCourses ? 'primary' : 'transparent'" class="w-50"
              @click="toggleCourses('own')">{{ $t('academy.myCourses') }}</b-button>
          </div>
          <div class="filter-box">
            <div class="search-filter">
              <div class="field-search">
                <b-form-input type="search" :placeholder="$t('academy.search')" class="b-light"></b-form-input>
                <i class="b7-search"></i>
              </div>
            </div>
            <Filter />
          </div>
        </header>
        <h3 class="h3-medium">{{ $t('academy.allCourses') }}</h3>
        <div class="courses-grid">
          <CourseCard v-show="showAllCourses" v-for="(course, index) in allCourses" :key="index" :course="course"
            :showSingleCourse="showSingleCourse" @changeSingleCourse="showSingleCourse = $event" />
          <MyCourseCard v-show="!showAllCourses" v-for="(course, index) in myCourses" :key="index" :course="course" />
        </div>
      </section>
    </Main>
    <SingleCourse v-if="showSingleCourse" />
    <SingleVideo v-if="showSingleVideo" />
  </div>
  <PurchaseCourse v-if="purchase" @back="purchase = false" />
</template>

<script setup>
import Slider from "./content/Slider.vue";
import CourseCard from "./content/CourseCard.vue";
import MyCourseCard from "./content/MyCourseCard.vue";
import SingleCourse from "./content/SingleCourse.vue";
import SingleVideo from "./content/SingleVideo.vue";
import PurchaseCourse from "./purchase/PurchaseCourse.vue"

import { ref } from "vue";

let showAcademyMain = ref(true);
let showAllCourses = ref(true);
let showSingleCourse = ref(false);
let showSingleVideo = ref(false);

let purchase = ref(false)

let allCourses = [
  {
    name: "academy.courseName",
    price: 80,
    topic: "Finanzas",
    numberOfVideos: 20,
    startDate: "Inicia 11 de Julio",
    imagePath: "images",
    imageName: "students",
    imageExtension: "webp",
  },
  // {
  //   name: "Nombre del curso",
  //   price: 70,
  //   topic: "Coding",
  //   numberOfVideos: 15,
  //   startDate: "Inicia 15 de Julio",
  //   imagePath: "images",
  //   imageName: "students",
  //   imageExtension: "webp",
  // },
  // {
  //   name: "Nombre del curso",
  //   price: 80,
  //   topic: "Finanzas",
  //   numberOfVideos: 20,
  //   startDate: "Inicia 11 de Julio",
  //   imagePath: "images",
  //   imageName: "students",
  //   imageExtension: "webp",
  // },
  // {
  //   name: "Nombre del curso",
  //   price: 70,
  //   topic: "Coding",
  //   numberOfVideos: 15,
  //   startDate: "Inicia 15 de Julio",
  //   imagePath: "images",
  //   imageName: "students",
  //   imageExtension: "webp",
  // },
  // {
  //   name: "Nombre del curso",
  //   price: 80,
  //   topic: "Finanzas",
  //   numberOfVideos: 20,
  //   startDate: "Inicia 11 de Julio",
  //   imagePath: "images",
  //   imageName: "students",
  //   imageExtension: "webp",
  // },
  // {
  //   name: "Nombre del curso",
  //   price: 70,
  //   topic: "Coding",
  //   numberOfVideos: 15,
  //   startDate: "Inicia 15 de Julio",
  //   imagePath: "images",
  //   imageName: "students",
  //   imageExtension: "webp",
  // },
  // {
  //   name: "Nombre del curso",
  //   price: 80,
  //   topic: "Finanzas",
  //   numberOfVideos: 20,
  //   startDate: "Inicia 11 de Julio",
  //   imagePath: "images",
  //   imageName: "students",
  //   imageExtension: "webp",
  // },
  // {
  //   name: "Nombre del curso",
  //   price: 70,
  //   topic: "Coding",
  //   numberOfVideos: 15,
  //   startDate: "Inicia 15 de Julio",
  //   imagePath: "images",
  //   imageName: "students",
  //   imageExtension: "webp",
  // },
];

let myCourses = [
  {
    name: "Nombre del curso",
    topic: "Finanzas",
    numberOfVideos: 20,
    imagePath: "images",
    imageName: "students-books",
    imageExtension: "webp",
    progressPercentage: 20,
  },
  {
    name: "Nombre del curso",
    topic: "Coding",
    numberOfVideos: 15,
    imagePath: "images",
    imageName: "students-books",
    imageExtension: "webp",
    progressPercentage: 60,
  },
  {
    name: "Nombre del curso",
    topic: "Finanzas",
    numberOfVideos: 20,
    imagePath: "images",
    imageName: "students-books",
    imageExtension: "webp",
    progressPercentage: 20,
  },
  {
    name: "Nombre del curso",
    topic: "Coding",
    numberOfVideos: 15,
    imagePath: "images",
    imageName: "students-books",
    imageExtension: "webp",
    progressPercentage: 60,
  },
];

function toggleCourses(whichCourses) {
  if (whichCourses === "own") {
    showAllCourses.value = false;
  } else {
    showAllCourses.value = true;
  }
}
</script>

<style lang="scss" scoped>
.academy {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    header {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.6rem;

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
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1.6rem;

      @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 500px) {
        grid-template-columns: 1fr;
      }
    }
  }
}




.filter-box {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
