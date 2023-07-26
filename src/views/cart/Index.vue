<template>
    <main>
        <b-button variant="transparent" class="b-light" @click="$emit('back')"><i class="b7-back"></i> Regresar</b-button>
        <section class="d-flex justify-content-center">
            <!-- Purchase: select payment method -->
            <div class="purchase-box" v-if="step === 1">
                <div class="purchase-header">
                    <h2 class="h2-bold">Compra</h2>
                    <img :src="getFile('images', 'logo', 'webp')" alt="" />
                </div>
                <div class="purchase-content d-flex flex-column">
                    <div>
                        <h4 class="h4-semibold">Seleccionar tiempo</h4>
                    </div>
                    <!-- Radio buttons -->

                    <section class="time">
                        <div class="time__grid">
                            <label class="time__card click" :class="form.months == month.time ? 'bg-secondary' : ''"
                                v-for="month in months" :key="month.month" @click="selectMontht(month.time, month.min)">
                                <div class="time__logo">
                                    <img :src="getFile('images', 'brand', 'png')" alt="" />
                                    <p class="time__value">{{ month.time }}M</p>
                                </div>
                                <div class="time__card-radio">
                                    <div class="time__card-box w-100">
                                        <h4 class="h4-semibold">{{ month.name }}</h4>
                                        <div class="time__card-grid">
                                            <h5 class="h5-regular">Profit</h5>
                                            <h4 class="h4-bold">{{ month.percentage }}%</h4>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </section>
                    <div class="purchase-buttons d-flex justify-content-end mt-3">
                        <b-button variant="outline-primary">Cancelar</b-button>
                        <b-button variant="primary" :disabled="form.months == null" @click="step = 2">Confirmar
                            compra</b-button>
                    </div>
                </div>
            </div>
            <!-- Purchase: select payment method -->
            <div class="purchase-box" v-if="step === 2">
                <div class="purchase-header">
                    <h2 class="h2-bold">Compra</h2>
                    <img :src="getFile('images', 'logo', 'webp')" alt="" />
                </div>
                <div class="purchase-content d-flex flex-column">
                    <div>
                        <h4 class="h4-semibold">Método de pago</h4>
                    </div>
                    <div class="item d-flex justify-content-between align-items-center click"
                        :class="form.payment_method == payment.key ? 'bg-secondary' : ''"
                        @click="form.payment_method = payment.key" v-for="payment in payment_methods" :key="payment.key">
                        <img :src="getFile('images/tokens', payment.image, 'png')" alt="" />
                        <div class="d-flex flex-column mr-auto">
                            <span class="h6-medium">{{ payment.name }}</span>
                            <span class="l-light">{{ payment.detail }}</span>
                        </div>
                        <i class="b7-arrow-down"></i>
                    </div>
                    <div class="purchase-buttons d-flex justify-content-end mt-3">
                        <b-button variant="outline-primary">Cancelar</b-button>
                        <b-button :disabled="form.payment_method == null" variant="primary" @click="onSubmit()">Confirmar
                            compra</b-button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
    props: ['id', 'price'],
    data() {
        return {
            step: 1,
            form: {
                model_id: null,
                price: null,
                payment_method: null,
                model: null,
                title: null,
                months: null
            },
            months: [
                {
                    time: 1,
                    name: 'One Months',
                    percentage: 12,
                    min: 50000
                },
                {
                    time: 3,
                    name: 'Three Months',
                    percentage: 12,
                    min: 0
                },
                {
                    time: 6,
                    name: 'Six Months',
                    percentage: 12,
                    min: 0
                },
                {
                    time: 12,
                    name: 'Twuelve Months',
                    percentage: 12,
                    min: 0
                },
            ],
            payment_methods: [
                {
                    name: 'USDT',
                    key: 'usdtt',
                    image: 'usdt',
                    detail: 'USDT TRC20'
                },
                {
                    name: 'B7T',
                    key: 'bta',
                    image: 'bta',
                    detail: 'Binance Smart Chain'
                },
            ]
        }
    },
    methods: {
        ...mapActions("cart", ["storeCart"]),
        onSubmit() {
            this.loading = true;
            this.storeCart(this.form).then((response) => {
                this.loading = false;
                openNotification();
                this.$router.push({ name: "Purchase-Pay", params: { id: response.id } });
            });
        },
        selectMontht(months, min) {
            if (this.form.price >= min) {
                this.form.months = months;
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.purchase-box {
    width: 45%;
    min-width: 890px;
    background: #2a2b3d;
    border-radius: 24px;
    overflow: hidden;

    @media (max-width: 1100px) {
        min-width: unset;
        width: 100%;
    }

    .purchase-header {
        background: url(../../../assets/images/bg-header-modal.webp);
        padding: 3.25rem 2.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-size: cover;
        background-position: center bottom;

        img {
            height: 4rem;
        }
    }

    .purchase-content {
        padding: 24px;
        gap: 24px;

        .item {
            gap: 16px;
            padding: 16px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.05);

            img {
                width: 40px;
                height: 40px;
            }

            .l-light {
                color: #b5c2d7;
            }

            i {
                border-radius: 6.25rem;
                background: rgba(255, 255, 255, 0.1);
                padding: 8px;
                font-size: 16px;
                transform: rotate(-90deg);
            }
        }

        .purchase-buttons {
            gap: 16px;
        }

        i.b7-done {
            color: #48a254;
            font-size: 78px;
        }
    }
}

.time {
    display: grid;
    gap: 3.2rem;

    &__logo {
        width: 10rem;
        margin: 0 auto;
        position: relative;
    }

    &__btns {
        display: flex;
        justify-content: flex-end;
    }

    &__value {
        position: absolute;
        font-size: 15px;
        font-style: italic;
        font-weight: 900;
        line-height: 21px;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2.4rem;

        @media (max-width: 650px) {
            grid-template-columns: 1fr;
        }
    }

    &__card {
        display: flex;
        padding: 24px;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        flex: 1 0 0;
        border-radius: 24px;
        border: 1px solid var(--brand-border, rgba(255, 255, 255, 0.2));

        &-radio {
            display: flex;
            align-items: center;
            gap: 2.4rem;
            width: 100%;
        }

        &-grid {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>
  