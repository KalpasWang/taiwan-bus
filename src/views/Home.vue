<template>
  <div class="home-height position-relative bg-home overflow-hidden">
    <img
      :src="logoUrl"
      class="logo-home-size mt-5 mt-md-9 ms-4 ms-md-5 ms-lg-8"
    />
    <!-- 點綴畫面的白色圓圈 -->
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="circle circle3"></div>
    <div class="circle circle4"></div>
    <div class="circle circle5"></div>
    <div class="circle circle6"></div>
    <!-- 附近公車站頁面連結 -->
    <div
      class="ball blue-ball d-flex justify-content-center align-items-center"
    >
      <router-link
        :to="{ name: 'NearBy' }"
        role="button"
        class="d-flex flex-column w-100 h-100 rounded-circle text-decoration-none justify-content-center align-items-center"
      >
        <img :src="markerUrl" width="23.5" height="31.33" />
        <span class="link-light fs-5 lh-base">附近公車站</span>
      </router-link>
    </div>
    <!-- 公車查詢頁面連結 -->
    <div
      class="ball white-ball d-flex justify-content-center align-items-center"
    >
      <router-link
        :to="{ name: 'CitySearch' }"
        role="button"
        class="d-flex flex-column w-100 h-100 rounded-circle text-decoration-none justify-content-center align-items-center"
      >
        <img :src="searchBlackUrl" width="22.6" />
        <span class="link-dark fs-5 lh-base">查詢公車</span>
      </router-link>
    </div>
    <!-- 客運查詢頁面連結 -->
    <div
      class="ball yellow-ball d-flex justify-content-center align-items-center"
    >
      <router-link
        :to="{ name: 'InterCitySearch' }"
        role="button"
        class="d-flex flex-column w-100 h-100 rounded-circle text-decoration-none justify-content-center align-items-center"
      >
        <img :src="searchBlackUrl" width="22.6" />
        <span class="link-dark fs-5 lh-base">查詢客運</span>
      </router-link>
    </div>
    <p class="footer text-light">Taiwan Bus © Code: Kalpas / Design: KT</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import logoUrl from '@/assets/logo.svg'
import markerUrl from '@/assets/marker.svg'
import searchBlackUrl from '@/assets/search-black.svg'

const setFullHeight = () => {
  // 行動瀏覽器支援
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  // 設定球在 window 高度不同的情況下的大小
  const height = window.innerHeight
  const maxSizeHeight = 750
  const minSizeHeight = 550
  let subtracted
  if (height < maxSizeHeight && height > minSizeHeight) {
    subtracted = (maxSizeHeight - height) / 2
  } else if (height <= minSizeHeight) {
    subtracted = 100
  } else {
    subtracted = 0
  }
  document.documentElement.style.setProperty('--subtracted', subtracted + 'px')
}

onMounted(() => {
  setFullHeight()
  window.addEventListener('resize', setFullHeight)
})
</script>

<style lang="scss">
@import '../assets/scss/custom-mixin';
@import '../assets/scss/custom-variables';

.home-height {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  @media screen and (min-width: 768px) {
    min-height: 500px;
  }
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
  border-radius: 50%;
  border: 1px solid $light;
  animation: loop 3s linear infinite;
}
.circle1 {
  @include size(87px);
  @include position($left: -34px, $top: 26.5%);
  animation-delay: 0;
  @media screen and (min-width: 768px) {
    @include size(calc(183px - var(--subtracted, 0)));
    @include position($left: -61px, $top: 28.4%);
  }
  @media screen and (min-width: 991px) {
    @include size(156px);
    @include position($left: -96px, $top: 32.6%);
  }
}
.circle2 {
  @include size(50px);
  @include position($left: -30px, $top: 59.1%);
  animation-delay: 0.5s;
  @media screen and (min-width: 768px) {
    @include size(92px);
    @include position($left: -37px, $top: 61.5%);
  }
  @media screen and (min-width: 991px) {
    @include size(77px);
    @include position($left: 27.8%, $top: -39px);
  }
}
.circle3 {
  @include size(86px);
  @include position($right: 20px, $top: -47px);
  animation-delay: 1s;
  @media screen and (min-width: 768px) {
    @include size(170px);
    @include position($right: 12.9%, $top: -103px);
  }
  @media screen and (min-width: 991px) {
    @include size(142px);
    @include position($right: 22.7%, $top: -39px);
  }
}
.circle4 {
  @include size(33px);
  @include position($right: 27.5%, $bottom: 7.3%);
  animation-delay: 1.5s;
  @media screen and (min-width: 768px) {
    @include size(68px);
    @include position($right: 30.7%, $bottom: 8%);
  }
  @media screen and (min-width: 991px) {
    @include size(131px);
    @include position($right: 11.4%, $bottom: -72px);
  }
}
.circle5 {
  animation-delay: 2s;
  @media screen and (min-width: 768px) {
    @include size(75px);
    @include position($left: 21.6%, $bottom: 44.8%);
  }
  @media screen and (min-width: 991px) {
    @include size(82px);
    @include position($left: 24.5%, $bottom: 20.3%);
  }
}
.circle6 {
  animation-delay: 2.5s;
  @media screen and (min-width: 991px) {
    @include size(56px);
    @include position($right: 32.9%, $bottom: 38.8%);
  }
}

.ball {
  position: absolute;
  border-radius: 50%;
  z-index: 20;
  transition: all 0.5s linear;
  transform-origin: center;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    border: 2px solid #f5f5f5;
  }
  &:hover {
    filter: brightness(125%);
    transform: scale(1.05);
    &::before {
      animation: loop 3s linear infinite;
    }
  }
}
.blue-ball {
  @include size(202px);
  right: -29px;
  top: 25%;
  @media screen and (min-width: 768px) {
    @include size(calc(321px - var(--subtracted, 0)));
    right: 28px;
    top: 25%;
  }
  @media screen and (min-width: 991px) {
    @include size(248px);
    right: 7.4%;
    top: 23.4%;
  }
  border: 4px solid transparent;
  background-image: linear-gradient(149.2deg, #1cc8ee 29.55%, #07738b 78.54%),
    linear-gradient(323.99deg, #1cc8ee 65.35%, #ffffff 89.01%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  mix-blend-mode: normal;
  box-shadow: 0px 0px 32px #1cc8ee, 1px 13px 10px #000000;

  &::before {
    @include size(290px);
    @media screen and (min-width: 768px) {
      @include size(calc(460px - var(--subtracted, 0)));
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
  right: -36px;
  top: 55.5%;
  @media screen and (min-width: 768px) {
    @include size(calc(250px - var(--subtracted, 0)));
    right: -5px;
    top: 60.7%;
  }
  @media screen and (min-width: 991px) {
    @include size(193px);
    right: 4.8%;
    top: 56.6%;
  }
  border: 4px solid transparent;
  background-image: linear-gradient(#f5f5f5, #f5f5f5),
    linear-gradient(344.08deg, #f1f1f1 17.96%, #ffffff 84.68%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0px 0px 8px #ffffff, 0px 11px 18px #000000;

  &::before {
    @include size(204px);
    @media screen and (min-width: 768px) {
      @include size(calc(324px - var(--subtracted, 0)));
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
  left: -21px;
  bottom: -7px;
  @media screen and (min-width: 768px) {
    @include size(calc(245px - var(--subtracted, 0)));
    left: -15px;
    bottom: -20px;
  }
  @media screen and (min-width: 991px) {
    @include size(182px);
    left: auto;
    right: 35%;
    bottom: -36px;
  }
  border: 4px solid transparent;
  background: linear-gradient(206.57deg, #fcd42c 18.7%, #a98b0d 80.04%),
    linear-gradient(16.05deg, #fcd42c 49.56%, #ffffff 86.1%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0px 0px 39px #fcd42c, 0px 11px 24px #000000;

  &::before {
    @include size(230px);
    @media screen and (min-width: 768px) {
      @include size(calc(337px - var(--subtracted, 0)));
    }
    @media screen and (min-width: 991px) {
      @include size(250px);
    }
    opacity: 0.37;
    filter: drop-shadow(0px 0px 8px #ffffff) drop-shadow(0px 11px 18px #000000);
  }
}

.footer {
  position: absolute;
  font-size: 0.75rem;
  right: 16px;
  bottom: 16px;
  @media screen and (min-width: 991px) {
    right: auto;
    left: 30px;
  }
}

@keyframes loop {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
