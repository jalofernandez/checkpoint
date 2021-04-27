<template>
  <header
    class="flex flex-row justify-between items-center p-3 dark:text-white dark:bg-gray-700"
  >
    <div class="flex flex-row items-center">
      <LogoBrand class="logo-brand" />
      <h1 class="brand-color-300">
        <b class="pl-2 light:text-white">Check</b>Point
      </h1>
    </div>
    <ThemeSwitch />
  </header>
</template>

<script>
import LogoBrand from '@/assets/icons/haztunegociodigital-icon.svg?inline'

export default {
  name: 'BaseHeader',
  components: { LogoBrand },
}
</script>

<style scoped>
.logo-brand {
  width: 45px;
  height: 45px;
}
</style>
