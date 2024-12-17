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
                    <button @click="scrollToSection" type="button" class="btn relative h-[4.8rem] flex items-center inter font-medium text-16 leading-none tracking-[-0.64px] is-transparent">
                        <span class="btn-text flex items-center justify-center h-full px-40 rounded-[2.4rem] border-[0.2rem] border-solid">Descubrí cómo acá</span>
                        <span class="btn-arrow flex items-center justify-center w-[4.8rem] h-full bg-transparent rounded-full border-[0.2rem] border-solid border-[#B5DC4D]">
                            <svg class="w-[1.8rem] h-auto" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.49967 6.76172L16.0243 6.76243M1.49967 6.76172L6.36173 11.6238M1.49967 6.76172L6.36173 1.90107" stroke="#B5DC4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        scrollToSection() {
            const section = document.querySelector('.js-section-tec-2');
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
</script>

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

.is-transparent {
    .btn-text {
        border-color: #fff;
        background-color: transparent;
        transition: all .4s cubic-bezier(0.075, 0.820, 0.165, 1.000);
        color: white;
    }

    .btn-arrow {
        border-color: #fff;
        background-color: transparent;
        transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);

        svg {
            path {
                transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);
                stroke: #fff;
            }
        }
    }

    &:hover {
        .btn-text {
            padding: 0rem 5.2rem;
            border-color: #3FADE1;
            background-color: #3FADE1;
        }

        .btn-arrow {
            border-color: #B5DC4D;
            background-color: #B5DC4D;
            transform: rotate(180deg);

            svg {
                path {
                    stroke: #fff
                }
            }
        }
    }
}
</style>