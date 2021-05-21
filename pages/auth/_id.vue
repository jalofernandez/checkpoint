<template>
  <div class="min-h-screen">
    <section class="text-gray-600 body-font">
      <div class="container flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 dark:bg-navy-700 text-gray-400">
                <!-- <img
                  v-if="user.photo"
                  class="w-20 h-20"
                  :src="user.photo"
                  :alt="`${user.displayName} profile picture`"
                /> -->
                <img
                  class="w-20 h-20"
                  src="@/assets/images/profile-default.png"
                  alt="Current user profile pic by default"
                />
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-gray-900 dark:text-sky-300 text-lg">
                  {{ $nuxt.$fire.auth.currentUser.displayName }}
                </h2>
                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p class="text-base dark:text-sky-300">
                  {{ $nuxt.$fire.auth.currentUser.email }}
                </p>
                <p class="pt-2 text-sm">
                  <span v-if="!$nuxt.$fire.auth.currentUser.emailVerified" class="text-red-500">
                    ❌ Dirección de email sin verificar. Revisa tu bandeja de entrada para validar este email.
                  </span>
                  <span v-else class="text-green-600">
                    Dirección de email verificada 👌
                  </span>
                </p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4">
                <BaseInput
                  v-model="auth.name"
                  class="mt-4"
                  type="text"
                  name="name"
                  label="Nombre de usuario"
                  placeholder="rickUnPalmo"
                />
                <BaseInput
                  v-model="auth.email"
                  class="mt-4"
                  type="email"
                  name="email"
                  label="Email / Correo electrónico"
                  placeholder="email@gmail.com"
                />
                <BaseInput
                  v-model="auth.oldPass"
                  class="mt-4"
                  type="password"
                  name="pass"
                  label="Contraseña actual"
                  placeholder="*****..."
                />
                <BaseInput
                  v-model="auth.newPass"
                  class="mt-4"
                  type="password"
                  name="password"
                  label="Contraseña nueva"
                  placeholder="Invéntate otra contraseña"
                />
              </p>
              <a class="text-indigo-500 inline-flex items-center">Save changes
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="rounded-lg h-64 overflow-hidden">
            <img class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" alt="content">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  layout: 'Default',
  data: () => ({
    auth: {
      name: $nuxt.$fire.auth.currentUser.displayName,
      email: $nuxt.$fire.auth.currentUser.email,
      oldPass: '',
      newPass: '',
      error: '',
      success: '',
    },
  }),
}
</script>
