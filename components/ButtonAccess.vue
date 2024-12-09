<template>
    <div class="btn flex flex-col items-center font-medium text-16 leading-none tracking-[-0.64px] rounded-[2.4rem] border-[#3FADE1] border-[0.2rem] border-solid overflow-hidden cursor-pointer" :class="color ? `is-${color}` : null">
        <div class="btn-text flex py-13 px-40 relative z-2">{{ label }}</div>

        <div class="btn-extralinks absolute top-full left-0 w-full z-2 mt-5 opacity-0">
            <div class="relative flex flex-col items-center justify-center gap-y-20 text-white">
                <nuxt-link class="uline w-[fit-content] text-center items-center justify-center relative font-normal text-16 leading-none tracking-[-0.64px] w-full h-full" to="/ingresa">Ingresá</nuxt-link>
                <nuxt-link class="uline w-[fit-content] text-center items-center justify-center relative font-normal text-16 leading-none tracking-[-0.64px] w-full h-full" to="/registrate">Registrate</nuxt-link>
            </div>
        </div>

        <div class="btn-bg absolute top-0 left-0 w-full bg-[#3FADE1] z-1 rounded-[2.4rem]"></div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'Ver Variedades'
        },
        color: {
            type: String,
            default: 'green'
        }
    }
}
</script>

<style lang="scss" scoped>
.is-lightblue {
    .btn-text {
        border-color: #3FADE1;
        background-color: #fff;
        transition: all .4s cubic-bezier(0.075, 0.820, 0.165, 1.000);
        color: #3FADE1;
    }

    .btn-bg {
        transition: all .4s cubic-bezier(0.075, 0.820, 0.165, 1.000);
        clip-path: inset(0 0 100% 0);
        height: 12.5rem;
    }

    .btn-extralinks {
        transition: all .4s cubic-bezier(0.075, 0.820, 0.165, 1.000);
        opacity: 0;
        transform: translateY(2rem);
    }

    &:hover {
        .btn-text {
            padding-left: 4.5rem;
            padding-right: 4.5rem;
            background-color: #3FADE1;
            color: #fff;
        }

        .btn-bg {
            clip-path: inset(0 0 0 0);
        }

        .btn-extralinks {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
</style>