<template>
  <NuxtLink
    to="/"
    class="logo-link flex title-font font-medium items-center mb-4 md:mb-0"
  >
    <LogoImage class="logo-brand" />
    <span class="ml-3 text-xl brand-color-300 dark:text-white">
      <b>Check</b>Point
    </span>
  </NuxtLink>
</template>

<script>
import LogoImage from '@/assets/icons/haztunegociodigital-icon.svg?inline'

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
