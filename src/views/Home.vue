<template>
  <div class="home-height position-relative bg-home">
    <img :src="logoUrl" class="icon-home-size mt-5 ml-4" />
    <div
      class="ball blue-ball d-flex justify-content-center align-items-center"
    >
      <router-link
        :to="{ name: 'NearBy' }"
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
        class="d-flex flex-column text-decoration-none align-items-center"
      >
        <img :src="searchBlackUrl" width="23.5" height="31.33" />
        <span class="link-dark fs-5 lh-base">查詢公車</span>
      </router-link>
    </div>
    <div
      class="ball yellow-ball d-flex justify-content-center align-items-center"
    >
      <router-link
        :to="{ name: 'InterCitySearch' }"
        class="d-flex flex-column text-decoration-none align-items-center"
      >
        <img :src="markerUrl" width="23.5" height="31.33" />
        <span class="link-light fs-5 lh-base">查詢客運</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import logoUrl from '@/assets/Logo.png'
import markerUrl from '@/assets/marker.svg'
import searchBlackUrl from '@/assets/search-black.svg'

const setFullHeight = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}
window.addEventListener('resize', setFullHeight)

setFullHeight()
</script>

<style>
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
  width: 248px;
  height: 248px;
  right: 95px;
  top: 169px;
  background: linear-gradient(149.2deg, #1cc8ee 29.55%, #07738b 78.54%);
  mix-blend-mode: normal;
  box-shadow: 0px 0px 32px #1cc8ee, 1px 13px 10px #000000;
}
.blue-ball::before {
  content: '';
  position: absolute;
  width: 357px;
  height: 357px;
  border-radius: 50%;
  mix-blend-mode: normal;
  border: 1px solid #1cc8ee;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 10px #1cc8ee) drop-shadow(0px 0px 10px #1cc8ee);
}
.white-ball {
  width: 194px;
  height: 194px;
  right: 62px;
  top: 386px;
  background: #f5f5f5;
  box-shadow: 0px 0px 8px #ffffff, 0px 11px 18px #000000;
}
.white-ball::before {
  position: absolute;
  width: 250px;
  height: 250px;
  right: 34px;
  top: 356px;
  opacity: 0.37;
  border: 2px solid #f5f5f5;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 8px #ffffff) drop-shadow(0px 11px 18px #000000);
}
.yellow-ball {
  width: 182px;
  height: 182px;
  right: 35%;
  top: 79.7%;
  background: linear-gradient(206.57deg, #fcd42c 18.7%, #a98b0d 80.04%);
  box-shadow: 0px 0px 39px #fcd42c, 0px 11px 24px #000000;
}
.yellow-ball::before {
  position: absolute;
  width: 250px;
  height: 250px;
  right: 32.4%;
  top: 76.6%;
  opacity: 0.37;
  border: 2px solid #f5f5f5;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 8px #ffffff) drop-shadow(0px 11px 18px #000000);
}
</style>
