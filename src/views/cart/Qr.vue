<template>
    <main>
        <b-button variant="transparent" class="b-light" @click="$emit('back')"><i class="b7-back"></i> Regresar</b-button>
        <section class="d-flex justify-content-center">
            <!-- Purchase: payment QR -->
            <div class="purchase-box" v-if="step === 1">
                <div class="purchase-header">
                    <h2 class="h2-bold">Payment</h2>
                    <img :src="getFile('images', 'logo', 'webp')" alt="" />
                </div>
                <div class="purchase-content d-flex flex-column align-items-center">
                    <div>
                        <h2 class="h2-semibold">Payment address</h2>
                    </div>
                    <qrcode-vue :value="cart.wallet" size="300" level="M" />
                    <div>
                        <p class="b-regular">Quantity</p>
                        <p class="h6-regular">{{ cart.price }} {{ cart.payment_method }}</p>
                    </div>
                    <div class="d-flex flex-column align-content-center">
                        <span class="b-regular text-center">Wallet Address</span>
                        <span class="h6-regular text-center">{{ cart.wallet }}</span>
                        <b-button variant="transparent" class="text-primary">Copy Wallet</b-button>
                    </div>
                    <div class="purchase-buttons d-flex justify-content-end mt-3 align-self-end">
                        <b-button variant="outline-primary" @click="cancelPayment()">Cancelar</b-button>
                        <b-button variant="primary" @click="confirmPayment()">Verify payment</b-button>
                    </div>
                </div>
            </div>
            <!-- Purchase: successful -->
            <div class="purchase-box" v-if="step === 2">
                <div class="purchase-header">
                    <h2 class="h2-bold">Compra</h2>
                    <img :src="getFile('images', 'logo', 'webp')" alt="" />
                </div>
                <div class="purchase-content d-flex flex-column align-items-center">
                    <i class="b7-done"></i>
                    <div>
                        <p class="b-regular text-center">Compra exitosa</p>
                        <p class="h6-regular text-center">
                            La compra de la membresía ha sido exitosa.
                        </p>
                    </div>
                    <div class="purchase-buttons d-flex justify-content-end mt-3 align-self-end">
                        <b-button variant="primary" @click="$router.push({ name: 'Transactions' })">Ir a compras</b-button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import QrcodeVue from 'qrcode.vue'

import { mapActions, mapState } from 'vuex'
export default {
    props: ['id'],
    components: {
        QrcodeVue
    },
    data() {
        return {
            step: 1,
            loading: false,
            message: null,
            polling: null
        }
    },
    beforeUnmount() {
        clearInterval(this.polling)
    },
    created() {
        this.getData()
    },
    methods: {
        ...mapActions('auth', ['getUserInfo']),
        ...mapActions('cart', ['getCart', 'checkPayment', 'destroyCart']),
        getData() {
            this.loading = true
            this.getCart(this.id).then(() => {
                this.loading = false
            })
        },
        cancelPayment() {
            this.loading = true
            this.destroyCart(this.id).then(() => {
                openNotification('Purchase canceled')
                this.loading = false
                this.$router.push({ name: 'Transactions' })
            })
        },
        confirmPayment() {
            this.loading = true
            this.checkPayment(this.id).then(response => {
                this.message = response
                this.loading = false
                if (response == 'success') {
                    this.getUserInfo()
                    openNotification()
                    this.step = 2
                }
            })
        }
    },
    computed: {
        ...mapState('cart', ['cart'])
    }
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
  