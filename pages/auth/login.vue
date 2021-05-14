<template>
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
      class="bg-white dark:bg-navy-900 w-5/6 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen mx-6 lg:mx-16 xl:mx-12 flex items-start justify-center relative"
    >
      <!-- Login :: USER van.vizcaya@gmail.com" PASS "refwref34ref" -->
      <transition name="checkpoint-fade">
        <div v-if="isLogin" class="w-full h-100 absolute z-0 mt-2 md:mt-12">
          <div class="flex justify-between items-center">
            <LogoBrand />
            <ThemeSwitch />
          </div>
          <h1
            class="text-xl md:text-2xl font-bold text-navy-700 dark:text-sky-300 leading-tight mt-8"
          >
            Necesitamos conocer quién eres:
          </h1>
          <form class="mt-6" onsubmit="return false;">
            <BaseInput
                v-model="auth.email"
                class="mt-4"
                type="email"
                name="email"
                label="Email / Correo electrónico"
                placeholder="tu_email@gmail.com"
              />
              <BaseInput
                v-model="auth.password"
                class="mt-4"
                type="password"
                name="password"
                label="Contraseña / Password"
                placeholder="Escribe tu contraseña supersecreta"
              />
            <div class="text-right mt-2">
              <a
                href="#"
                class="text-sm font-semibold underline text-navy-700 dark:text-sky-300 hover:text-blue-700 dark:hover:text-blue-500 focus:text-blue-700"
                @click="forgotPassword()"
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
          <ButtonLoginSocial :type="'google'" @click="loginWithGoogle()" />
          <!-- to enable a link to SignUp form -->
          <p class="mt-8 text-gray-700 dark:text-sky-300">
            ¿Necesitas una cuenta, amigo?
            <a
              href="#"
              class="underline text-blue-500 hover:text-blue-700 dark:hover:text-blue-500 font-semibold"
              @click="toggleLogin()"
            >
              Crea una cuenta
            </a>
          </p>
        </div>
      </transition>
      <!-- Register -->
      <transition name="checkpoint-fade">
        <div v-if="!isLogin" class="w-full h-100 absolute z-10 mt-2 md:mt-12">
          <div class="flex justify-between items-center">
            <LogoBrand />
            <ThemeSwitch />
          </div>
          <h1
            class="text-xl md:text-2xl font-bold text-gray-700 dark:text-sky-300 leading-tight mt-8"
          >
            Regístrate aquí:
          </h1>
          <form class="mt-6" onsubmit="return false;">
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
              v-model="auth.password"
              class="mt-4"
              type="password"
              name="password"
              label="Contraseña / Password"
              placeholder="Invéntate contraseña supersecreta"
            />
            <p class="text-red-500 pt-2">
              <b>{{ auth.error }}</b>
            </p>
            <button
              type="submit"
              class="w-full block bg-green-500 hover:bg-green-400 focus:bg-green-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              @click="registerUser()"
            >
              Registrar nuevo usuario
            </button>
          </form>
          <hr class="my-6 border-gray-300 w-full" />
          <!-- to enable a link to SignUp form -->
          <p class="mt-8 text-gray-700 dark:text-sky-300">
            ¿Ya tienes cuenta y sólo quieres logearte?
            <a
              href="#"
              class="underline text-blue-500 hover:text-blue-700 dark:hover:text-blue-500 font-semibold"
              @click="toggleLogin()"
            >
              Ir a login
            </a>
          </p>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth' // 👈 this could also be in your `firebase.js` file

export default {
  name: 'Login',
  layout: 'Auth',
  data: () => ({
    isLogin: true,
    auth: {
      name: '',
      email: '',
      password: '',
      // filled: true,
      error: '',
    },
  }),
  methods: {
    toggleLogin() {
      this.isLogin = !this.isLogin
    },
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
    // https://firebase.google.com/docs/auth/web/google-signin?hl=es
    loginWithGoogle() {
      // const provider = new this.$fire.auth.GoogleAuthProvider() // "this.$fire" not owrks use "firebase" instead
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.$router.push({
            path: '/',
          })
        })
        .catch((e) => {
          alert(e.message)
        })
    },
    async forgotPassword() {
      try {
        await this.$fire.auth.sendPasswordResetEmail(this.auth.email)
        alert(this.auth.email + ' :: reset Pass')
        this.auth.error =
          'Revisa tu bandeja de entrada para obtener el link para cambiar la contraseña'
      } catch (e) {
        this.auth.error = e
      }
    },
    // https://firebase.google.com/docs/auth/web/password-auth?hl=es
    async registerUser() {
      console.log(`
        ${this.auth.name} :: ${typeof this.auth.name}
        ${this.auth.email} :: ${typeof this.auth.email}
        ${this.auth.password} :: ${typeof this.auth.password}
      `)
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.auth.email,
          this.auth.password
        )
        alert('Nuevo ususario: ' + this.auth.email + ' :: ' + this.auth.password)
        await this.updateUserName(this.auth.name)
        // console.log('🔥 : ' + this.$fire.auth.currentUser.displayName + ' : 🔥')
      } catch (e) {
        this.auth.error = e
      }
    },
    // https://firebase.google.com/docs/auth/web/manage-users?hl=es
    updateUserName(name) {
      const user = firebase.auth().currentUser
      user.updateProfile({
        displayName: name,
      })
      .then((name) => {
        alert('¡Nombre de usuario actualizado a: "' + name + '"!')
      })
      .catch((e) => {
        this.auth.error = e.message
      })
    },
    // https://firebase.google.com/docs/auth/web/manage-users?hl=es#send_a_user_a_verification_email
    // TODO: add asap user email validation + 
  },
}
</script>

<style scoped>
.checkpoint-fade-enter-active,
.checkpoint-fade-leave-active {
  transition: opacity .33s
}

.checkpoint-fade-enter,
.checkpoint-fade-leave-to {
  opacity: 0
}
</style>
