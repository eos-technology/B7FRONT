<template>
    <div class="aside">
        <h6 class="h6-medium">Contenido</h6>
        <div class="accordion" role="tablist">
            <div v-b-toggle.collapse-1 class="category">
                <p class="l-medium">U1: Categoría</p>
                <i class="b7-arrow-down"></i>
            </div>
            <b-collapse visible id="collapse-1" class="collapse">
                <div class="unit">
                    <b-form-checkbox id="checkbox-1" name="checkbox-1">
                        <p class="l-light">Nombre</p>
                        <div class="duration">
                            <i class="b7-play text-primary"></i>
                            <span class="xs-light">3min</span>
                        </div>
                    </b-form-checkbox>
                </div>
                <div class="unit">
                    <b-form-checkbox id="checkbox-1" name="checkbox-1">
                        <p class="l-light">Nombre</p>
                        <div class="duration">
                            <i class="b7-play text-primary"></i>
                            <span class="xs-light">3min</span>
                        </div>
                    </b-form-checkbox>
                </div>
            </b-collapse>
            <div v-b-toggle.collapse-2 class="category">
                <p class="l-medium">U1: Categoría</p>
                <i class="b7-arrow-down"></i>
            </div>
            <b-collapse id="collapse-2" class="collapse">
                <div class="unit">
                    <b-form-checkbox id="checkbox-1" name="checkbox-1">
                        <p class="l-light">Nombre</p>
                        <div class="duration">
                            <i class="b7-play text-primary"></i>
                            <span class="xs-light">3min</span>
                        </div>
                    </b-form-checkbox>
                </div>
                <div class="unit">
                    <b-form-checkbox id="checkbox-1" name="checkbox-1">
                        <p class="l-light">Nombre</p>
                        <div class="duration">
                            <i class="b7-play text-primary"></i>
                            <span class="xs-light">3min</span>
                        </div>
                    </b-form-checkbox>
                </div>
            </b-collapse>

        </div>
    </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.aside {
    width: 33%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .accordion {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .category {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.05);

        }

        .collapse {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .unit {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 0.5rem 1rem;
                border-radius: 1rem;

                &:hover {
                    background: rgba(255, 255, 255, 0.05);
                }

                .form-check {
                    display: flex;
                    gap: 1rem;
                    align-items: center;

                    label {
                        display: flex;
                        flex-direction: column;
                        gap: 0.125rem;

                        .duration {
                            display: flex;
                            gap: 0.25rem;
                            align-items: center;

                            i {
                                font-size: 1rem;
                            }
                        }
                    }


                }
            }
        }
    }
}
</style>
