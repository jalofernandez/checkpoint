<template>
  <div class="flex flex-row items-center justify-center lg:hidden">
    <div class="relative sm:max-w-xl mx-auto">
      <nav x-data="{ open: false }">
        <button
          class="bg-white text-gray-500 w-10 h-10 relative focus:outline-none dark:bg-navy-900 dark:text-white"
          @click="open = !open"
        >
          <span class="sr-only">Open main menu</span>
          <div
            class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
              :class="{ 'rotate-45': open, ' -translate-y-1.5': !open }"
            ></span>
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
              :class="{ 'opacity-0': open }"
            ></span>
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
              :class="{ '-rotate-45': open, ' translate-y-1.5': !open }"
            ></span>
          </div>
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu',
  data() {
    return {
      open: false,
    }
  },
}
</script>
