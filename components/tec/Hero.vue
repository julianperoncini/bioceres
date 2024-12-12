<template>
    <div class="relative w-full h-full h-screen">
        <div class="relative w-full h-full">
            <figure class="relative w-full h-full z-2">
                <div class="overlay"></div>
                <img class="relative z-1 w-full h-full object-cover" src="hero-home.jpg" alt="Bioceres">
            </figure>

            <div class="z-3 px-20 s:px-240 w-full s:w-[inherit] flex flex-col items-center s:items-start absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
                <h1 class="mont text-center s:text-left font-semibold text-40 s:text-50 leading-none tracking-[-2px] js-t-fades">
                    Tecnología diseñada <br>
                    para los <strong class="mont font-extrabold">desafíos</strong> <br>
                    <strong class="mont font-extrabold">climáticos del futuro.</strong>
                </h1>

                <div class="relative mt-40 js-t-fades">
                    <ButtonArrow color="transparent" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
    opacity: 0.42;
    background-color: #636363;
    z-index: 2;
}
</style>