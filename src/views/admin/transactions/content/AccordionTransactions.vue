<template>
  <div class="accordion" role="tablist">
    <div class="tab">
      <div v-b-toggle.collapse-1 class="movement">
        <div class="item-flex">
          <img :src="getFile('icons', 'avatar')" alt="" />
          <div class="item">
            <span class="sm-light">{{ $t('movements.user') }}</span>
            <span class="b-bold">email@email.com</span>
          </div>
        </div>
        <div class="item-flex">
          <img :src="getFile('icons', 'crypto-ico')" alt="" />
          <div class="item">
            <span class="sm-light">{{ $t('movements.quantity') }}</span>
            <span class="b-bold text-success">+$0.00</span>
          </div>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('movements.type') }}</span>
          <span class="b-medium">Type 000</span>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('movements.date') }}</span>
          <span class="b-medium">Febrero 23 2023</span>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('movements.state') }}</span>
          <span class="b-medium">{{ $t('movements.inprogress') }}</span>
        </div>
        <i class="b7-arrow-down"></i>
      </div>
      <div class="divider"></div>
      <b-collapse visible id="collapse-1" class="">
        <div class="d-flex">
          <div class="item d-flex flex-column w-50">
            <span class="sm-light">{{ $t('movements.from') }}</span>
            <span class="b-medium">{{ $t('movements.from') }}</span>
          </div>
          <div class="item d-flex flex-column w-50">
            <span class="sm-light">{{ $t('movements.to') }}</span>
            <span class="b-medium">{{ $t('movements.to') }}</span>
          </div>
        </div>
      </b-collapse>
    </div>
    <div class="tab">
      <div v-b-toggle.collapse-2 class="movement">
        <div class="item-flex">
          <img :src="getFile('icons', 'avatar')" alt="" />
          <div class="item">
            <span class="sm-light">{{ $t('movements.user') }}</span>
            <span class="b-bold">email@email.com</span>
          </div>
        </div>
        <div class="item-flex">
          <img :src="getFile('icons', 'crypto-ico')" alt="" />
          <div class="item">
            <span class="sm-light">{{ $t('movements.quantity') }}</span>
            <span class="b-bold text-success">+$0.00</span>
          </div>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('movements.type') }}</span>
          <span class="b-medium">Type 000</span>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('movements.date') }}</span>
          <span class="b-medium">Febrero 23 2023</span>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('movements.state') }}</span>
          <span class="b-medium">{{ $t('movements.inprogress') }}</span>
        </div>
        <i class="b7-arrow-down"></i>
      </div>
      <div class="divider"></div>
      <b-collapse id="collapse-2" class="">
        <div class="d-flex">
          <div class="item d-flex flex-column w-50">
            <span class="sm-light">{{ $t('movements.from') }}</span>
            <span class="b-medium">{{ $t('movements.from') }}</span>
          </div>
          <div class="item d-flex flex-column w-50">
            <span class="sm-light">{{ $t('movements.to') }}</span>
            <span class="b-medium">{{ $t('movements.to') }}</span>
          </div>
        </div>
      </b-collapse>
    </div>
    <div class="tab">
      <div v-b-toggle.collapse-3 class="movement">
        <div class="item-flex">
          <img :src="getFile('icons', 'avatar')" alt="" />
          <div class="item">
            <span class="sm-light">{{ $t('movements.user') }}</span>
            <span class="b-bold">email@email.com</span>
          </div>
        </div>
        <div class="item-flex">
          <img :src="getFile('icons', 'crypto-ico')" alt="" />
          <div class="item">
            <span class="sm-light">{{ $t('movements.quantity') }}</span>
            <span class="b-bold text-success">+$0.00</span>
          </div>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('movements.type') }}</span>
          <span class="b-medium">Type 000</span>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('movements.date') }}</span>
          <span class="b-medium">Febrero 23 2023</span>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('movements.state') }}</span>
          <span class="b-medium">{{ $t('movements.inprogress') }}</span>
        </div>
        <i class="b7-arrow-down"></i>
      </div>
      <div class="divider"></div>
      <b-collapse id="collapse-3" class="">
        <div class="d-flex">
          <div class="item d-flex flex-column w-50">
            <span class="sm-light">{{ $t('movements.from') }}</span>
            <span class="b-medium">{{ $t('movements.from') }}</span>
          </div>
          <div class="item d-flex flex-column w-50">
            <span class="sm-light">{{ $t('movements.to') }}</span>
            <span class="b-medium">{{ $t('movements.to') }}</span>
          </div>
        </div>
      </b-collapse>
    </div>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.accordion {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .tab {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 1.6rem;
    gap: 8px;

    .movement {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      align-items: center;
      flex-wrap: wrap;

      :first-child,
      :nth-child(2) {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        img {
          width: 3.2rem;
        }
      }

      .item {
        display: flex;
        flex-direction: column;
        gap: 0;
        align-items: flex-start;
        &-flex{
          flex: 1 0 100px;
        }

        .sm-light {
          color: #b5c2d7;
        }
      }

      i {
        padding: 8px;
        border-radius: 100px;
        background: rgba(255, 255, 255, 0.1);

        &:hover {
          filter: brightness(60%);
          cursor: pointer;
        }
      }
    }

    .divider {
      height: 1px;
      width: 100%;
      background: rgba(255, 255, 255, 0.2);
      opacity: 0.2;
      display: none;
    }

    .movement[aria-expanded="true"]+.divider {
      display: block;
    }
  }
}
</style>
