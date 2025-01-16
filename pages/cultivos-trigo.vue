<template>
    <div class="relative">
        <ProductsHero @category-changed="updateCategory" :options="ciclos" :type="`Trigo`" />
     
        <ProductsListProducts :category="currentCategory" :posts="trigo" :type="`trigo`" />

        <ProductsValueSeed />
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    props: {
        category: {
            type: String,
            default: 'all'
        },
        posts:{
            type: Array,
        },
        type:{
            type: String,
        }
    },
    mixins: [Page],
    async asyncData({$prismic}){
        const posts = await $prismic.api.query(
        $prismic.predicates.at(
          "document.type",
          "trigo",
        ),
      );
      console.log(posts.results)
        return {
            trigo: posts.results
        }
    },
    data() {
        return {
            currentCategory: 'all',
            ciclos:[
                'Largo',
                'Intermedio Largo',
                'Intermedio',
                'Corto'
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