<template>
  <Main class="academy">
    <h2 class="h2-bold">Academy</h2>
    <Slider />
    <Section>
      <header>
        <div class="courses-picker">
          <b-button variant="primary" class="w-50">Cursos</b-button>
          <b-button variant="transparent" class="w-50">Cursos</b-button>
        </div>
        <div class="search-filter">
          <div class="field-search">
            <b-form-input type="search" placeholder="search" class="b-light"></b-form-input>
            <i class="b7-search"></i>
          </div>

        </div>
      </header>
      <h3 class="h3-medium">Todos los cursos</h3>
      <div class="courses-grid">
        <CourseCard img="students" />
        <CourseCard img="students" />
        <CourseCard img="students" />
        <CourseCard img="students" />
        <CourseCard img="students" />
        <CourseCard img="students" />
        <CourseCard img="students" />
        <CourseCard img="students" />
        <CourseCard img="students" />
      </div>
    </Section>
  </Main>
</template>

<script setup>
import Slider from "./content/Slider.vue"
import CourseCard from "./content/CourseCard.vue"
</script>

<style lang="scss" scoped>
.academy {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  section {
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

      .search-filter {
        .field-search {
          display: flex;
          align-items: center;
          position: relative;

          input {
            border-radius: 16px;
            background: rgba(246, 248, 250, 0.05);
            padding: 0.75rem 1.25rem 0.75rem 3.5rem;
            color: white;

            &::placeholder {
              color: white;
            }
          }

          i {
            position: absolute;
            left: 1.25rem;
            font-size: 1.25rem;
          }
        }
      }
    }

    .courses-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 1.5rem 1rem;
    }
  }
}
</style>