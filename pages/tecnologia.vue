<template>
    <div class="relative">
        <TecHero />
        <TecInfo />
        <TecMap />
        <TecDiscover />
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
}
</script>

<style lang="scss" scoped></style>