<template>
    <div class="relative">
        <DetailIntro :product="page" />
        <DetailInfo :product="page" />
        <DetailHistory :product="page" />
        <DetailValueSeed />
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
    async asyncData ({ $prismic, params, store }) {
        console.log('hola page', params)
        const page = await $prismic.api.getByUID('soja', params.uid)
        console.log('hola page', page)
       
        return {
            page
        }
    },
    data () {
        return {  }
    },
    head () {
    
    }
}
</script>
  