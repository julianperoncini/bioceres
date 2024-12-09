<template>
    <div class="relative">
        <div class="relative">
            <AsesorHero />
            <AsesorContent />
            <AsesorValueSeed />
        </div>
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
}
</script>

<style lang="scss" scoped></style>