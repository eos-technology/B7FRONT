<template>
    <main>
        <b-button variant="transparent" class="b-light"><i class="b7-back"></i> Regresar</b-button>
        <section>
            <div class="video">
                <img :src="getFile('images', 'pre-video', 'webp')" style="aspect-ratio: 16 / 9" alt="">
                <AccordionVideos />
            </div>
            <div class="video-description">
                <h5 class="h5-medium">Nombre del video</h5>
                <p class="b-light">
                    Morbi vel turpis venenatis, hendrerit risus quis, tincidunt ex. Fusce id erat turpis. Proin viverra
                    felis quis lacus consectetur bibendum. Praesent pharetra mi ut odio vulputate ultricies. Integer aliquam
                    lacus quis ipsum lacinia condimentum. Curabitur vel lectus ac lacus porttitor eleifend quis id velit.
                </p>
            </div>
        </section>
        <section class="comments-section">
            <div class="comment-input">
                <p class="l-medium">Comentarios</p>
                <b-form-textarea id="comments" size="sm" placeholder="Mensaje" class="b-light"></b-form-textarea>
            </div>
            <div class="comments">
                <div class="comment">
                    <img class="comment-avatar" :src="getFile('images', 'avatar', 'png')" alt="">
                    <div class="comment-info">
                        <div class="user-info">
                            <p class="l-medium">Nombre Usuario <span class="comment-date sm-light">Hace 1 semana</span></p>
                        </div>
                        <p class="b-light">
                            Morbi vel turpis venenatis, hendrerit risus quis, tincidunt ex. Fusce id erat
                            turpis. Proin viverra felis quis lacus consectetur bibendum. Praesent pharetra mi ut odio
                            vulputate ultricies. Integer aliquam lacus quis ipsum lacinia condimentum.
                        </p>
                        <b-button variant="transparent" class="text-primary">Responder</b-button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
import AccordionVideos from "./AccordionVideos.vue"


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
        }

        .video-description {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
    }

    .comments-section {
        gap: 2rem;
        width: 100%;

        .comment-input {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            textarea {
                border-radius: 12px;
                background: rgba(255, 255, 255, 0.10);
                color: #717171;

                &::placeholder {
                    color: #717171;
                }
            }
        }

        .comments {
            .comment {
                display: flex;
                gap: 1rem;
                align-items: flex-start;

                .comment-avatar {
                    width: 40px;
                    height: auto;
                }

                .comment-info {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    align-items: flex-start;

                    .comment-date {
                        color: #717171;
                        margin-left: 0.5rem;
                    }

                    button {
                        padding: 0;
                    }
                }
            }
        }

    }
}
</style>