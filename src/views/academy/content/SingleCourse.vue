<template>
    <main>
        <b-button variant="transparent" class="b-light"><i class="b7-back"></i> Regresar</b-button>
        <section>
            <div class="video">
                <img :src="getFile('images', 'pre-video', 'webp')" style="aspect-ratio: 16 / 9" alt="">
                <b-card no-body>
                    <b-card-body class="c-body">
                        <h6 class="l-medium">Nombre del curso</h6>
                        <span class="curse-topic sm-light text-primary">Finanzas</span>
                        <div class="details">
                            <div class="number-videos">
                                <i class="b7-video"></i>
                                <p class="b-regular">20 videos</p>
                            </div>
                            <div class="start">
                                <i class="b7-calendar"></i>
                                <p class="b-light">Inicia 11 de Julio</p>
                            </div>
                        </div>
                    </b-card-body>
                    <b-card-footer><b-button variant="primary" class="w-100">Ir al curso</b-button></b-card-footer>
                </b-card>
            </div>
            <div class="content">
                <h3 class="h3-medium">Contenido</h3>
                <div class="category">
                    <h5 class="h5-medium">U1: Categoría</h5>
                    <div class="category-units">
                        <div class="unit">
                            <i class="b7-lock"></i>
                            <p class="sm-light">Nombre</p>
                        </div>
                        <div class="unit">
                            <i class="b7-lock"></i>
                            <p class="sm-light">Nombre</p>
                        </div>
                    </div>
                </div>
                <div class="category">
                    <h5 class="h5-medium">U2: Categoría</h5>
                    <div class="category-units">
                        <div class="unit">
                            <i class="b7-lock"></i>
                            <p class="sm-light">Nombre</p>
                        </div>
                        <div class="unit">
                            <i class="b7-lock"></i>
                            <p class="sm-light">Nombre</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <h3 class="h3-medium">Contenido</h3>
                <div class="courses-grid">
                    <CourseCard v-for="(course, index) in allCourses" :key="index" :course="course" />
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
import CourseCard from "./CourseCard.vue"

let allCourses = [
    {
        name: 'Nombre del curso',
        price: 80,
        topic: 'Finanzas',
        numberOfVideos: 20,
        startDate: 'Inicia 11 de Julio',
        imagePath: 'images',
        imageName: 'students',
        imageExtension: 'webp',
    },
    {
        name: 'Nombre del curso',
        price: 70,
        topic: 'Coding',
        numberOfVideos: 15,
        startDate: 'Inicia 15 de Julio',
        imagePath: 'images',
        imageName: 'students',
        imageExtension: 'webp',
    },
    {
        name: 'Nombre del curso',
        price: 80,
        topic: 'Finanzas',
        numberOfVideos: 20,
        startDate: 'Inicia 11 de Julio',
        imagePath: 'images',
        imageName: 'students',
        imageExtension: 'webp',
    },
    {
        name: 'Nombre del curso',
        price: 70,
        topic: 'Coding',
        numberOfVideos: 15,
        startDate: 'Inicia 15 de Julio',
        imagePath: 'images',
        imageName: 'students',
        imageExtension: 'webp',
    },
]
</script>
<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: flex-start;


    section {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        .video {
            display: flex;
            align-items: flex-start;
            gap: 1rem;

            img {
                width: 100%;
            }

            .card {
                min-width: 250px;

                .details>div {
                    display: flex;
                }
            }
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            .category {
                display: flex;
                flex-direction: column;
                gap: 1.25rem;

                .category-units {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;

                    .unit {
                        display: flex;
                        gap: 0.75rem;
                        padding: 1rem;
                        background: rgba(255, 255, 255, 0.05);
                        border-radius: 1rem;
                        align-items: center;
                        cursor: pointer;

                        .b7-lock {
                            color: #92395A;
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
}
</style>