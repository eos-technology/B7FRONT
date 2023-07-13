<template>
    <div class="accordion" role="tablist">
        <div class="tab">
            <div v-b-toggle.collapse-1 class="movement flex-wrap">
                <div>
                    <img :src="getFile('images', 'crypto-ico', 'png')" alt="">
                    <div class="item">
                        <span class="sm-light">Quantity</span>
                        <span class="b-bold">+$0.00</span>
                    </div>
                </div>
                <div class="item">
                    <span class="sm-light">Fecha</span>
                    <span class="b-medium">Febrero 23 2023</span>
                </div>
                <div class="item">
                    <span class="sm-light">Estado</span>
                    <span class="b-medium">En proceso</span>
                </div>
                <i class="b7-arrow-down"></i>
            </div>
            <div class="divider"></div>
            <b-collapse visible id="collapse-1" class="">
                <div class="d-flex">
                    <div class="item d-flex flex-column w-50">
                        <span class="sm-light">From</span>
                        <span class="b-medium">From</span>
                    </div>
                    <div class="item d-flex flex-column w-50">
                        <span class="sm-light">To</span>
                        <span class="b-medium">To</span>
                    </div>
                </div>
            </b-collapse>
        </div>


    </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.accordion {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .tab {
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        background: rgba(255, 255, 255, 0.10);
        padding: 1rem;
        gap: 0.5rem;


        .movement {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
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

        .movement[aria-expanded="true"]+.divider {
            display: block;
        }
    }
}
</style>
