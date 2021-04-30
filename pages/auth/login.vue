<template>
  <!-- component -->
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div
      class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen"
    >
      <img
        src="https://source.unsplash.com/random"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="bg-white dark:bg-gray-700 w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-start justify-center"
    >
      <div class="w-full h-100">
        <div class="flex justify-between items-center mt-12">
          <LogoBrand />
          <ThemeSwitch />
        </div>
        <h1
          class="text-xl md:text-2xl font-bold text-gray-700 dark:text-white leading-tight mt-8"
        >
          Necesitamos conocer quién eres:
        </h1>
        <form class="mt-6" action="#" method="POST">
          <div>
            <label class="block text-gray-700 dark:text-white">
              <b>Email</b> / Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              name=""
              placeholder="email@gmail.com"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete
              required
            />
          </div>
          <div class="mt-4">
            <label class="block text-gray-700 dark:text-white">
              <b>Contraseña</b> / Password
            </label>
            <input
              id="pass"
              type="password"
              name=""
              placeholder="Pon tu contraseña supersecreta"
              minlength="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>
          <div class="text-right mt-2">
            <a
              href="#"
              class="text-sm font-semibold underline text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 focus:text-blue-700"
            >
              ¿Olvidaste la contraseña, gañán?
            </a>
          </div>
          <button
            type="submit"
            class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
          >
            Login
          </button>
        </form>
        <hr class="my-6 border-gray-300 w-full" />
        <ButtonLoginSocial :type="'google'" />
        <p class="mt-8 text-gray-700 dark:text-white">
          ¿Necesitas una cuenta, amigo?
          <a
            href="#"
            class="underline text-blue-500 hover:text-blue-700 dark:hover:text-blue-500 font-semibold"
          >
            Crea una cuenta
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  layout: 'Auth',
}
</script>
