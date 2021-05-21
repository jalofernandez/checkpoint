<template>
  <navbar
    class="body-font w-full fixed bottom-0 z-50 border-t dark:border-gray-500 bg-opacity-75 bg-white dark:bg-navy-900 dark:text-white backdrop-filter backdrop-blur-sm lg:hidden"
  >
    <div
      class="container mx-auto flex flex-wrap py-3 px-5 flex-row justify-around items-center"
    >
      <NuxtLink v-for="(link, index) in links" :key="index" :to="link.url">
        <!-- A.) import images with a require method
        <img
          class="w-7 h-7 mx-auto"
          :src="getIcon(link.icon)"
          :alt="link.name"
        /> -->
        <!-- B.) import images with a dinamic component -->
        <component
          :is="link.component"
          class="w-7 h-7 mx-auto"
          :alt="link.name"
        />
        <span class="text-xs">{{ link.name }}</span>
      </NuxtLink>
    </div>
  </navbar>
</template>

<script>
export default {
  name: 'NavbarMobile',
  // B.) import images with a dinamic component
  components: {
    IconHome: () => import('@/assets/icons/dark.svg?inline'),
    IconCustomers: () => import('@/assets/icons/light.svg?inline'),
    IconProfile: () => import('@/assets/icons/dark.svg?inline'),
  },
  // This time I use arrow function instead classic:
  // data(): { return { ... } },
  data: () => ({
    links: [
      {
        name: 'Home',
        url: '/',
        component: 'IconHome',
      },
      {
        name: 'Customers',
        url: '/',
        component: 'IconCustomers',
      },
      {
        name: 'Profile',
        url: `/auth/${$nuxt.$fire.auth.currentUser.uid}`,
        component: 'IconProfile',
      },
    ],
  }),
  // A.) import images with a require method
  // methods: {
  //   // for dimanic images loads we need to import them with a method
  //   getIcon(icon) {
  //     return require(`@/assets/icons/${icon}.svg`)
  //   },
  // },
}
</script>
