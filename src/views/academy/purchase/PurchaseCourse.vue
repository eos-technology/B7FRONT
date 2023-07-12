<template>
    <main>
        <b-button variant="transparent" class="b-light" @click="$emit('back')"><i class="b7-back"></i> Regresar</b-button>
        <section class="d-flex justify-content-center">
            <!-- Purchase: select payment method -->
            <div class="purchase-box" v-if="purchaseStep === 1">
                <div class="purchase-header">
                    <h2 class="h2-bold">Compra</h2>
                    <img :src="getFile('images', 'logo', 'webp')" alt="" />
                </div>
                <div class="purchase-content d-flex flex-column">
                    <div>
                        <h4 class="h4-semibold">Método de pago</h4>
                        <p class="b-regular">1USD = 1B7T. Send to the wallet the amount equivalent to B7T that you want to
                            receive</p>
                    </div>
                    <div class="item d-flex justify-content-between align-items-center">
                        <img :src="getFile('images', 'crypto-ico', 'png')" alt="">
                        <div class="d-flex flex-column mr-auto">
                            <span class="h6-medium">Tether</span>
                            <span class="l-light">USDT</span>
                        </div>
                        <i class="b7-arrow-down"></i>
                    </div>
                    <div class="item d-flex justify-content-between align-items-center">
                        <img :src="getFile('images', 'crypto-ico', 'png')" alt="">
                        <div class="d-flex flex-column mr-auto">
                            <span class="h6-medium">B7</span>
                            <span class="l-light">B7T</span>
                        </div>
                        <i class="b7-arrow-down"></i>
                    </div>
                    <div class="purchase-buttons d-flex justify-content-end mt-3">
                        <b-button variant="outline-primary">Cancelar</b-button>
                        <b-button variant="primary" @click="purchaseStep = 2">Confirmar compra</b-button>
                    </div>
                </div>
            </div>
            <!-- Purchase: payment QR -->
            <div class="purchase-box" v-if="purchaseStep === 2">
                <div class="purchase-header">
                    <h2 class="h2-bold">Payment</h2>
                    <img :src="getFile('images', 'logo', 'webp')" alt="" />
                </div>
                <div class="purchase-content d-flex flex-column align-items-center">
                    <div>
                        <h2 class="h2-semibold">Payment address</h2>
                    </div>
                    <img :src="getFile('images', 'qr', 'svg')" alt="" />
                    <div>
                        <p class="b-regular">Quantity</p>
                        <p class="h6-regular">0 USD</p>
                    </div>
                    <div class="d-flex flex-column align-content-center">
                        <span class="b-regular text-center">Wallet Address</span>
                        <span class="h6-regular text-center">TQerdfbNi7SyfTzs6PSgesHjZqL1NVQm5X</span>
                        <b-button variant="transparent" class="text-primary">Copy Wallet</b-button>
                    </div>
                    <div class="purchase-buttons d-flex justify-content-end mt-3 align-self-end">
                        <b-button variant="outline-primary">Cancelar</b-button>
                        <b-button variant="primary" @click="purchaseStep = 3">Verify payment</b-button>
                    </div>
                </div>
            </div>
            <!-- Purchase: successful -->
            <div class="purchase-box" v-if="purchaseStep === 3">
                <div class="purchase-header">
                    <h2 class="h2-bold">Compra</h2>
                    <img :src="getFile('images', 'logo', 'webp')" alt="" />
                </div>
                <div class="purchase-content d-flex flex-column align-items-center">
                    <i class="b7-done"></i>
                    <div>
                        <p class="b-regular text-center">Compra exitosa</p>
                        <p class="h6-regular text-center">La compra de la membresía ha sido exitosa.</p>
                    </div>
                    <div class="purchase-buttons d-flex justify-content-end mt-3 align-self-end">
                        <b-button variant="outline-primary">Cancelar</b-button>
                        <b-button variant="primary" @click="$emit('back')">Seguir comprando</b-button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
import { ref } from 'vue';
defineEmits('back')
let purchaseStep = ref(1);
</script>
<style lang="scss" scoped>
.purchase-box {
    width: 45%;
    min-width: 300px;
    background: #2A2B3D;
    border-radius: 24px;
    overflow: hidden;

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
                color: #B5C2D7;
            }

            i {
                border-radius: 6.25rem;
                background: rgba(255, 255, 255, 0.10);
                padding: 8px;
                font-size: 16px;
                transform: rotate(-90deg);
            }
        }

        .purchase-buttons {
            gap: 16px;
        }

        i.b7-done {
            color: #48A254;
            font-size: 78px;
        }
    }
}
</style>