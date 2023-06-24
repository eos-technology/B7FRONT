<template>
  <section class="academy">
    <h2 class="h2-bold">Academy</h2>
    <div class="courses__slider">
      <swiper @swiper="onSwiper" centeredSlides="true" :spaceBetween="16" :loop="true" :slidesPerView="'auto'"
        :modules="modules" class="mySwiper transparent" :pagination="{
          clickable: true,
        }" :autoplay="{ pauseOnMouseEnter: true, }">
        <swiper-slide v-for="index in 5" :key="index" class="swiper bg-secondary">
          <div class="info-wrap">
            <div class="info">
              <h6 class="h6-regular">Nombre Curso</h6>
              <div class="price">
                <h2 class="h2-bold">$80</h2>
                <h3 class="h3-light">/usd</h3>
              </div>
              <span class="curse-topic sm-light text-primary">Finanzas</span>
              <div class="details">
                <div class="number-videos">
                  <i class="b7-video"></i>
                  <p class="b-light">20 videos</p>
                </div>
                <div class="start">
                  <i class="b7-calendar"></i>
                  <p class="b-light">Inicia 11 de Julio</p>
                </div>
              </div>
            </div>
            <div class="actions bg-dark">
              <b-button class="detail-button" variant="transparent">Detalle</b-button>
              <b-button class="buy-button" variant="primary btn-sm">Comprar</b-button>
            </div>
          </div>
          <img :src="getFile(
            'images/academy',
            'students-having-video-call-with-teacher',
            'webp'
          )
            " alt="" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slider = ref(null);
    const onSwiper = (swiper) => {
      slider.value = swiper;
    };
    return {
      modules: [Autoplay],
      slider,
      onSwiper,
    };
  },
};
</script>

<style lang="scss" scoped>
.academy {
  .courses__slider {
    display: flex;

    .swiper {
      width: 100%;

      .swiper-slide {
        aspect-ratio: 16/9;
        width: 40%;
        height: min-content;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        opacity: 0.5;
        transform: scale(0.95);
        transition: all 0.5s ease;

        &-active {
          opacity: 1;
          margin: 0;
          transform: scale(1);
        }

        .info-wrap {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          height: 100%;

          .info {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem 1.5rem 0rem 1.5rem;
            gap: 0.5rem;
            justify-content: center;

            .price {
              display: flex;
              align-items: baseline;
            }

            .curse-topic {
              background: rgba(238, 135, 34, 0.2);
              padding: 0.25rem 0.5rem;
              border-radius: 8px;
            }

            .details {
              display: flex;
              flex-direction: column;

              .number-videos,
              .start {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                i {
                  font-size: 1.125rem;
                }
              }
            }
          }

          .actions {
            margin-top: auto;
            padding: 1rem 1.5rem;
            display: flex;
            gap: 2rem;
            justify-content: center;
            align-items: center;

            .detail-button {
              padding: 0;
              font-weight: 500;
            }

            .buy-button {
              padding: 0.5rem 2rem;
              font-weight: 500;
            }
          }
        }

        img {
          aspect-ratio: 1/1;
          height: 100%;
          max-width: 50%;
          object-fit: cover;
          border-radius: 16px;
        }
      }
    }
  }
}
</style>