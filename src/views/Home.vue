<template>
  <div
    ref="container"
    class="home-height position-relative bg-home overflow-hidden"
  >
    <img
      :src="logoUrl"
      class="logo-home-size mt-5 mt-md-9 ms-4 ms-md-5 ms-lg-8"
    />
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="circle circle3"></div>
    <div class="circle circle4"></div>
    <div class="circle circle5"></div>
    <div class="circle circle6"></div>
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
    <p class="footer text-light">Taiwan Bus © Code: Kalpas / Design: KT</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import logoUrl from '@/assets/Logo.png'
import markerUrl from '@/assets/marker.svg'
import searchBlackUrl from '@/assets/search-black.svg'

const container = ref(null)

const setFullHeight = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  if (window.innerWidth >= 768 && window.innerWidth < 992) {
    container.value.classList.remove('min-height-desktop')
    container.value.classList.add('min-height-tablet')
  } else if (window.innerWidth >= 992) {
    container.value.classList.remove('min-height-tablet')
    container.value.classList.add('min-height-desktop')
  } else {
    container.value.classList.remove('min-height-tablet')
    container.value.classList.remove('min-height-desktop')
  }
}
window.addEventListener('resize', setFullHeight)

onMounted(() => {
  setFullHeight()
})
</script>

<style lang="scss">
@import '../assets/scss/custom-mixin';
@import '../assets/scss/custom-variables';

.home-height {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}
.min-height-tablet {
  min-height: 990px;
}
.min-height-desktop {
  min-height: 700px;
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
.circle1 {
  @include size(87px);
  @include position($left: -34px, $top: 26.5%);
  @media screen and (min-width: 768px) {
    @include size(183px);
    @include position($left: -81px, $top: 28.4%);
  }
  @media screen and (min-width: 991px) {
    @include size(156px);
    @include position($left: -96px, $top: 32.6%);
  }
}
.circle2 {
  @include size(50px);
  @include position($left: -30px, $top: 59.1%);
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
  @media screen and (min-width: 991px) {
    @include size(56px);
    @include position($right: 32.9%, $bottom: 38.8%);
  }
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
  right: -29px;
  top: 25%;
  @media screen and (min-width: 768px) {
    @include size(321px);
    right: 28px;
    top: 28.4%;
  }
  @media screen and (min-width: 991px) {
    @include size(248px);
    right: 7.4%;
    top: 23.4%;
  }
  border: 4px solid;
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
  right: -36px;
  top: 52.5%;
  @media screen and (min-width: 768px) {
    @include size(250px);
    right: -15px;
    top: 55.7%;
  }
  @media screen and (min-width: 991px) {
    @include size(193px);
    right: 4.8%;
    top: 53.6%;
  }
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
  left: -41px;
  bottom: -14px;
  @media screen and (min-width: 768px) {
    @include size(245px);
    left: -35px;
    bottom: -40px;
  }
  @media screen and (min-width: 991px) {
    @include size(182px);
    left: auto;
    right: 35%;
    bottom: -36px;
  }
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
</style>
