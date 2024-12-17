<template>
    <div class="relative">
        <ProductsHero @category-changed="updateCategory" />
        <ProductsListProducts :category="currentCategory" />
        <ProductsValueSeed />
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],

    data() {
        return {
            currentCategory: 'all'
        }
    },
    methods: {
        updateCategory(category) {
            this.currentCategory = category
        }
    }
}
</script>

<style lang="scss" scoped></style>