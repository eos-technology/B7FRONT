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
          <BAccordionItem class="text-black" title="Categoría">
            <div class="type__box check text-black">
              <p class="sm-regular">{{ $t("filter.category") }}</p>
              <b-form-checkbox
                id="checkbox-1"
                v-model="form.balance"
                name="checkbox-1"
                value="1"
                unchecked-value="0"
              >
              </b-form-checkbox>
            </div>
            <div class="type__box check text-black">
              <p class="sm-regular">{{ $t("filter.category") }}</p>
              <b-form-checkbox
                id="checkbox-2"
                v-model="form.balance"
                name="checkbox-2"
                value="2"
                unchecked-value="0"
              >
              </b-form-checkbox>
            </div>
            <div class="type__box check text-black">
              <p class="sm-regular">{{ $t("filter.category") }}</p>
              <b-form-checkbox
                id="checkbox-3"
                v-model="form.balance"
                name="checkbox-3"
                value="3"
                unchecked-value="0"
              >
              </b-form-checkbox>
            </div>
            <div class="type__box check text-black">
              <p class="sm-regular">{{ $t("filter.category") }}</p>
              <b-form-checkbox
                id="checkbox-4"
                v-model="form.balance"
                name="checkbox-4"
                value="4"
                unchecked-value="0"
              >
              </b-form-checkbox>
            </div>
            <div class="type__box check text-black">
              <p class="sm-regular">{{ $t("filter.category") }}</p>
              <b-form-checkbox
                id="checkbox-5"
                v-model="form.balance"
                name="checkbox-5"
                value="5"
                unchecked-value="0"
              >
              </b-form-checkbox>
            </div>
            <div class="type__box check text-black">
              <p class="sm-regular">{{ $t("filter.category") }}</p>
              <b-form-checkbox
                id="checkbox-6"
                v-model="form.balance"
                name="checkbox-6"
                value="6"
                unchecked-value="0"
              >
              </b-form-checkbox>
            </div>
          </BAccordionItem>
        </BAccordion>
        <!-- Type -->
        <!-- <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button
              block
              v-b-toggle.accordion-1
              class="btn-accordion"
              @click="arrowRotated = !arrowRotated"
            >
              <p class="l-medium menu__option--text">
                {{ $t("filter.category") }}
              </p>
              <i class="b7-arrow-down arrow" :class="{ rotate: showMenu }"></i>
            </b-button>
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text>
                <div class="type__box check text-black">
                  <p class="sm-regular">{{ $t("filter.category") }}</p>
                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="form.balance"
                    name="checkbox-1"
                    value="1"
                    unchecked-value="0"
                  >
                  </b-form-checkbox>
                </div>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card> -->

        <!-- <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="outline" @click="arrowRotated = !arrowRotated">
              <h5 class="h5-medium-l menu__option--text">{{ $t('filter.validation') }}</h5>
              <i class="b7-arrow-down arrow" :class="{ rotate: showMenu }"></i>
            </b-button>
          </b-card-header>
          <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <div class="type__box check">
                  <b-form-checkbox id="checkbox-2" v-model="form.verified" name="checkbox-2" value="1"
                    unchecked-value="0">
                    {{ $t('filter.verificate') }}
                  </b-form-checkbox>
                </div>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card> -->
        <div class="type__footer">
          <b-button variant="outline" class="text-black">{{
            $t("globals.cancel")
          }}</b-button>
          <b-button variant="primary">{{ $t("globals.save") }}</b-button>

          <BaseButton @click="onSave()" :label="$t('filter.save')" class="w" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      showMenu: false,
      arrowRotated: true,
      arrowRotated1: false,
      arrowRotated2: false,
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
};
</script>

<style lang="scss" scoped>
.filter {
  position: relative;

  &__btn {
    background: transparent;
    color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px 16px;
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
    z-index: 2;
    border: 1px solid rgba(35, 57, 99, 0.05);
    background-color: #ffffff;
    box-shadow: 0px 4px 6px -4px rgba(16, 24, 40, 0.1),
      0px 10px 15px -3px rgba(16, 24, 40, 0.1);
    border-radius: 16px;

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

.check{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

<style></style>
