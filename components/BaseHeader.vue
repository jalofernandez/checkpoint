<template>
  <header
    class="body-font w-full fixed top-0 z-50 bg-opacity-75 bg-white dark:bg-gray-700 dark:text-white backdrop-filter backdrop-blur-sm"
  >
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <LogoBrand />
      <nav
        class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
      >
        <NuxtLink
          class="mr-5 text-green-500 hover:text-green-600 font-medium cursor-pointer"
          to="/"
        >
          Dashboard
        </NuxtLink>
        <NuxtLink
          class="mr-5 text-pink-500 hover:text-pink-600 font-medium cursor-pointer"
          to="/canessa/customers"
        >
          Canessa
        </NuxtLink>
        <NuxtLink
          v-if="!isUserLog"
          class="mr-5 hover:text-gray-900 cursor-pointer"
          to="/auth/login"
        >
          Login
        </NuxtLink>
      </nav>
      <div class="flex flex-row items-center">
        <div class="flex flex-col items-end justify-end mr-2">
          <span
            v-if="isUserLog"
            class="font-medium text-xs text-gray-500 dark:text-white hover:text-gray-600 mb-1"
          >
            {{ $nuxt.$fire.auth.currentUser.email }}
          </span>
          <button
            v-if="isUserLog"
            type="button"
            class="inline-flex items-center bg-red-100 hover:bg-red-200 border-0 py-0.5 px-2 focus:outline-none rounded text-xs text-red-500 hover:text-red-600 mt-4 md:mt-0"
            @click="logout()"
          >
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <img
          class="w-10 h-10 mr-2"
          src="@/assets/images/profile-default.png"
          alt="Profile pic by default"
        />
        <ThemeSwitch />
        <BurgerMenu />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
  data: () => ({
    isUserLog: true,
  }),
  methods: {
    async logout() {
      alert('Log Out!')
      try {
        await this.$fire.auth.signOut()
        this.isUserLog = false
      } catch (e) {
        alert(e)
      }
    },
  },
}
</script>

<style scoped>
.logo-brand {
  width: 45px;
  height: 45px;
}
.nuxt-link-exact-active:not(.logo-link) {
  display: none;
}
</style>
