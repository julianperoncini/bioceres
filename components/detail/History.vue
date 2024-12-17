<template>
    <div class="relative">
        <div class="relative py-100 s:py-115 bg-[#fafaf3]">
            <div class="relative px-20 s:px-360">
                <div class="relative pb-50 s:pb-60">
                    <div class="relative pb-20 s:pb-30">
                        <h2 class="mont font-semibold text-40 s:text-45 leading-none tracking-[-1.8px] text-center js-s-fade">
                            Historias reales, <br>
                            <span class="mont font-bold text-[#A0C344]">
                                de clientes reales.
                            </span>
                        </h2>
                    </div>

                    <div class="relative max-w-[30rem] s:max-w-[70rem] mx-auto js-s-fade">
                        <p class="inter font-normal text-center text-20 s:text-26 leading-[1.35] tracking-[-1.04px]">
                            Testimonios y casos de éxito de <span class="inter font-semibold">Trigo TRAFUL HB4</span> en suelos 
                            donde cada semilla importa. <span class="inter font-semibold">Descubrí las experiencias en 
                            primera persona, de nuestros clientes:</span>
                        </p>
                    </div>
                </div>

                <div class="relative grid grid-cols-1 s:grid-cols-3 s:gap-x-30 gap-y-50 s:gap-y-0 px-50 s:px-70 js-s-fade">
                    <div class="card-video relative w-full h-[30rem] rounded-[5rem] overflow-hidden bg-white">
                        <div class="card-video-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img class="w-full h-full object-contain" src="/icon-play-circle.png" alt="Icon Play">
                        </div>
                        
                        <figure class="relative w-full h-full"></figure>
                    </div>

                    <div class="card-video relative w-full h-[30rem] rounded-[5rem] overflow-hidden bg-white">
                        <div class="card-video-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img class="w-full h-full object-contain" src="/icon-play-circle.png" alt="Icon Play">
                        </div>

                        <figure class="relative w-full h-full"></figure>
                    </div>

                    <div class="card-video relative w-full h-[30rem] rounded-[5rem] overflow-hidden bg-white">
                        <div class="card-video-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img class="w-full h-full object-contain" src="/icon-play-circle.png" alt="Icon Play">
                        </div>

                        <figure class="relative w-full h-full"></figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-video {
    cursor: pointer;
    transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);
    
    .card-video-icon {
        transition: all .5s cubic-bezier(0.075, 0.820, 0.165, 1.000);
    }

    &:hover {
        margin-top: -1.5rem;

        .card-video-icon {
            transform: translate(-50%, -50%) scale(1.1);
        }
    }
}
</style>