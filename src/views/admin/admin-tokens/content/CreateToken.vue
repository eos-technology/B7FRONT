<template>
    <section class="add-token">
        <h3 class="h3-medium">Crear token</h3>
        <div class="token-form ">
            <div class="field">
                <label for="" class="l-medium">Inicia <span>*</span></label>
                <b-form-input id="" type="date"></b-form-input>
            </div>
            <div class="field">
                <label for="" class="l-medium">Hasta <span>*</span></label>
                <b-form-input id="" type="date"></b-form-input>
            </div>
            <div class="field">
                <label for="" class="l-medium">Maxima venta <span>*</span></label>
                <b-form-input id="" type="text"></b-form-input>
            </div>
            <div class="field">
                <label for="" class="l-medium">Precio USD <span>*</span></label>
                <b-form-input id="" type="number"></b-form-input>
            </div>
            <b-form-radio v-model="enable" :aria-describedby="ariaDescribedby" name="habilitar-token" value="A">
                <p class="l-medium">Habilitar</p>
            </b-form-radio>
            <b-form-radio v-model="enable" :aria-describedby="ariaDescribedby" name="habilitar-token" value="B">
                <p class="l-medium">No habilitar</p>
            </b-form-radio>

        </div>

        <div class="form__btns d-flex justify-content-end">
            <b-button variant="outline">Cancelar</b-button>
            <b-button variant="primary" @click="isOpen = true">Crear</b-button>
        </div>
    </section>

    <section class="root">
        <teleport to="body">
            <div class="modal" v-if="isOpen">
                <div class="modal__body" @click="isOpen = false">
                    <img class="modal__body-img" :src="getFile('images', 'auth', 'webp')" alt="" />
                    <h3 class="h3-medium text-center">
                        ¡Se ha creado nuevo token éxitosamente!
                    </h3>
                </div>
            </div>
        </teleport>
    </section>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

let enable = ref('')

</script>

<style lang="scss" scoped>
.add-token {
    padding: 2.4rem;
    display: grid;
    gap: 4.8rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.05);

    @media (max-width: 720px) {
        padding: 1.2rem;
    }
}

.token-form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    grid-gap: 2.6rem 1.6rem;

    label {
        color: #9BA3AE;

        span {
            color: #EF4444;
        }
    }

    .form-check {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        gap: 0.5rem;

        input,
        .form-check-input {
            margin: 0 !important;
        }
    }
}

.form-check-input,
input[type="radio"] {
    margin: 0 !important;
}
</style>
