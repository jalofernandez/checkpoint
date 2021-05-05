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
        <a class="mr-5 hover:text-gray-900 cursor-pointer">First Link</a>
        <a class="mr-5 hover:text-gray-900 cursor-pointer">Second Link</a>
        <a class="mr-5 hover:text-gray-900 cursor-pointer">Third Link</a>
        <NuxtLink
          v-if="!isUserLog"
          class="mr-5 hover:text-gray-900 cursor-pointer"
          to="/auth/login"
        >
          Login
        </NuxtLink>
        <button
          v-if="isUserLog"
          type="button"
          class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          href=""
          @click="logout()"
        >
          Logout
        </button>
      </nav>
      <div class="flex flex-row items-center">
        <ThemeSwitch />
        <img
          class="w-10 h-10"
          src="@/assets/images/profile-default.png"
          alt="Profile pic by default"
        />
        <span v-if="isUserLog">{{ $nuxt.$fire.auth.currentUser.email }}</span>
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
</style>
