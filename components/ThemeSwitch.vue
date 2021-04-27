<template>
  <div class="flex flex-row justify-between items-center pr-2">
    <!-- {{ $colorMode.preference }} -->
    <transition name="fade" appear>
      <IconDark
        v-if="$colorMode.preference != 'dark'"
        class="icon-theme is-dark cursor-pointer fill-blue"
        @click="changeTheme('dark')"
      />
      <IconLight
        v-else
        class="icon-theme is-light cursor-pointer fill-yellow"
        @click="changeTheme('light')"
      />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ThemeSwitch',
  components: {
    IconDark: () => import('@/assets/icons/dark.svg?inline'),
    IconLight: () => import('@/assets/icons/light.svg?inline'),
  },
  methods: {
    changeTheme(theme) {
      this.$colorMode.preference = theme
    },
  },
}
</script>

<style scoped>
.icon-theme {
  width: 25px;
  height: 25px;
}

.fill-yellow path {
  fill: #fbbf24 !important;
}

.fade-enter-active,
.fade-leave-active {
  -webkit-transition: opacity 0.8s ease-in-out;
  -moz-transition: opacity 0.8s ease-in-out;
  -ms-transition: opacity 0.8s ease-in-out;
  -o-transition: opacity 0.8s ease-in-out;
  transition: opacity 0.8s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  -webkit-transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  -moz-transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  -ms-transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  -o-transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  -webkit-transform: translateX(10px);
  -moz-transform: translateX(10px);
  -ms-transform: translateX(10px);
  -o-transform: translateX(10px);
  transform: translateX(10px);
  opacity: 0;
}
</style>
