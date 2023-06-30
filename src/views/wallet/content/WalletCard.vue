<template>
    <div class="accordion" role="tablist">
        <div class="tab">
            <div v-b-toggle.wallet-detail class="wallet">
                <div>
                    <img :src="getFile('images', 'crypto-ico', 'png')" alt="">
                    <div class="item">
                        <span class="sm-light">Wallet Tether</span>
                        <span class="b-medium">0xbnas8sas0fasdj1a5slkasd4k1</span>
                    </div>
                </div>
                <i class="b7-arrow-down"></i>
            </div>
            <div class="divider"></div>
            <b-collapse visible id="wallet-detail" class="wallet-detail">
                <div class="d-flex">
                    <div class="item d-flex flex-column">
                        <span class="l-light">Saldo disponible</span>
                        <h4 class="h4-bold text-primary">16,540.83</h4>
                    </div>
                    <b-button pill variant="outline-primary" size="sm" @click="$emit('openReceiveModal')">Enviar</b-button>
                    <b-button pill variant="primary" size="sm" @click="$emit('openwithdrawModal')">Retirar</b-button>
                </div>
            </b-collapse>
        </div>


    </div>
</template>
<script setup>
defineEmits(['openwithdrawModal', 'openReceiveModal'])
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
        background: rgba(255, 255, 255, 0.05);
        ;
        padding: 1rem;
        gap: 0.5rem;


        .wallet {
            display: flex;
            justify-content: space-between;
            gap: 4.5rem;
            align-items: center;

            :first-child {
                display: flex;
                align-items: center;
                gap: 1rem;

                img {
                    width: 32px;
                }

                .b-bold {
                    color: #48A254;
                }
            }

            .item {
                display: flex;
                flex-direction: column;
                gap: 0;

                .sm-light {
                    color: #B5C2D7;
                }
            }

            i {
                padding: 0.5rem;
                border-radius: 100px;
                background: rgba(255, 255, 255, 0.10);
            }
        }

        .divider {
            height: 1px;
            width: 100%;
            background: rgba(255, 255, 255, 0.2);
            opacity: 0.2;
            display: none;
        }

        .wallet[aria-expanded="true"]+.divider {
            display: block;
        }

        .wallet-detail>div {
            gap: 1rem;
            align-items: center;

            .item {
                margin-right: auto;
            }

            .btn-sm.btn-primary {
                background: #EE8722;
            }

            .btn-sm.btn-outline-primary {
                background: none;
                border: 1px solid #EE8722;

                &:hover {
                    color: white;
                }
            }
        }
    }
}
</style>
