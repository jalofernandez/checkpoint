<template>
  <button
    type="button"
    class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
  >
    <div class="flex items-center justify-center">
      <!-- A.) import images with a require method
       <LogoGoogle v-if="type === 'google'" /> -->
      <!-- B.) import images with a dinamic component -->
      <component :is="socialComponent" />
      <span class="ml-4 font-medium">
        Login con <b class="capitalize font-semibold">{{ type }}</b>
      </span>
    </div>
  </button>
</template>

<script>
// A.) import images with a require method
// import LogoGoogle from '@/assets/icons/google.svg?inline'

export default {
  name: 'ButtonLoginSocial',
  components: {
    // A.) import images with a require method
    // LogoGoogle,
    // B.) import images with a dinamic component
    LogoGoogle: () => import('@/assets/icons/google.svg?inline'),
  },
  props: {
    type: {
      type: String,
      required: true,
      // validator Array with all variants: ['google', 'facebook', 'github']
      validate: (value) => ['google'].includes(value),
    },
  },
  data() {
    return {
      // B.) import images with a dinamic component
      socialOptions: {
        google: 'LogoGoogle',
      },
    }
  },
  computed: {
    // B.) import images with a dinamic component
    socialComponent() {
      return this.socialOptions[this.type]
    },
  },
}
</script>
