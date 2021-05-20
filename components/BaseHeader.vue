<template>
  <header
    class="body-font w-full fixed top-0 z-50 bg-opacity-75 bg-white dark:bg-navy-900 dark:text-white backdrop-filter backdrop-blur-sm"
  >
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <LogoBrand />
      <nav
        class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
      >
        <NuxtLink
          class="mr-5 text-gray-700 hover:text-gray-900 font-medium cursor-pointer"
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
          class="mr-5 text-yellow-500 hover:text-yellow-600 font-medium cursor-pointer"
          to="/jalofernandez/portfolio"
        >
          Jalofernandez
        </NuxtLink>
        <NuxtLink
          class="mr-5 text-green-500 hover:text-green-600 font-medium cursor-pointer"
          to="/haztunegociodigital/negocios"
        >
          #HazTuNegocioDigital
        </NuxtLink>
        <NuxtLink
          v-if="!isUserLog"
          class="mr-5 text-gray-700 hover:text-gray-900 cursor-pointer"
          to="/auth/login"
        >
          Login
        </NuxtLink>
      </nav>
      <div class="flex flex-row items-center">
        <div class="flex flex-col items-end justify-end mr-2">
          <NuxtLink
            v-if="isUserLog"
            :to="`/auth/${$nuxt.$fire.auth.currentUser.uid}`"
            class="special-link w-40 mb-1 truncate inline-block text-right font-medium text-xs text-navy-500 hover:text-navy-900 dark:text-sky-300 dark:hover:text-white"
          >
            <span v-if="$nuxt.$fire.auth.currentUser.displayName">
              {{ $nuxt.$fire.auth.currentUser.displayName }}
            </span>
            <span v-else>
              {{ $nuxt.$fire.auth.currentUser.email }}
            </span>
          </NuxtLink>
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
        <!-- <img
          v-if="$nuxt.$fire.auth.currentUser.photoUrl"
          class="w-10 h-10 mr-2"
          :src="$nuxt.$fire.auth.currentUser.photoUrl"
          alt="Google Profile pic as an avatar"
        /> -->
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
      this.$toast.success('Log Out!')
      try {
        await this.$fire.auth.signOut()
        this.isUserLog = false
      } catch (e) {
        this.$toast.error(e.message)
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
.nuxt-link-exact-active:not(.special-link) {
  display: none;
}
</style>
