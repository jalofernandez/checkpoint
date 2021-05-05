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
        <form class="mt-6" onsubmit="return false;">
          <div>
            <label class="block text-gray-700 dark:text-white">
              <b>Email</b> / Correo electrónico
            </label>
            <input
              id="email"
              v-model="auth.email"
              type="email"
              name=""
              placeholder="email@gmail.com"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete
            />
          </div>
          <div class="mt-4">
            <label class="block text-gray-700 dark:text-white">
              <b>Contraseña</b> / Password
            </label>
            <input
              id="pass"
              v-model="auth.password"
              type="password"
              name=""
              placeholder="Pon tu contraseña supersecreta"
              minlength="6"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            />
          </div>
          <div class="text-right mt-2">
            <a
              href="#"
              class="text-sm font-semibold underline text-gray-700 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 focus:text-blue-700"
              @click="sendToFirebaseDb()"
            >
              ¿Olvidaste la contraseña, gañán?
            </a>
          </div>
          <p class="text-red-500 pt-2">
            <b>{{ auth.error }}</b>
          </p>
          <!-- TODO: add following form validation alert
          <transition name="checkpoint-transition" appear>
            <div
              v-if="(auth.filled = false)"
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong class="font-bold">¡Hey!</strong>
              <span class="block sm:inline">
                Rellena los campos o no podremos logearte...
              </span>
              <span
                class="absolute top-0 bottom-0 right-0 px-4 py-3"
                @click="auth.filled = true"
              >
                <svg
                  class="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path
                    d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                  />
                </svg>
              </span>
            </div>
          </transition> -->
          <button
            type="submit"
            class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            @click="login()"
          >
            Login
          </button>
        </form>
        <hr class="my-6 border-gray-300 w-full" />
        <!-- <ButtonLoginSocial :type="'google'" @click="readFromRealtimeDb()" /> -->
        <ButtonLoginSocial :type="'google'" @click="loginWithGoogle()" />
        <p class="mt-8 text-gray-700 dark:text-white">
          ¿Necesitas una cuenta, amigo?
          <a
            href="#"
            class="underline text-blue-500 hover:text-blue-700 dark:hover:text-blue-500 font-semibold"
          >
            Crea una cuenta
          </a>
        </p>
        <!-- Write & read from a Firebase real database: 
        <p>
          {{ text.text }}
        </p>
        -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  layout: 'Auth',
  data: () => ({
    auth: {
      email: '',
      password: '',
      // filled: true,
      error: '',
    },
  }),
  methods: {
    // https://firebase.google.com/docs/auth/web/password-auth?hl=es
    async login() {
      // TODO: add following form validation alert
      // console.log(this.auth.filled)
      // if (this.auth.email === '' || this.auth.email === '') {
      //   this.auth.filled = false
      //   console.log(this.auth.filled)
      // }
      // this.auth.filled = true
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          this.auth.email,
          this.auth.password
        )
        alert(this.auth.email + ' ' + this.auth.password + ' :: Success')
        this.$router.push({
          path: '/',
        })
      } catch (e) {
        // TODO: handle all statusCodes & errorMessages in Firebase:
        // https://gist.github.com/Albejr/a38cdeac247ef177986c99629680afb4
        this.auth.error = e
        // alert(e)
        if (typeof e === 'object' && typeof e.code === 'string') {
          switch (e.code) {
            case 'auth/invalid-email':
              return (e.message = 'Introduce un email y que sea válido.')
            case 'auth/invalid-password':
              return (e.message =
                'El email es incorrecto o el usuario no existe.')
            case 'auth/wrong-password':
              return (e.message =
                'El email es incorrecto o el usuario no tiene aún contraseña.')
          }
        }
      }
    },
    // TODO: check the following code to login with Google:
    // async loginWithGoogle() {
    //   if (process.client) {
    //     try {
    //       const provider = new this.$fireModule.GoogleAuthProvider()
    //       const result = await this.$fireAuth.signInWithPopup(provider)
    //       console.log(result)
    //     } catch {
    //       // TODO: sohw error on a Toast or Modal dialog
    //       console.error('Login error')
    //     }
    //   }
    // },
    // Write & read from a Firebase real database:
    async sendToFirebaseDb() {
      const messageRef = this.$fire.database.ref('totalReviewCount')
      try {
        await messageRef.set({
          totalReviewCount: '724',
        })
      } catch (e) {
        alert('¡Error! ' + e)
        return
      }
      alert('¡Enviao!')
    },
    // async readFromRealtimeDb() {
    //   const messageRef = this.$fire.database.ref('totalReviewCount')
    //   try {
    //     const snapshot = await messageRef.once('value')
    //     alert(snapshot.val().totalReviewCount)
    //     this.text.text = snapshot.val().totalReviewCount
    //   } catch (e) {
    //     alert('¡Error! ' + e)
    //     // return
    //   }
    // },
  },
}
</script>
