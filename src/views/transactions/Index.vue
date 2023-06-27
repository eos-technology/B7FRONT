<template>
  <div>
    <div class="info">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div class="info__item">
                <p class="l-regular-new">{{ $t('information.m1') }}</p>
                <img
                  class="info__item-icon"
                  src="@/assets/icons/arrow-accordion.svg"
                  alt=""
                />
              </div>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="line line__acordion"></div>
            <div class="accordion-body">
              <div class="info__body">
                <img
                  class="info__img"
                  :src="getFile('images', 'm2', 'webp')"
                  alt=""
                />
                <p class="l-regular-new">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="b-light">
                  Quisque vel lectus sit amet neque molestie elementum. Etiam
                  consequat ipsum est, eget faucibus quam faucibus id. Donec
                  porta, nulla sit amet pellentesque accumsan, risus neque
                  ultricies velit, ut rutrum enim tortor eu tellus. In id pretium
                  felis. Pellentesque facilisis scelerisque lorem nec ornare.
                  Nulla sit amet facilisis nisl. Quisque porttitor pulvinar neque.
                  Suspendisse congue suscipit scelerisque. Nulla semper maximus
                  orci quis euismod. Nam volutpat molestie massa, eget rhoncus
                  tortor aliquet ac. Fusce vestibulum tellus sapien, ut auctor
                  dolor iaculis a. Quisque dignissim lacus turpis, a dignissim
                  quam tempus non. Nulla mollis eleifend est, et laoreet est
                  hendrerit id. Duis quis felis faucibus, feugiat risus quis,
                  accumsan mauris. Ut commodo volutpat dui rutrum dictum.
                  Suspendisse viverra ac ligula nec rutrum. Quisque nec gravida
                  dui, a placerat ex. Morbi vulputate erat finibus, laoreet odio
                  ut, vestibulum mauris. Curabitur blandit rutrum ipsum id
                  commodo. Vivamus rutrum elit in dui interdum finibus. Orci
                  varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Maecenas in porttitor eros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <div class="info__item">
                <p class="l-regular-new">{{ $t('information.m2') }}</p>
                <img
                  class="info__item-icon"
                  src="@/assets/icons/arrow-accordion.svg"
                  alt=""
                />
              </div>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="line line__acordion"></div>
            <div class="accordion-body">
              <div class="info__body">
                <img
                  class="info__img"
                  :src="getFile('images', 'm2', 'webp')"
                  alt=""
                />
                <p class="l-regular-new">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="b-light">
                  Quisque vel lectus sit amet neque molestie elementum. Etiam
                  consequat ipsum est, eget faucibus quam faucibus id. Donec
                  porta, nulla sit amet pellentesque accumsan, risus neque
                  ultricies velit, ut rutrum enim tortor eu tellus. In id pretium
                  felis. Pellentesque facilisis scelerisque lorem nec ornare.
                  Nulla sit amet facilisis nisl. Quisque porttitor pulvinar neque.
                  Suspendisse congue suscipit scelerisque. Nulla semper maximus
                  orci quis euismod. Nam volutpat molestie massa, eget rhoncus
                  tortor aliquet ac. Fusce vestibulum tellus sapien, ut auctor
                  dolor iaculis a. Quisque dignissim lacus turpis, a dignissim
                  quam tempus non. Nulla mollis eleifend est, et laoreet est
                  hendrerit id. Duis quis felis faucibus, feugiat risus quis,
                  accumsan mauris. Ut commodo volutpat dui rutrum dictum.
                  Suspendisse viverra ac ligula nec rutrum. Quisque nec gravida
                  dui, a placerat ex. Morbi vulputate erat finibus, laoreet odio
                  ut, vestibulum mauris. Curabitur blandit rutrum ipsum id
                  commodo. Vivamus rutrum elit in dui interdum finibus. Orci
                  varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Maecenas in porttitor eros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              <div class="info__item">
                <p class="l-regular-new">{{ $t('information.plan') }}</p>
                <img
                  class="info__item-icon"
                  src="@/assets/icons/arrow-accordion.svg"
                  alt=""
                />
              </div>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="line line__acordion"></div>
            <div class="accordion-body">
              <div class="info__body">
                <img
                  class="info__img"
                  :src="getFile('images', 'm2', 'webp')"
                  alt=""
                />
                <p class="l-regular-new">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="b-light">
                  Quisque vel lectus sit amet neque molestie elementum. Etiam
                  consequat ipsum est, eget faucibus quam faucibus id. Donec
                  porta, nulla sit amet pellentesque accumsan, risus neque
                  ultricies velit, ut rutrum enim tortor eu tellus. In id pretium
                  felis. Pellentesque facilisis scelerisque lorem nec ornare.
                  Nulla sit amet facilisis nisl. Quisque porttitor pulvinar neque.
                  Suspendisse congue suscipit scelerisque. Nulla semper maximus
                  orci quis euismod. Nam volutpat molestie massa, eget rhoncus
                  tortor aliquet ac. Fusce vestibulum tellus sapien, ut auctor
                  dolor iaculis a. Quisque dignissim lacus turpis, a dignissim
                  quam tempus non. Nulla mollis eleifend est, et laoreet est
                  hendrerit id. Duis quis felis faucibus, feugiat risus quis,
                  accumsan mauris. Ut commodo volutpat dui rutrum dictum.
                  Suspendisse viverra ac ligula nec rutrum. Quisque nec gravida
                  dui, a placerat ex. Morbi vulputate erat finibus, laoreet odio
                  ut, vestibulum mauris. Curabitur blandit rutrum ipsum id
                  commodo. Vivamus rutrum elit in dui interdum finibus. Orci
                  varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Maecenas in porttitor eros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              <div class="info__item">
                <p class="l-regular-new">{{ $t('information.midas') }}</p>
                <img
                  class="info__item-icon"
                  src="@/assets/icons/arrow-accordion.svg"
                  alt=""
                />
              </div>
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="line line__acordion"></div>
            <div class="accordion-body">
              <div class="info__body">
                <img
                  class="info__img"
                  :src="getFile('images', 'm2', 'webp')"
                  alt=""
                />
                <p class="l-regular-new">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p class="b-light">
                  Quisque vel lectus sit amet neque molestie elementum. Etiam
                  consequat ipsum est, eget faucibus quam faucibus id. Donec
                  porta, nulla sit amet pellentesque accumsan, risus neque
                  ultricies velit, ut rutrum enim tortor eu tellus. In id pretium
                  felis. Pellentesque facilisis scelerisque lorem nec ornare.
                  Nulla sit amet facilisis nisl. Quisque porttitor pulvinar neque.
                  Suspendisse congue suscipit scelerisque. Nulla semper maximus
                  orci quis euismod. Nam volutpat molestie massa, eget rhoncus
                  tortor aliquet ac. Fusce vestibulum tellus sapien, ut auctor
                  dolor iaculis a. Quisque dignissim lacus turpis, a dignissim
                  quam tempus non. Nulla mollis eleifend est, et laoreet est
                  hendrerit id. Duis quis felis faucibus, feugiat risus quis,
                  accumsan mauris. Ut commodo volutpat dui rutrum dictum.
                  Suspendisse viverra ac ligula nec rutrum. Quisque nec gravida
                  dui, a placerat ex. Morbi vulputate erat finibus, laoreet odio
                  ut, vestibulum mauris. Curabitur blandit rutrum ipsum id
                  commodo. Vivamus rutrum elit in dui interdum finibus. Orci
                  varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Maecenas in porttitor eros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EmptyStatus
        class="mt-5"
        icon="info"
        :title="$t('information.emptyStatus')"
        :text="$t('information.infoYet')"
      />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.info {
  display: grid;
  gap: 3.2rem;
  &__img {
    width: 100%;
  }
  &__item {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1.6rem;
    justify-content: space-between;
    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px 8px;
      width: 44px;
      height: 44px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 100px;
      transition: all ease-in-out 200ms;
      transform: rotate(180deg);
    }
  }
  &__body {
    display: grid;
    gap: 1.6rem;
  }
}

.accordion-button:not(.collapsed) {
  .info__item-icon {
    transition: all ease-in-out 200ms;
    transform: rotate(0deg);
  }
}
</style>
