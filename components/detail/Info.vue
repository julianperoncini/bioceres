<template>
    <div class="relative">
        <div class="relative py-100 s:py-130">
            <div class="relative pb-100 s:pb-120">
                <div class="relative pb-30">
                    <h2 class="mont font-semibold text-40 s:text-45 leading-none tracking-[-1.8px] text-center js-s-fade">
                        Fecha de siembra <br>
                        <span class="mont font-bold text-[#A0C344]">
                            por zona
                        </span>
                    </h2>
                </div>

                <div class="relative pl-20 s:pl-150 pr-20 s:pr-190">
                    <div class="grid grid-cols-1 s:grid-cols-2 s:gap-x-90 js-s-fade">
                        <div class="relative w-full mb-50 s:mb-0">
                            <figure class="relative w-full">
                                <div class="pt-[105%]"></div>
                                <img class="absolute inset-0 object-contain" src="/HB4_mapa.svg" alt="">
                            </figure>
                        </div>

                        <div class="relative w-full">
                            <figure class="relative w-full">
                                <div class="pt-[105%]"></div>
                                <img class="absolute inset-0 object-contain" src="/hb4_tabla.svg" alt="">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative flex flex-col items-center justify-center">
                <div class="relative w-full s:w-[inherit] pb-50 s:pb-60 px-20 s:px-0">
                    <div class="relative pb-30">
                        <h2 class="mont font-semibold text-40 s:text-45 leading-none tracking-[-1.8px] text-center js-s-fade">
                            Perfil <br>
                            <span class="mont font-bold text-[#A0C344]">
                                Sanitario
                            </span>
                        </h2>
                    </div>

                    <div class="relative w-full s:w-[53rem] mx-auto js-s-fade">
                        <div class="flex flex-row items-center justify-center gap-20">
                            <div class="relative flex flex-col items-end gap-y-20">
                                <div class="text-[#25284A] inter font-medium text-20 leading-1 tracking-[-0.84px]">Cancro</div>

                                <div class="text-[#25284A] inter font-medium text-20 leading-1 tracking-[-0.84px]">Phytophora</div>

                                <div class="text-[#25284A] inter font-medium text-20 leading-1 tracking-[-0.84px]">Cancro</div>
                                
                                
                            </div>

                            <div class="relative flex flex-col items-start gap-y-20">
                                <div class="relative rounded-[2rem] bg-[#20611F] w-[32rem] h-[3rem] text-white inter font-medium text-20 leading-1 tracking-[-0.84px] text-center">Resistente</div>

                                <div class="relative rounded-[2rem] bg-[#A0C344] w-[32rem] h-[3rem] text-white inter font-medium text-20 leading-1 tracking-[-0.84px] text-center">R1 - R4</div>

                                <div class="relative rounded-[2rem] bg-[#20611F] w-[32rem] h-[3rem] text-white inter font-medium text-20 leading-1 tracking-[-0.84px] text-center">Resistente</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative js-s-fade">
                    <ButtonArrow color="lightblue" label="Ver ficha técnica" />
                </div>
            </div>
        </div>
    </div>
</template>