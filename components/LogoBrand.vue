<template>
  <NuxtLink
    to="/"
    class="special-link anim-appear flex title-font font-medium items-center"
  >
    <LogoImage class="logo-brand w-10 h-10" />
    <span class="text-xl text-navy-900 hover:text-navy-700 dark:text-sky-100 dark:hover:text-sky-300">
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
.anim-appear {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
