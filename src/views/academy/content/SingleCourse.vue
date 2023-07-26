<template>
    <main>
        <b-button variant="transparent" class="b-light"><i class="b7-back"></i> Regresar</b-button>
        <section v-if="course">
            <div class="video">
                <img :src="course.image" style="aspect-ratio: 16 / 9; border-radius: 20px; max-width: 80%;" alt="">
                <b-card no-body>
                    <b-card-body class="c-body">
                        <h6 class="l-medium">{{ course.name }}</h6>
                        <span class="curse-topic sm-light text-primary">{{ course.category?.name }}</span>
                        <div class="details">
                            <div class="number-videos">
                                <i class="b7-video"></i>
                                <p class="b-regular">{{ course.meta?.totalSections }} secciones</p>
                            </div>
                            <div class="start">
                                <i class="b7-calendar"></i>
                                <p class="b-light">{{ formatDate(course.created_at) }}</p>
                            </div>
                        </div>
                    </b-card-body>
                    <b-card-footer>
                        <b-button
                            @click="$router.push({ name: 'Academy-Video', params: { id: course.id, name: course.name.toLowerCase().replace(/ /g, '-') } })"
                            variant="primary" class="w-100">
                            Ir al curso
                        </b-button>
                    </b-card-footer>
                </b-card>
            </div>
            <div class="content">
                <h3 class="h3-medium">Contenido</h3>
                <div class="category" v-for="(section, index) in sections" :key="section.id">
                    <h5 class="h5-medium">U{{ index + 1 }}: {{ section.name }}</h5>
                    <div class="category-units">
                        <div class="unit" v-for="lesson in section.lessons">
                            <i class="b7-lock"></i>
                            <div>
                                <p class="sm-light" style="font-size: 20px;">{{ lesson.name }}</p>
                                <p class="sm-light">
                                    {{ lesson.summary }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <h3 class="h3-medium">{{ $t('academy.contenido') }}</h3>
                <div class="courses-grid">
                    <CourseCard v-for="(course, index) in allCourses" :key="index" :course="course" />
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { mapActions, mapState } from "vuex"
import CourseCard from "./CourseCard.vue"
export default {
    props: ['id', 'name'],
    data() {
        return {
            loading: false,
            allCourses: [
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
        }
    },
    created() {
        this.getData()
        this.getSectionsResponse()
    },
    methods: {
        ...mapActions('academy', ['getCourse']),
        ...mapActions('section', ['getSections']),
        getData() {
            this.loading = true
            this.getCourse(this.id).then(() => {
                this.loading = false
            })
        },
        getSectionsResponse() {
            this.loading = true
            this.getSections(this.id).then(() => {
                this.loading = false
            })
        }
    },
    computed: {
        ...mapState('academy', ['course']),
        ...mapState('section', ['sections'])
    }
}
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