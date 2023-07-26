<template>
  <Main class="academy">
    <h2 class="h2-bold">Academy</h2>
    <Slider />
    <section>
      <!-- Tabs -->
      <header>
        <div class="courses-picker">
          <b-button :variant="showAllCourses ? 'primary' : 'transparent'" class="w-50"
            @click="showAllCourses = !showAllCourses">Cursos</b-button>
          <b-button :variant="!showAllCourses ? 'primary' : 'transparent'" class="w-50"
            @click="showAllCourses = !showAllCourses">Mis
            cursos</b-button>
        </div>
        <div class="filter-box" v-if="showAllCourses">
          <div class="search-filter">
            <div class="field-search">
              <b-form-input type="search" placeholder="search" class="b-light"></b-form-input>
              <i class="b7-search"></i>
            </div>
          </div>
          <FilterCourses />
        </div>
      </header>
      <div v-if="showAllCourses">
        <h3 class="h3-medium">Todos los cursos</h3>
        <div class="courses-grid">
          <CourseCard v-for="(course, index) in courses" :key="index" :course="course" />
        </div>
      </div>
      <div v-else>
        <h3 class="h3-medium">Mis cursos</h3>
        <div class="courses-grid">
          <MyCourseCard v-for="(course, index) in subscriptions" :key="index" :course="course" />
        </div>
      </div>
    </section>
  </Main>
  <SingleVideo v-if="showSingleVideo" />
</template>

<script>
import { mapActions, mapState } from "vuex";
import SingleVideo from "./content/SingleVideo.vue";
import FilterCourses from './content/Filter.vue'
export default {
  components: {
    FilterCourses,
    Slider,
    CourseCard,
    MyCourseCard,
    SingleCourse,
    SingleVideo
  },
  data() {
    return {
      showAllCourses: true,
      showSingleCourse: false,
      showSingleVideo: false,
      payload: {
        page: 1,
        course: null,
        category: null
      },
      myCourses: [
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
      ]
    }
  },
  created() {
    this.getData()
    this.getCategories()
    this.getSubscribed()
  },
  methods: {
    ...mapActions('academy', ['getCourses', 'getSubscribed', 'getCategories']),
    getData() {
      this.getCourses(this.payload)
    },
    toggleCourses() {

    }
  },
  computed: {
    ...mapState('academy', ['courses', 'subscriptions'])
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
