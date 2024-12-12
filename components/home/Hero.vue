<template>
    <div class="relative w-full h-screen">
      <div ref="sliderContainer" class="slider-container h-full">
        <div 
          v-for="(slide, index) in slides" 
          :key="index"
          class="slide absolute w-full h-full"
          :class="{ active: currentSlide === index }"
        >
          <figure class="relative w-full h-full">
            <img 
              :src="slide.image" 
              :alt="slide.alt"
              class="relative w-full h-full object-cover"
            >
          </figure>
  
          <div class="px-20 s:px-0 w-full s:w-[inherit] flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <h1 class="mont text-center s:text-left font-semibold text-50 leading-none tracking-[-2px] js-t-fades">
              {{ slide.title }} <strong class="mont font-extrabold">{{ slide.strongText }}</strong>
            </h1>
  
            <div class="relative mt-40 js-t-fades">
              <ButtonArrow />
            </div>
          </div>
        </div>
      </div>
  
      <!-- Custom Dots -->
      <div class="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-8 s:gap-4 z-20">
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="goToSlide(index)"
          class="dot-button w-[1.2rem] h-[1.2rem] rounded-full transition-all duration-500"
          :class="currentSlide === index ? 'dot-active' : 'dot-inactive'"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        currentSlide: 0,
        slides: [
          {
            image: 'hero-home.jpg',
            alt: 'Bioceres',
            title: 'Hagamos que crezca tu',
            strongText: 'negocio'
          },
          {
            image: 'hero-home.jpg',
            alt: 'Bioceres',
            title: 'Hagamos que crezca tu',
            strongText: 'cultivo'
          },
          {
            image: 'hero-home.jpg',
            alt: 'Bioceres',
            title: 'Hagamos que crezca tu',
            strongText: 'rentabilidad'
          },
          {
            image: 'hero-home.jpg',
            alt: 'Bioceres',
            title: 'Hagamos que crezca tu',
            strongText: 'comunidad'
          }
        ],
        autoplayInterval: null
      }
    },

    mounted() {
      this.startAutoplay()
    },

    beforeDestroy() {
      this.stopAutoplay()
    },

    methods: {
      goToSlide(index) {
        this.currentSlide = index
        this.resetAutoplay()
      },

      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length
      },

      startAutoplay() {
        this.autoplayInterval = setInterval(() => {
          this.nextSlide()
        }, 3500)
      },

      stopAutoplay() {
        if (this.autoplayInterval) {
          clearInterval(this.autoplayInterval)
        }
      },

      resetAutoplay() {
        this.stopAutoplay()
        this.startAutoplay()
      }
    }
  }
</script>
  
<style scoped>
.slide {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.dot-button {
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
}

.dot-active {
  background-color: rgb(75, 169, 255);
  transform: scale(1);
}

.dot-inactive {
  background-color: rgba(128, 128, 128, 0.6);
  transform: scale(0.85);
}

.dot-inactive:hover {
  background-color: rgba(128, 128, 128, 0.8);
}
</style>