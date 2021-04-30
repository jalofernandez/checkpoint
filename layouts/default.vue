<template>
  <div>
    <BaseHeader />
    <main class="mt-20 mb-20 lg:mb-0 dark:bg-gray-700">
      <transition name="checkpoint-transition" appear>
        <Nuxt />
      </transition>
    </main>
    <BaseFooter />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

/* html.dark {
  @apply bg-gray-700;
} */

html.dark,
html.light {
  -webkit-transition: all 0.15s ease;
  -moz-transition: all 0.15s ease;
  -ms-transition: all 0.15s ease;
  -o-transition: all 0.15s ease;
  transition: all 0.15s ease;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.checkpoint-transition-enter-active {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.checkpoint-transition-leave-active {
  -webkit-transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  -moz-transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  -ms-transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  -o-transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.checkpoint-transition-enter,
.checkpoint-transition-leave-to {
  -webkit-transform: translateX(10px);
  -moz-transform: translateX(10px);
  -ms-transform: translateX(10px);
  -o-transform: translateX(10px);
  transform: translateX(10px);
  opacity: 0;
}
</style>
