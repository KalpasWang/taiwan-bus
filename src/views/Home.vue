<template>
  <div class="home-height position-relative bg-home overflow-hidden">
    <img :src="logoUrl" class="logo-home-size mt-5 ms-4" />
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
import { reactive } from 'vue'
import logoUrl from '@/assets/Logo.png'
import markerUrl from '@/assets/marker.svg'
import searchBlackUrl from '@/assets/search-black.svg'

const circles = reactive([
  { class: 'circle cricle1', left: 0, top: 0, size: 0 },
  { class: 'circle cricle2', left: 0, top: 0, size: 0 },
  { class: 'circle cricle3', left: 0, top: 0, size: 0 },
  { class: 'circle cricle4', left: 0, top: 0, size: 0 },
  { class: 'circle cricle5', left: 0, top: 0, size: 0 },
  { class: 'circle cricle6', left: 0, top: 0, size: 0 }
])

const getRandomPosition = (max) => {
  return Math.round(Math.random() * (max + 20)) - 10
}

const getRandomSize = (max, min) => {
  return Math.round(Math.random() * (max - min)) + min
}

const setRandomCircles = () => {
  let maxSize = 100
  const minSize = 30
  if (window.innerWidth >= 768) {
    maxSize = 190
  }

  circles.forEach((circle) => {
    circle.left = getRandomPosition(window.innerWidth)
    circle.top = getRandomPosition(window.innerHeight)
    circle.size = getRandomSize(maxSize, minSize)
  })
}

const setFullHeight = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
window.addEventListener('resize', setFullHeight)

setFullHeight()
</script>

<style lang="scss">
@import '../assets/scss/custom-mixin';

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
.ball {
  position: absolute;
  border-radius: 50%;
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
  background: linear-gradient(149.2deg, #1cc8ee 29.55%, #07738b 78.54%);
  mix-blend-mode: normal;
  box-shadow: 0px 0px 32px #1cc8ee, 1px 13px 10px #000000;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    @include size(290px);
    @media screen and (min-width: 768px) {
      @include size(460px);
    }
    @media screen and (min-width: 991px) {
      @include size(356px);
    }
    border-radius: 50%;
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
    content: '';
    position: absolute;
    z-index: -1;
    @include size(204px);
    @media screen and (min-width: 768px) {
      @include size(324px);
    }
    @media screen and (min-width: 991px) {
      @include size(250px);
    }
    opacity: 0.37;
    border-radius: 50%;
    border: 2px solid #f5f5f5;
    box-sizing: border-box;
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
  top: 79.7%;
  background: linear-gradient(206.57deg, #fcd42c 18.7%, #a98b0d 80.04%);
  box-shadow: 0px 0px 39px #fcd42c, 0px 11px 24px #000000;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    @include size(230px);
    @media screen and (min-width: 768px) {
      @include size(337px);
    }
    @media screen and (min-width: 991px) {
      @include size(250px);
    }
    border-radius: 50%;
    opacity: 0.37;
    border: 2px solid #f5f5f5;
    filter: drop-shadow(0px 0px 8px #ffffff) drop-shadow(0px 11px 18px #000000);
  }
}
</style>
