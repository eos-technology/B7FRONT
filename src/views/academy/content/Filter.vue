<template>
  <div class="filter">
    <button class="filter__btn" @click="showMenu = !showMenu">
      <p class="b-light">{{ $t("filter.filter") }}</p>
      <i class="b7-arrow-down arrow" :class="{ rotate: showMenu }"></i>
    </button>
    <div v-if="showMenu" class="menu">
      <div class="menu__header">
        <h5 class="h5-medium text-black">{{ $t("filter.filter") }}</h5>
      </div>
      <div class="accordion" role="tablist">
        <BAccordion free>
          <!-- Category -->
          <BAccordionItem class="text-black" title="Categoría">
            <div class="type__box check text-black" v-for="category in categories" :key="category.id">
              <p class="sm-regular">{{ category.name }}</p>
              <b-form-checkbox id="checkbox-1" name="checkbox-1" value="1" unchecked-value="0" />
            </div>
          </BAccordionItem>
        </BAccordion>
        <div class="type__footer">
          <b-button variant="outline" class="text-black out">{{
            $t("globals.cancel")
          }}</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {},
  data() {
    return {
      showMenu: false,
      form: {
        verified: null,
        balance: null,
      },
    };
  },
  methods: {
    onSave() {
      this.$emit("filter", this.form);
      this.showMenu = false;
    },
  },
  computed: {
    ...mapState('academy', ['categories'])
  }
};
</script>

<style lang="scss" scoped>
.filter {
  position: relative;

  &__btn {
    background: transparent;
    color: #fff;
    border-radius: 16px;
    background: rgba(239, 239, 239, 0.05);
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px;
    outline: none;
  }

  .arrow {
    transition: transform 0.2s ease;
  }

  .rotate {
    transform: rotate(180deg);
  }

  .menu {
    min-width: 300px;
    position: absolute;
    top: 110%;
    right: 0px;
    z-index: 20;
    border: 1px solid rgba(35, 57, 99, 0.05);
    background-color: #ffffff;
    box-shadow: 0px 4px 6px -4px rgba(16, 24, 40, 0.1),
      0px 10px 15px -3px rgba(16, 24, 40, 0.1);
    border-radius: 16px;

    @media (max-width:344px) {
      min-width: 100%;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2.4rem 1.6rem;
      border-bottom: 1px solid rgba(35, 57, 99, 0.05);
    }

    .p-1 {
      padding: 0 !important;
    }

    .card {
      background-color: white;
      overflow: unset;
    }

    .card-body {
      background-color: white;
      border-radius: 0;
    }

    .type__footer {
      display: flex;
      padding: 2.4rem 1.6rem;
      justify-content: center;
      gap: 1.6rem;
    }
  }

  .btn {
    .btn-content {
      width: 100%;
      display: flex !important;
      justify-content: space-between;
      color: #000;
    }
  }

  .btn .btn-content {
    display: flex;
    color: blue;
  }

  .btn-accordion {
    display: block;
    background-color: #fff;
    width: 100%;
    border-radius: 0;
    border: none;
    color: #000;
  }
}

.check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.out {
  padding: 0;
}
</style>
