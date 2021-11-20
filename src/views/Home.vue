<template>
  <div class="home-height position-relative bg-home overflow-hidden">
    <img :src="logoUrl" class="logo-home-size mt-5 ms-4" />
    <div
      v-for="(circle, i) in circles"
      :key="i"
      :class="circle.class"
      :style="circle.mobile"
    ></div>
    <div
      class="ball blue-ball d-flex justify-content-center align-items-center"
    >
      <router-link
        :to="{ name: 'NearBy' }"
        role="button"
        class="d-flex flex-column text-decoration-none align-items-center"
      >
        <img :src="markerUrl" width="23.5" height="31.33" />
        <span class="link-light fs-5 lh-base">附近公車站</span>
      </router-link>
    </div>
    <div
      class="ball white-ball d-flex justify-content-center align-items-center"
    >
      <router-link
        :to="{ name: 'CitySearch' }"
        role="button"
        class="d-flex flex-column text-decoration-none align-items-center"
      >
        <img :src="searchBlackUrl" width="22.6" />
        <span class="link-dark fs-5 lh-base">查詢公車</span>
      </router-link>
    </div>
    <div
      class="ball yellow-ball d-flex justify-content-center align-items-center"
    >
      <router-link
        :to="{ name: 'InterCitySearch' }"
        role="button"
        class="d-flex flex-column text-decoration-none align-items-center"
      >
        <img :src="searchBlackUrl" width="22.6" />
        <span class="link-dark fs-5 lh-base">查詢客運</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import logoUrl from '@/assets/Logo.png'
import markerUrl from '@/assets/marker.svg'
import searchBlackUrl from '@/assets/search-black.svg'

const device = computed(() => {
  const w = window.innerWidth
  if (w < 768) return 'mobile'
  if (w >= 768 && w < 992) return 'tablet'
  return 'desktop'
})
const circles = reactive([
  {
    class: { circle: true, circle1: true },
    mobile: 'left:-34px;top:26.5%;width:87px;height:87px;'
  },
  {
    class: { circle: true, circle2: true },
    mobile: 'left:-30px;top:52.5%;width:50px;height:50px;'
  },
  {
    class: { circle: true, circle3: true },
    mobile: 'right:20px;top:-47px;width:86px;height:86px;'
  },
  {
    class: { circle: true, circle4: true },
    mobile: 'right:27.5%;bottom:8.9%;width:33px;height:33px;'
  },
  { class: { circle: true, circle5: true }, left: 0, top: 0, size: 0 },
  { class: { circle: true, circle6: true }, left: 0, top: 0, size: 0 }
])

const setFullHeight = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
window.addEventListener('resize', setFullHeight)

setFullHeight()
</script>

<style lang="scss">
@import '../assets/scss/custom-mixin';
@import '../assets/scss/custom-variables';

.home-height {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}
.bg-home {
  /* black_gray_line */
  background: linear-gradient(
    171.99deg,
    #323232 10.16%,
    #0a0a0b 71.59%
  ) !important;
}
.circle {
  position: absolute;
  // @include size(100px);
  border-radius: 50%;
  border: 1px solid $light;
}
.ball {
  position: absolute;
  border-radius: 50%;
  z-index: 20;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    border: 2px solid #f5f5f5;
  }
}
.blue-ball {
  @include size(202px);
  @media screen and (min-width: 768px) {
    @include size(321px);
  }
  @media screen and (min-width: 991px) {
    @include size(248px);
  }
  right: 7.4%;
  top: 23.4%;
  // border: 4px solid;
  // border-image: linear-gradient(323.99deg, #1cc8ee 65.35%, #ffffff 89.01%) round;
  background: linear-gradient(149.2deg, #1cc8ee 29.55%, #07738b 78.54%);
  mix-blend-mode: normal;
  box-shadow: 0px 0px 32px #1cc8ee, 1px 13px 10px #000000;
  &::before {
    @include size(290px);
    @media screen and (min-width: 768px) {
      @include size(460px);
    }
    @media screen and (min-width: 991px) {
      @include size(356px);
    }
    mix-blend-mode: normal;
    border: 1px solid #1cc8ee;
    filter: drop-shadow(0px 0px 10px #1cc8ee) drop-shadow(0px 0px 10px #1cc8ee);
  }
}
.white-ball {
  @include size(157px);
  @media screen and (min-width: 768px) {
    @include size(250px);
  }
  @media screen and (min-width: 991px) {
    @include size(193px);
  }
  right: 4.8%;
  top: 53.6%;
  background: #f5f5f5;
  box-shadow: 0px 0px 8px #ffffff, 0px 11px 18px #000000;
  &::before {
    @include size(204px);
    @media screen and (min-width: 768px) {
      @include size(324px);
    }
    @media screen and (min-width: 991px) {
      @include size(250px);
    }
    opacity: 0.37;
    filter: drop-shadow(0px 0px 8px #ffffff) drop-shadow(0px 11px 18px #000000);
  }
}
.yellow-ball {
  @include size(168px);
  @media screen and (min-width: 768px) {
    @include size(245px);
  }
  @media screen and (min-width: 991px) {
    @include size(182px);
  }
  right: 35%;
  bottom: -36px;
  background: linear-gradient(206.57deg, #fcd42c 18.7%, #a98b0d 80.04%);
  box-shadow: 0px 0px 39px #fcd42c, 0px 11px 24px #000000;
  &::before {
    @include size(230px);
    @media screen and (min-width: 768px) {
      @include size(337px);
    }
    @media screen and (min-width: 991px) {
      @include size(250px);
    }
    opacity: 0.37;
    filter: drop-shadow(0px 0px 8px #ffffff) drop-shadow(0px 11px 18px #000000);
  }
}
</style>
