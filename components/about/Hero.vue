<template>
    <div class="relative">
        <div class="relative overflow-hidden s:overflow-visible">
            <section class="relative h-screen s:h-[150dvh]">
                <div class="absolute inset-0 z-1">
                    <figure class="relative w-full h-full">
                        <img class="relative w-full h-full object-cover" src="detail-hero-mask.jpg" alt="Product Detail">
                    </figure>
                </div>
                
                <div class="relative w-full h-full s:h-screen flex items-center">
                    <div class="relative mt-[-12rem] s:mt-0 pl-20 s:pl-240 z-3">
                        <div class="relative pb-50 js-t-fades">
                            <h1 class="mont font-medium relative text-[#3FADE1] text-50 leading-[1.1] tracking-[-2px]">
                                <span class="block">Todo empieza</span>
                                <span class="block">con <strong class="mont font-extrabold">una semilla</strong></span>
                            </h1>
                        </div>

                        <div class="relative js-t-fades">
                            <ButtonArrow color="lightblueTransparent" label="Mirá nuestro video" />
                        </div>
                    </div>
                </div>

                <div class="block s:hidden absolute top-[58rem] s:top-180 -right-60 z-10 pointer-events-none">
                    <figure class="w-[40rem] s:w-[83rem] h-[25rem] s:h-[66rem] js-t-fades">
                        <img class="w-full h-full object-contain select-none pointer-events-none" src="about-hand.png" alt="Bioceres Nosotros">
                    </figure>

                    <figure class="go-down-up absolute top-[-5rem] s:top-[0rem] left-[10rem] s:left-[25rem] w-[3.5rem] s:w-[4.5rem] h-[3.5rem] s:h-[4.5rem]">
                        <img class="w-full h-full object-contain select-none pointer-events-none" src="bean.png" alt="Bioceres Nosotros">
                    </figure>
                </div>
            </section>

            <section class="relative px-20 s:px-240 pb-100 s:pb-140">
                <div class="relative pt-100 s:pt-200 pb-50 s:pb-100 flex flex-col s:flex-row items-center justify-between">
                    <div class="relative pb-30 s:pb-0 max-w-full s:max-w-[50rem] w-full">
                        <h2 class="mont font-semibold text-[#A0C344] text-45 leading-none tracking-[-1.8px] pb-20 js-s-lines">Bioceres fue <br> fundada en 2001</h2>
                        <p class="inter font-normal text-[#25284A] text-18 leading-[1.35] tracking-[-0.72px] js-s-fade">
                            En un salón prestado en la Bolsa de Comercio de Rosario. La compañía surgió gracias a la iniciativa de <strong class="font-bold">23 productores agropecuarios,</strong> muchos de los cuales eran miembros de Aapresid, frente a la necesidad de encontrar respuestas que contrarrestaran la erosión y el deterioro que los suelos sufrían debido a la intensificación de la actividad.
                        </p>
                    </div>

                    <div class="relative block s:hidden js-s-fade">
                        <svg class="w-full s:w-[37rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 373.529 441.332">
                            <path d="M128.4,131.366c43.511-17.167,96.437-20.743,179.291-60.795l-2.388,173.8c.954,44.345-21.456,83.921-55.668,107.165C218.4,368.11,116.477,389.331,117.19,292.653c.479-73.314,110.624-111.816,110.624-111.816S77.855,171.418,69.866,309.224C35.532,248.667,49.482,162.479,128.4,131.366M357.392,0l-.355.238C274.784,38.264,188.12,53.526,110.518,82.371-70.2,149.484-16.556,422.352,179.181,425.332c112.649.355,185.005-97.87,177.616-194.19.479,5.243.717,10.49.717,15.975V0Z" transform="translate(8.016 8)" fill="#f9f9f9" stroke="#fff" stroke-width="16"/>
                        </svg>
                    </div>
                </div>
            </section>

            <!-- Sticky product bag overlay -->
            <div class="hidden s:block absolute top-0 s:right-[-7rem] h-full z-10">
                <div class="s:sticky s:top-0 s:h-screen flex items-center justify-center js-t-fades">
                    <figure class="relative top-150 w-[40rem] s:w-[83rem] h-[25rem] s:h-[66rem] js-t-fades">
                        <img class="w-full h-full object-contain select-none pointer-events-none" src="about-hand.png" alt="Bioceres Nosotros">
                    </figure>

                    <figure 
                        ref="seed"
                        :style="seedStyle"
                        class="absolute top-[-5rem] s:top-[20rem] left-[10rem] s:left-[24rem] w-[3.5rem] s:w-[4.5rem] h-[3.5rem] s:h-[4.5rem] transition-transform duration-300">
                        <img class="go-down-up w-full h-full object-contain select-none pointer-events-none" 
                                src="bean.png" 
                                alt="Bioceres Nosotros">
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollPosition: 0,
            windowWidth: 0,
            seedStyle: {
                transform: 'translate(0, 0) scale(1)'
            }
        }
    },

    mounted() {
        if(window.innerWidth < 900) return

        this.windowWidth = window.innerWidth

        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleResize)

        this.$nextTick(() => {
            this.handleScroll()
        })
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleResize)
    },

    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth
            this.handleScroll()
        },

        getResponsiveValues() {
            const isMobile = this.windowWidth < 768
            
            return {
                translateX: isMobile ? -15 : 10,
                translateY: isMobile ? 150 : 300,
                scale: isMobile ? 0.3 : 0.4
            }
        },

        handleScroll() {
            const section = this.$el.querySelector('section')
            if (!section) return

            const sectionHeight = section.offsetHeight
            const scrollPos = window.pageYOffset
            const scrollProgress = Math.min(Math.max(scrollPos / sectionHeight, 0), 1)

            const { translateX, translateY, scale } = this.getResponsiveValues()

            const finalTranslateX = -scrollProgress * translateX
            const finalTranslateY = scrollProgress * translateY
            const finalScale = 1 + (scrollProgress * scale)

            requestAnimationFrame(() => {
                this.seedStyle = {
                    transform: `translate(${finalTranslateX}px, ${finalTranslateY}px) scale(${finalScale})`,
                    transition: 'transform 0.3s ease-out'
                }
            })
        }
    }
}
</script>

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

.go-down-up { 
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