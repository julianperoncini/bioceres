<template>
    <div class="relative">
        <EntrenaHero />
        <EntrenaWhy />
        <EntrenaProfile />
        <EntrenaRecommendations />
        <EntrenaHistory />
        <EntrenaValueSeed />
    </div>
</template>

<script>
import Page from '~/mixins/Page'

export default {
    mixins: [Page],
}
</script>

<style lang="scss" scoped></style>