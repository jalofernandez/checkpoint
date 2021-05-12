<template>
  <NuxtLink
    to="/"
    class="logo-link flex title-font font-medium items-center"
  >
    <LogoImage class="logo-brand" />
    <span class="text-xl text-navy-900 dark:text-white">
      <b>Check</b>Point
    </span>
  </NuxtLink>
</template>

<script>
import LogoImage from '@/assets/icons/checkpoint--logotype.svg?inline'

export default {
  name: 'LogoBrand',
  components: { LogoImage },
}
</script>

<style>
.logo-brand {
  width: 45px;
  height: 45px;
}

.logo-link {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
