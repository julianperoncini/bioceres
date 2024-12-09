<template>
    <div class="relative">
        <ProductsHero />
        <ProductsListProducts />
        <ProductsValueSeed />
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
}
</script>

<style lang="scss" scoped></style>