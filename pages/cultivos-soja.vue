<template>
    <div class="relative">
        <ProductsHero @category-changed="updateCategory" :options="madurez" :type="`Soja`"  />
        <ProductsListProducts :category="currentCategory" :posts="soja" :type="`soja`" />
        <ProductsValueSeed />
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
    async asyncData({$prismic}){
        const posts = await $prismic.api.query(
        $prismic.predicates.at(
          "document.type",
          "soja",
        ),
      );
      console.log(posts.results)
        return {
            soja: posts.results
        }
    },
    data() {
        return {
            currentCategory: 'all',
            madurez:[
                '3 corto',
                '3 medio',
                '3 largo',
                '4 corto',
                '4 medio',
                '4 largo',
                '5 corto',
                '5 medio',
                '5 largo'
            ]
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