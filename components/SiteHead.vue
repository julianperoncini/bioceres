<template>
    <header class="sh fixed top-0 left-0 w-full z-[999] js-sh">
        <div class="relative flex items-center justify-between py-20 s:py-35 px-20 s:px-140 bg-white">
            <div class="relative z-[999] w-[13.5rem] s:w-[16rem] h-auto">
                <nuxt-link class="relative w-full h-full" to="/">
                    <img class="relative w-full h-full object-contain" src="logo.png" alt="Bioceres Logo">
                </nuxt-link>
            </div>

            <div class="relative hidden s:block">
                <ul class="flex items-center gap-x-50 text-[#25284A]">
                    <li class="relative">
                        <nuxt-link class="uline relative mont font-medium text-16 leading-none tracking-[-0.64px] w-full h-full" to="/nuestras-raices">Nuestras Raíces</nuxt-link>
                    </li>

                    <li class="relative">
                        <nuxt-link class="uline relative mont font-medium text-16 leading-none tracking-[-0.64px] w-full h-full" to="/asesor-inteligente">Cultivos</nuxt-link>
                    </li>

                    <li class="relative">
                        <nuxt-link class="uline relative mont font-medium text-16 leading-none tracking-[-0.64px] w-full h-full" to="/">Tecnología</nuxt-link>
                    </li>

                    <li class="relative">
                        <nuxt-link class="uline relative mont font-medium text-16 leading-none tracking-[-0.64px] w-full h-full" to="/como-comprar">Cómo comprar</nuxt-link>
                    </li>

                    <li class="relative">
                        <ButtonAccess color="lightblue" label="Acceso Generación HB4" />
                    </li>
                </ul>
            </div>

            <div class="hamburger flex s:!hidden" :class="{ 'is-active': isOpen }" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div ref="maskMenu" class="block s:hidden fixed inset-0 bg-white z-[998] invisible">
                <ul class="w-full h-full flex flex-col items-center justify-center gap-y-50 text-[#25284A]">
                    <li class="relative">
                        <nuxt-link class="uline relative mont font-medium text-26 leading-none tracking-[-0.64px] w-full h-full" to="/nuestras-raices">Nuestras Raíces</nuxt-link>
                    </li>

                    <li class="relative">
                        <nuxt-link class="uline relative mont font-medium text-26 leading-none tracking-[-0.64px] w-full h-full" to="/asesor-inteligente">Cultivos</nuxt-link>
                    </li>

                    <li class="relative">
                        <nuxt-link class="uline relative mont font-medium text-26 leading-none tracking-[-0.64px] w-full h-full" to="/">Tecnología</nuxt-link>
                    </li>

                    <li class="relative">
                        <nuxt-link class="uline relative mont font-medium text-26 leading-none tracking-[-0.64px] w-full h-full" to="/como-comprar">Cómo comprar</nuxt-link>
                    </li>

                    <li class="relative">
                        <ButtonAccess color="lightblue" label="Acceso Generación HB4" />
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import gsap from 'gsap'

export default {
    data() {
        return {
            isOpen: false
        }
    },

    computed: {
        hasMouse() {
            return this.$store.state.app.features.hasMouse
        },
    },

    mounted() {
        this.$nuxt.$on('menu-close', () => {
            this.closeMenu()
            this.closeMaskMenu()
        })
    },

    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
            document.body.style.overflow = this.isOpen ? 'hidden' : 'initial'

            this.isOpen ? this.openMaskMenu() : this.closeMaskMenu()
        },

        closeMenu() {
            this.isOpen = false
            document.body.style.overflow = 'initial'
        },

        openMaskMenu() {
            gsap.fromTo(this.$refs.maskMenu, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: 0.5,
                ease: 'power1.out'
            })
        },

        closeMaskMenu() {
            gsap.fromTo(this.$refs.maskMenu, {
                autoAlpha: 1
            }, {
                autoAlpha: 0,
                duration: 0.5,
                ease: 'power1.out'
            })
        }
    },

    destroyed() {
        document.body.style.overflow = 'initial'
    }
}
</script>

<style lang="scss" scoped>
.sh {

    &-time {

        &__dots {
            animation: blink 1s infinite;
        }
    }

    &-link {

        &:before {
            content: '';
            position: absolute;
            bottom: -.2em;
            left: 0;
            right: 0;
            height: 0.05em;
            min-height: 1px;
            background-color: currentColor;
            transition: transform .75s $ExpoEaseOut;
            transform-origin: right;
            transform: scaleX(0);
        }

        &.nuxt-link-exact-active,
        &.is-active {

            &:before {
                transform-origin: left;
                transform: scaleX(1);
            }
        }
    }

}

@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.menu-toggle {

    &__text {
        transition: transform .75s $ExpoEaseOut;

        .is-active & {
            transform: translateY(-100%);
        }
    }
}

.dm-toggle {

    &__back {
        background-color: #222;
        clip-path: inset(.2rem .2rem .2rem 50% round 1.6rem);
        transition: clip-path 1s $ExpoEaseOut;

        .dm-toggle:hover & {
            clip-path: inset(0rem 0rem 0rem 0% round 1.6rem);
        }

        .is-dark & {
            background-color: #555;
        }
    }

    &__ball {
        transition: transform 1s $ExpoEaseOut;

        .is-dark .dm-toggle:hover & {
            transform: translateX(-100%);
        }
    }
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1100;
}

.hamburger span {
  width: 2rem;
  height: 0.25rem;
  background-color: #3FADE1;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.hamburger.is-active span:first-child {
  transform: rotate(45deg);
}

.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active span:nth-child(3) {
  transform: rotate(-45deg);
}

.sh {
    box-shadow: 0 0 30px rgba(0, 0, 0, .1);
}
</style>