<template>
  <div class="accordion" role="tablist">
    <div class="tab">
      <div v-b-toggle.collapse-1 class="movement">
        <div class="item-flex">
          <img :src="getFile('icons', 'crypto-ico')" alt="" />
          <div class="item">
            <span class="sm-light">{{ $t('transactionsUser.quantity') }}</span>
            <span class="b-bold text-success">+$0.00</span>
          </div>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('transactionsUser.type') }}</span>
          <span class="b-medium">Type 000</span>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('transactionsUser.date') }}</span>
          <span class="b-medium">Febrero 23 2023</span>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('transactionsUser.state') }}</span>
          <span class="b-medium">En proceso</span>
        </div>
        <i class="b7-arrow-down"></i>
      </div>
      <div class="divider"></div>
      <b-collapse visible id="collapse-1" class="">
        <div class="d-flex">
          <div class="item d-flex flex-column w-50">
            <span class="sm-light">{{ $t('transactionsUser.from') }}</span>
            <span class="b-medium">{{ $t('transactionsUser.from') }}</span>
          </div>
          <div class="item d-flex flex-column w-50">
            <span class="sm-light">{{ $t('transactionsUser.to') }}</span>
            <span class="b-medium">{{ $t('transactionsUser.to') }}</span>
          </div>
        </div>
      </b-collapse>
    </div>
    <div class="tab">
      <div v-b-toggle.collapse-2 class="movement">
        <div class="item-flex">
          <img :src="getFile('icons', 'crypto-ico')" alt="" />
          <div class="item">
            <span class="sm-light">{{ $t('transactionsUser.quantity') }}</span>
            <span class="b-bold text-success">+$0.00</span>
          </div>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('transactionsUser.type') }}</span>
          <span class="b-medium">Type 000</span>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('transactionsUser.date') }}</span>
          <span class="b-medium">Febrero 23 2023</span>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('transactionsUser.state') }}</span>
          <span class="b-medium">En proceso</span>
        </div>
        <i class="b7-arrow-down"></i>
      </div>
      <div class="divider"></div>
      <b-collapse id="collapse-2" class="">
        <div class="d-flex">
          <div class="item d-flex flex-column w-50">
            <span class="sm-light">{{ $t('transactionsUser.from') }}</span>
            <span class="b-medium">{{ $t('transactionsUser.from') }}</span>
          </div>
          <div class="item d-flex flex-column w-50">
            <span class="sm-light">{{ $t('transactionsUser.to') }}</span>
            <span class="b-medium">{{ $t('transactionsUser.to') }}</span>
          </div>
        </div>
      </b-collapse>
    </div>
    <div class="tab">
      <div v-b-toggle.collapse-3 class="movement">
        <div class="item-flex">
          <img :src="getFile('icons', 'crypto-ico')" alt="" />
          <div class="item">
            <span class="sm-light">{{ $t('transactionsUser.quantity') }}</span>
            <span class="b-bold text-success">+$0.00</span>
          </div>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('transactionsUser.type') }}</span>
          <span class="b-medium">Type 000</span>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('transactionsUser.date') }}</span>
          <span class="b-medium">Febrero 23 2023</span>
        </div>
        <div class="item item-flex">
          <span class="sm-light">{{ $t('transactionsUser.state') }}</span>
          <span class="b-medium">En proceso</span>
        </div>
        <i class="b7-arrow-down"></i>
      </div>
      <div class="divider"></div>
      <b-collapse id="collapse-3" class="">
        <div class="d-flex">
          <div class="item d-flex flex-column w-50">
            <span class="sm-light">{{ $t('transactionsUser.from') }}</span>
            <span class="b-medium">{{ $t('transactionsUser.from') }}</span>
          </div>
          <div class="item d-flex flex-column w-50">
            <span class="sm-light">{{ $t('transactionsUser.to') }}</span>
            <span class="b-medium">{{ $t('transactionsUser.to') }}</span>
          </div>
        </div>
      </b-collapse>
    </div>

    <b-pagination
      align="center"
      v-model="currentPage"
      pills
      :total-rows="rows"
    ></b-pagination>
  </div>
</template>

<script setup>
import { ref } from "vue";
const rows = ref(100);
const currentPage = ref(3);
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

      :first-child {
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
        &-flex {
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

    .movement[aria-expanded="true"] + .divider {
      display: block;
    }
  }
}
</style>
