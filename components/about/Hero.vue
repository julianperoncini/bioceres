<template>
    <div class="relative">
        <div class="relative overflow-hidden">
            <section class="relative h-screen">
                <div class="absolute inset-0 z-1">
                    <figure class="relative w-full h-full">
                        <img class="relative w-full h-full object-cover" src="detail-hero-mask.jpg" alt="Product Detail">
                    </figure>
                </div>
                
                <div class="relative w-full h-full flex items-center">
                    <div class="relative pl-20 s:pl-240 z-3">
                        <div class="relative pb-50 js-t-fades">
                            <h1 class="mont font-medium relative text-[#3FADE1] text-50 leading-[1.1] tracking-[-2px]">
                                <span class="block">Todo empieza</span>
                                <span class="block">con <strong class="mont font-extrabold">una semilla</strong></span>
                            </h1>
                        </div>

                        <div class="relative js-t-fades">
                            <ButtonArrow color="lightblue" label="Mirá nuestro video" />
                        </div>
                    </div>
                </div>

                <div class="absolute top-[58rem] s:top-180 -right-60 z-10 pointer-events-none">
                    <figure class="w-[40rem] s:w-[83rem] h-[25rem] s:h-[66rem] js-t-fades">
                        <img class="w-full h-full object-contain select-none pointer-events-none" src="about-hand.png" alt="Bioceres Nosotros">
                    </figure>

                    <figure class="go-down-up absolute top-[0rem] left-[25rem] w-[4.5rem] h-[4.5rem]">
                        <img class="w-full h-full object-contain select-none pointer-events-none" src="bean.png" alt="Bioceres Nosotros">
                    </figure>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.overlay {
    background: rgba(0, 0, 0, 0.18);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}

.go-down-up{ 
    animation: go-down-up 1.85s infinite;
}

@keyframes go-down-up {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(1rem);
    }
}
</style>