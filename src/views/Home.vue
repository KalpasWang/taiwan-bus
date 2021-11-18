<template>
  <div class="home-height position-relative bg-home overflow-hidden">
    <img :src="logoUrl" class="icon-home-size mt-5 ml-4" />
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
        <img :src="searchWhiteUrl" width="22.6" />
        <span class="link-light fs-5 lh-base">查詢客運</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import logoUrl from '@/assets/Logo.png'
import markerUrl from '@/assets/marker.svg'
import searchBlackUrl from '@/assets/search-black.svg'
import searchWhiteUrl from '@/assets/search-white.svg'

const setFullHeight = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
window.addEventListener('resize', setFullHeight)

setFullHeight()
</script>

<style lang="scss">
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
  width: 19.3%;
  height: 0;
  padding-bottom: 19.3%;
  right: 7.4%;
  top: 23.4%;
  background: linear-gradient(149.2deg, #1cc8ee 29.55%, #07738b 78.54%);
  mix-blend-mode: normal;
  box-shadow: 0px 0px 32px #1cc8ee, 1px 13px 10px #000000;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 27.9%;
    height: 0;
    padding-bottom: 27.9%;
    border-radius: 50%;
    mix-blend-mode: normal;
    border: 1px solid #1cc8ee;
    box-sizing: border-box;
    filter: drop-shadow(0px 0px 10px #1cc8ee) drop-shadow(0px 0px 10px #1cc8ee);
  }
}
.white-ball {
  width: 15.2%;
  height: 0;
  padding-bottom: 15.2%;
  right: 4.8%;
  top: 53.6%;
  background: #f5f5f5;
  box-shadow: 0px 0px 8px #ffffff, 0px 11px 18px #000000;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 19.5%;
    height: 0;
    padding-bottom: 19.5%;
    opacity: 0.37;
    border-radius: 50%;
    border: 2px solid #f5f5f5;
    box-sizing: border-box;
    filter: drop-shadow(0px 0px 8px #ffffff) drop-shadow(0px 11px 18px #000000);
  }
}
.yellow-ball {
  width: 14.2%;
  height: 0;
  padding-bottom: 14.2%;
  right: 35%;
  top: 79.7%;
  background: linear-gradient(206.57deg, #fcd42c 18.7%, #a98b0d 80.04%);
  box-shadow: 0px 0px 39px #fcd42c, 0px 11px 24px #000000;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 19.5%;
    height: 0;
    padding-bottom: 19.5%;
    border-radius: 50%;
    opacity: 0.37;
    border: 2px solid #f5f5f5;
    filter: drop-shadow(0px 0px 8px #ffffff) drop-shadow(0px 11px 18px #000000);
  }
}
</style>
