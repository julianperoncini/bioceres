<template>
    <div class="relative">
        <div class="relative pt-100 s:pt-80 pb-100 s:pb-170">
            <div class="relative px-20 s:px-240">
                <div class="relative max-w-[30rem] s:max-w-[36rem] pb-60">
                    <p class="font-normal text-18 leading-[1.2] tracking-[-0.72px] js-t-fades">
                        Seleccioná la información para que nuestro asesor inteligente 
                        te recomiende <span class="font-semibold">como sacar el mejor provecho de tu campo.</span>
                    </p>
                </div>

                <div class="relative grid grid-cols-1 s:grid-cols-2 gap-80 s:gap-100">
                    <div class="relative flex flex-col justify-center js-t-fades">
                        <div class="relative pb-30">
                            <h2 class="relative font-semibold text-25 leading-none tracking-[-1px]">1. Características</h2>
                        </div>

                        <div class="relative pb-50">
                            <div class="relative grid grid-cols-2 gap-x-16 gap-y-35">
                                
                                <div class="relative">
                                    <div class="relative pb-10 text-[#25284A]">
                                        <p class="text-15 leading-none tracking-[-0.6px]">Tu región</p>
                                    </div>
                                    <div class="relative font-normal text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                        <div class="relative">
                                            <select class="select-input relative bg-transparent appearance-none cursor-pointer">
                                                <option selected>Oeste de Bs As</option>
                                                <option>Opción 1</option>
                                                <option>Opción 2</option>
                                                <option>Opción 3</option>
                                            </select>
                                            <div class="select-line"></div>
                                        </div>
                                        <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="text-[#3FADE1]">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative pb-10 text-[#25284A]">
                                        <p class="text-15 leading-none tracking-[-0.6px]">El ambiente</p>
                                    </div>
                                    <div class="relative font-normal text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                        <div class="relative">
                                            <select class="select-input relative bg-transparent appearance-none cursor-pointer">
                                                <option selected>Entre 2.500-4.000 kg/ha</option>
                                                <option>Opción 1</option>
                                                <option>Opción 2</option>
                                                <option>Opción 3</option>
                                            </select>
                                            <div class="select-line"></div>
                                        </div>
                                        <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="text-[#3FADE1]">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative pb-10 text-[#25284A]">
                                        <p class="text-15 leading-none tracking-[-0.6px]">Preferencia de siembra</p>
                                    </div>
                                    <div class="relative font-normal text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                        <div class="relative">
                                            <select class="select-input relative bg-transparent appearance-none cursor-pointer">
                                                <option selected>Temprana</option>
                                                <option>Opción 1</option>
                                                <option>Opción 2</option>
                                                <option>Opción 3</option>
                                            </select>
                                            <div class="select-line"></div>
                                        </div>
                                        <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="text-[#3FADE1]">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative pb-10 text-[#25284A]">
                                        <p class="text-15 leading-none tracking-[-0.6px]">Tipo de año</p>
                                    </div>
                                    <div class="relative font-normal text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                        <div class="relative">
                                            <select class="select-input relative bg-transparent appearance-none cursor-pointer">
                                                <option selected>Neutro</option>
                                                <option>Opción 1</option>
                                                <option>Opción 2</option>
                                                <option>Opción 3</option>
                                            </select>
                                            <div class="select-line"></div>
                                        </div>
                                        <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="text-[#3FADE1]">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="relative">
                            <ButtonArrow color="lightblue" label="Calcular recomendación" />
                        </div>
                    </div>

                    <div class="relative js-t-fades">
                        <div class="relative p-40 s:p-60 shadow-card bg-[#FFFFFF] rounded-[2.5rem] s:rounded-[5rem]">
                            <div class="relative pb-30">
                                <h2 class="font-semibold text-[#25284A] text-22 leading-none tracking-[-0.88px]">Recomendación para tu campo</h2>
                            </div>

                            <div class="relative grid grid-cols-2 gap-x-16 gap-y-20">
                                <div class="relative">
                                    <div class="relative flex-shrink-0 pb-10">
                                        <svg class="w-[2.6rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.33 34.343">
                                            <g transform="translate(-7)">
                                                <path d="M31.666,3.411l.392-.979A1.774,1.774,0,0,0,30.411,0H9.919A1.774,1.774,0,0,0,8.272,2.432l.392.979C8.243,4.35,7,7.91,7,17.172S8.243,29.993,8.664,30.932l-.392.979a1.774,1.774,0,0,0,1.647,2.432H30.411a1.774,1.774,0,0,0,1.646-2.432l-.392-.979c.421-.939,1.664-4.5,1.664-13.761S32.087,4.35,31.666,3.411ZM9.4,1.421a.622.622,0,0,1,.519-.276H30.411a.63.63,0,0,1,.584.862l-.342.855H9.677l-.343-.856A.619.619,0,0,1,9.4,1.421Zm21.532,31.5a.622.622,0,0,1-.521.276H9.919a.63.63,0,0,1-.583-.862l.343-.855H30.653l.343.856A.619.619,0,0,1,30.932,32.923Zm-.257-2.586H9.655c-.385-.943-1.51-4.443-1.51-13.165S9.272,4.943,9.654,4.007H30.675c.385.943,1.51,4.443,1.51,13.165S31.06,29.393,30.675,30.337Z" transform="translate(0)" fill="#25284a"/>
                                                <path d="M26.653,20.605c-1.709-1.66-5.916-3.675-7.627-1.967-1.585,1.592.035,5.318,1.6,7.212a4,4,0,0,0,3.085,7.37,9.93,9.93,0,0,0,4.954-4.135,3.7,3.7,0,0,0,.176-.447,3.929,3.929,0,0,0,1.532-.946C32.042,26.025,34.129,21.732,32.4,20,31.154,18.769,28.61,19.487,26.653,20.605Zm4.39-.052-4.836,4.836a9.479,9.479,0,0,0-1.5-.176,2.837,2.837,0,0,1,.814-2.372c1.369-1.374,4.161-2.569,5.522-2.287Zm-5.384.69a7.751,7.751,0,0,0-.946.788,3.972,3.972,0,0,0-.644.839l-3.683-3.683C21.667,18.924,24.22,19.973,25.659,21.244ZM19.575,20l4.054,4.054a3.972,3.972,0,0,0-.066,1.168,10.61,10.61,0,0,0-1.758.237C20.455,24.066,19.3,21.337,19.575,20Zm-.019,9.834a2.853,2.853,0,0,1,1.892-3.086,8.872,8.872,0,0,1,2.788-.411,6.769,6.769,0,0,1,2.784.5,2.264,2.264,0,0,1,.394.244Zm8.08-1.237a8.753,8.753,0,0,1-4.3,3.549h0a2.856,2.856,0,0,1-3.4-1.234l7.857-2.751A2.181,2.181,0,0,1,27.635,28.592Zm1.93-1.706a2.85,2.85,0,0,1-.647.484c-.016-.066-.023-.135-.045-.2A2.465,2.465,0,0,0,27.514,25.8c-.022-.011-.05-.018-.073-.028l4.411-4.411c.279,1.359-.916,4.152-2.288,5.523Z" transform="translate(-4.864 -7.692)" fill="#25284a"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Variedad</p>
                                        <h5 class="relative pb-5 font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">Iruya HB4</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative flex-shrink-0 pb-10">
                                        <svg class="w-[2.6rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.33 34.343">
                                            <g transform="translate(-7)">
                                                <path d="M31.666,3.411l.392-.979A1.774,1.774,0,0,0,30.411,0H9.919A1.774,1.774,0,0,0,8.272,2.432l.392.979C8.243,4.35,7,7.91,7,17.172S8.243,29.993,8.664,30.932l-.392.979a1.774,1.774,0,0,0,1.647,2.432H30.411a1.774,1.774,0,0,0,1.646-2.432l-.392-.979c.421-.939,1.664-4.5,1.664-13.761S32.087,4.35,31.666,3.411ZM9.4,1.421a.622.622,0,0,1,.519-.276H30.411a.63.63,0,0,1,.584.862l-.342.855H9.677l-.343-.856A.619.619,0,0,1,9.4,1.421Zm21.532,31.5a.622.622,0,0,1-.521.276H9.919a.63.63,0,0,1-.583-.862l.343-.855H30.653l.343.856A.619.619,0,0,1,30.932,32.923Zm-.257-2.586H9.655c-.385-.943-1.51-4.443-1.51-13.165S9.272,4.943,9.654,4.007H30.675c.385.943,1.51,4.443,1.51,13.165S31.06,29.393,30.675,30.337Z" transform="translate(0)" fill="#25284a"/>
                                                <path d="M26.653,20.605c-1.709-1.66-5.916-3.675-7.627-1.967-1.585,1.592.035,5.318,1.6,7.212a4,4,0,0,0,3.085,7.37,9.93,9.93,0,0,0,4.954-4.135,3.7,3.7,0,0,0,.176-.447,3.929,3.929,0,0,0,1.532-.946C32.042,26.025,34.129,21.732,32.4,20,31.154,18.769,28.61,19.487,26.653,20.605Zm4.39-.052-4.836,4.836a9.479,9.479,0,0,0-1.5-.176,2.837,2.837,0,0,1,.814-2.372c1.369-1.374,4.161-2.569,5.522-2.287Zm-5.384.69a7.751,7.751,0,0,0-.946.788,3.972,3.972,0,0,0-.644.839l-3.683-3.683C21.667,18.924,24.22,19.973,25.659,21.244ZM19.575,20l4.054,4.054a3.972,3.972,0,0,0-.066,1.168,10.61,10.61,0,0,0-1.758.237C20.455,24.066,19.3,21.337,19.575,20Zm-.019,9.834a2.853,2.853,0,0,1,1.892-3.086,8.872,8.872,0,0,1,2.788-.411,6.769,6.769,0,0,1,2.784.5,2.264,2.264,0,0,1,.394.244Zm8.08-1.237a8.753,8.753,0,0,1-4.3,3.549h0a2.856,2.856,0,0,1-3.4-1.234l7.857-2.751A2.181,2.181,0,0,1,27.635,28.592Zm1.93-1.706a2.85,2.85,0,0,1-.647.484c-.016-.066-.023-.135-.045-.2A2.465,2.465,0,0,0,27.514,25.8c-.022-.011-.05-.018-.073-.028l4.411-4.411c.279,1.359-.916,4.152-2.288,5.523Z" transform="translate(-4.864 -7.692)" fill="#25284a"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Variedad</p>
                                        <h5 class="relative pb-5 font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">Iruya HB4</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative flex-shrink-0 pb-10">
                                        <svg class="w-[2.6rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.33 34.343">
                                            <g transform="translate(-7)">
                                                <path d="M31.666,3.411l.392-.979A1.774,1.774,0,0,0,30.411,0H9.919A1.774,1.774,0,0,0,8.272,2.432l.392.979C8.243,4.35,7,7.91,7,17.172S8.243,29.993,8.664,30.932l-.392.979a1.774,1.774,0,0,0,1.647,2.432H30.411a1.774,1.774,0,0,0,1.646-2.432l-.392-.979c.421-.939,1.664-4.5,1.664-13.761S32.087,4.35,31.666,3.411ZM9.4,1.421a.622.622,0,0,1,.519-.276H30.411a.63.63,0,0,1,.584.862l-.342.855H9.677l-.343-.856A.619.619,0,0,1,9.4,1.421Zm21.532,31.5a.622.622,0,0,1-.521.276H9.919a.63.63,0,0,1-.583-.862l.343-.855H30.653l.343.856A.619.619,0,0,1,30.932,32.923Zm-.257-2.586H9.655c-.385-.943-1.51-4.443-1.51-13.165S9.272,4.943,9.654,4.007H30.675c.385.943,1.51,4.443,1.51,13.165S31.06,29.393,30.675,30.337Z" transform="translate(0)" fill="#25284a"/>
                                                <path d="M26.653,20.605c-1.709-1.66-5.916-3.675-7.627-1.967-1.585,1.592.035,5.318,1.6,7.212a4,4,0,0,0,3.085,7.37,9.93,9.93,0,0,0,4.954-4.135,3.7,3.7,0,0,0,.176-.447,3.929,3.929,0,0,0,1.532-.946C32.042,26.025,34.129,21.732,32.4,20,31.154,18.769,28.61,19.487,26.653,20.605Zm4.39-.052-4.836,4.836a9.479,9.479,0,0,0-1.5-.176,2.837,2.837,0,0,1,.814-2.372c1.369-1.374,4.161-2.569,5.522-2.287Zm-5.384.69a7.751,7.751,0,0,0-.946.788,3.972,3.972,0,0,0-.644.839l-3.683-3.683C21.667,18.924,24.22,19.973,25.659,21.244ZM19.575,20l4.054,4.054a3.972,3.972,0,0,0-.066,1.168,10.61,10.61,0,0,0-1.758.237C20.455,24.066,19.3,21.337,19.575,20Zm-.019,9.834a2.853,2.853,0,0,1,1.892-3.086,8.872,8.872,0,0,1,2.788-.411,6.769,6.769,0,0,1,2.784.5,2.264,2.264,0,0,1,.394.244Zm8.08-1.237a8.753,8.753,0,0,1-4.3,3.549h0a2.856,2.856,0,0,1-3.4-1.234l7.857-2.751A2.181,2.181,0,0,1,27.635,28.592Zm1.93-1.706a2.85,2.85,0,0,1-.647.484c-.016-.066-.023-.135-.045-.2A2.465,2.465,0,0,0,27.514,25.8c-.022-.011-.05-.018-.073-.028l4.411-4.411c.279,1.359-.916,4.152-2.288,5.523Z" transform="translate(-4.864 -7.692)" fill="#25284a"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Variedad</p>
                                        <h5 class="relative pb-5 font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">Iruya HB4</h5>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="relative flex-shrink-0 pb-10">
                                        <svg class="w-[2.6rem] h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.33 34.343">
                                            <g transform="translate(-7)">
                                                <path d="M31.666,3.411l.392-.979A1.774,1.774,0,0,0,30.411,0H9.919A1.774,1.774,0,0,0,8.272,2.432l.392.979C8.243,4.35,7,7.91,7,17.172S8.243,29.993,8.664,30.932l-.392.979a1.774,1.774,0,0,0,1.647,2.432H30.411a1.774,1.774,0,0,0,1.646-2.432l-.392-.979c.421-.939,1.664-4.5,1.664-13.761S32.087,4.35,31.666,3.411ZM9.4,1.421a.622.622,0,0,1,.519-.276H30.411a.63.63,0,0,1,.584.862l-.342.855H9.677l-.343-.856A.619.619,0,0,1,9.4,1.421Zm21.532,31.5a.622.622,0,0,1-.521.276H9.919a.63.63,0,0,1-.583-.862l.343-.855H30.653l.343.856A.619.619,0,0,1,30.932,32.923Zm-.257-2.586H9.655c-.385-.943-1.51-4.443-1.51-13.165S9.272,4.943,9.654,4.007H30.675c.385.943,1.51,4.443,1.51,13.165S31.06,29.393,30.675,30.337Z" transform="translate(0)" fill="#25284a"/>
                                                <path d="M26.653,20.605c-1.709-1.66-5.916-3.675-7.627-1.967-1.585,1.592.035,5.318,1.6,7.212a4,4,0,0,0,3.085,7.37,9.93,9.93,0,0,0,4.954-4.135,3.7,3.7,0,0,0,.176-.447,3.929,3.929,0,0,0,1.532-.946C32.042,26.025,34.129,21.732,32.4,20,31.154,18.769,28.61,19.487,26.653,20.605Zm4.39-.052-4.836,4.836a9.479,9.479,0,0,0-1.5-.176,2.837,2.837,0,0,1,.814-2.372c1.369-1.374,4.161-2.569,5.522-2.287Zm-5.384.69a7.751,7.751,0,0,0-.946.788,3.972,3.972,0,0,0-.644.839l-3.683-3.683C21.667,18.924,24.22,19.973,25.659,21.244ZM19.575,20l4.054,4.054a3.972,3.972,0,0,0-.066,1.168,10.61,10.61,0,0,0-1.758.237C20.455,24.066,19.3,21.337,19.575,20Zm-.019,9.834a2.853,2.853,0,0,1,1.892-3.086,8.872,8.872,0,0,1,2.788-.411,6.769,6.769,0,0,1,2.784.5,2.264,2.264,0,0,1,.394.244Zm8.08-1.237a8.753,8.753,0,0,1-4.3,3.549h0a2.856,2.856,0,0,1-3.4-1.234l7.857-2.751A2.181,2.181,0,0,1,27.635,28.592Zm1.93-1.706a2.85,2.85,0,0,1-.647.484c-.016-.066-.023-.135-.045-.2A2.465,2.465,0,0,0,27.514,25.8c-.022-.011-.05-.018-.073-.028l4.411-4.411c.279,1.359-.916,4.152-2.288,5.523Z" transform="translate(-4.864 -7.692)" fill="#25284a"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="relative">
                                        <p class="relative pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">Variedad</p>
                                        <h5 class="relative pb-5 font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">Iruya HB4</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="relative flex flex-col justify-center js-t-fades">
                        <div class="relative pb-30">
                            <h2 class="relative font-semibold text-25 leading-none tracking-[-1px]">2. Nutrición en suelo   </h2>
                        </div>

                        <div class="relative pb-50">
                            <div class="relative grid grid-cols-1 gap-x-16 gap-y-35">
                                
                                <div class="relative">
                                    <div class="relative pb-10 text-[#25284A]">
                                        <p class="text-15 leading-none tracking-[-0.6px]">¿Conocés la nutrición de tu suelo?</p>
                                    </div>

                                    <div class="relative w-1/2 font-normal text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                        <div class="relative">
                                            <select class="select-input relative bg-transparent appearance-none cursor-pointer">
                                                <option selected>Si la conozco</option>
                                                <option>Opción 1</option>
                                                <option>Opción 2</option>
                                                <option>Opción 3</option>
                                            </select>
                                            <div class="select-line"></div>
                                        </div>
                                        <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" class="text-[#3FADE1]">
                                                <path d="m6 9 6 6 6-6"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-4 gap-x-90 justify-between">
                                    <div class="relative">
                                        <div class="relative pb-10 text-[#25284A]">
                                            <p class="text-15 leading-none tracking-[-0.6px]">N</p>
                                        </div>
                                        <div class="relative font-normal text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                            <div class="relative">
                                                <select class="select-input relative bg-transparent appearance-none cursor-pointer">
                                                    <option selected>10</option>
                                                    <option>20</option>
                                                    <option>30</option>
                                                    <option>40</option>
                                                </select>
                                                <div class="select-line"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="relative">
                                        <div class="relative pb-10 text-[#25284A]">
                                            <p class="text-15 leading-none tracking-[-0.6px]">N</p>
                                        </div>
                                        <div class="relative font-normal text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                            <div class="relative">
                                                <select class="select-input relative bg-transparent appearance-none cursor-pointer">
                                                    <option selected>10</option>
                                                    <option>20</option>
                                                    <option>30</option>
                                                    <option>40</option>
                                                </select>
                                                <div class="select-line"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="relative">
                                        <div class="relative pb-10 text-[#25284A]">
                                            <p class="text-15 leading-none tracking-[-0.6px]">N</p>
                                        </div>
                                        <div class="relative font-normal text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                            <div class="relative">
                                                <select class="select-input relative bg-transparent appearance-none cursor-pointer">
                                                    <option selected>10</option>
                                                    <option>20</option>
                                                    <option>30</option>
                                                    <option>40</option>
                                                </select>
                                                <div class="select-line"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="relative">
                                        <div class="relative pb-10 text-[#25284A]">
                                            <p class="text-15 leading-none tracking-[-0.6px]">N</p>
                                        </div>
                                        <div class="relative font-normal text-[#3FADE1] text-15 leading-none tracking-[-0.8px]">
                                            <div class="relative">
                                                <select class="select-input relative bg-transparent appearance-none cursor-pointer">
                                                    <option selected>10</option>
                                                    <option>20</option>
                                                    <option>30</option>
                                                    <option>40</option>
                                                </select>
                                                <div class="select-line"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="relative">
                            <ButtonArrow color="lightblue" label="Calcular nutrición" />
                        </div>
                    </div>

                    <div class="relative js-t-fades">
                        <div class="relative p-40 s:p-60 shadow-card bg-[#FFFFFF] rounded-[2.5rem] s:rounded-[5rem]">
                            <div class="relative pb-40">
                                <div class="relative pb-30">
                                    <h2 class="font-semibold text-[#25284A] text-22 leading-none tracking-[-0.88px]">Nutrición recomendada</h2>
                                </div>

                                <div class="relative grid grid-cols-4 gap-x-16">
                                    <div class="relative">
                                        <p class="relative pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">N</p>
                                        <h5 class="relative pb-5 font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">140</h5>
                                    </div>

                                    <div class="relative">
                                        <p class="relative pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">N</p>
                                        <h5 class="relative pb-5 font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">140</h5>
                                    </div>

                                    <div class="relative">
                                        <p class="relative pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">N</p>
                                        <h5 class="relative pb-5 font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">140</h5>
                                    </div>

                                    <div class="relative">
                                        <p class="relative pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">N</p>
                                        <h5 class="relative pb-5 font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">140</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="relative">
                                <div class="relative pb-30">
                                    <h2 class="font-semibold text-[#25284A] text-22 leading-none tracking-[-0.88px]">Fertilización recomendada</h2>
                                </div>

                                <div class="relative grid grid-cols-4 gap-x-16">
                                    <div class="relative">
                                        <p class="relative pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">N</p>
                                        <h5 class="relative pb-5 font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">40</h5>
                                    </div>

                                    <div class="relative">
                                        <p class="relative pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">N</p>
                                        <h5 class="relative pb-5 font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">40</h5>
                                    </div>

                                    <div class="relative">
                                        <p class="relative pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">N</p>
                                        <h5 class="relative pb-5 font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">40</h5>
                                    </div>

                                    <div class="relative">
                                        <p class="relative pb-5 font-medium text-[#25284A] text-17 leading-none tracking-[-0.68px]">N</p>
                                        <h5 class="relative pb-5 font-medium text-[#3FADE1] text-18 s:text-22 leading-none tracking-[-0.88px]">40</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.select-input {
    appearance: none;
    outline: none;
}

.select-line {
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 100%;
    height: .2rem;
    background: #3FADE1;
}

.shadow-card {
    box-shadow: 0px 3.3rem 6.6rem #00000012;
}
</style>