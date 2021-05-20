const actions = {
  async onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      // remove state
      state.commit('SET_USER', null)
      // redirect from here
      await this.$router.push({
        path: '/auth/login',
      })
    } else {
      const { uid, email, displayName, emailVerified } = authUser
      state.commit('SET_USER', {
        uid,
        email,
        displayName,
        emailVerified,
      })
    }
  },

  // TODO: https://github.com/lupas/nuxt-firebase-demo/blob/master/store/actions.js

  // async nuxtServerInit({ dispatch }, ctx) {
  //   // INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'

  //   /** Get the VERIFIED authUser on the server */
  //   if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
  //     const { allClaims: claims, ...authUser } = ctx.res.locals.user

  //     console.info(
  //       'Auth User verified on server-side. User: ',
  //       authUser,
  //       'Claims:',
  //       claims
  //     )

  //     await dispatch('onAuthStateChanged', {
  //       authUser,
  //       claims,
  //     })
  //   }
  // },

  // async onAuthStateChanged({ commit }, { authUser }) {
  //   if (!authUser) {
  //     commit('RESET_STORE')
  //     return
  //   }
  //   if (authUser && authUser.getIdToken) {
  //     try {
  //       const idToken = await authUser.getIdToken(true)
  //       console.info('idToken', idToken)
  //     } catch (e) {
  //       console.error(e)
  //     }
  //   }
  //   commit('SET_AUTH_USER', { authUser })
  // },

  // checkVuexStore(ctx) {
  //   if (this.$fire.auth === null) {
  //     throw 'Vuex Store example not working - this.$fire.auth cannot be accessed.'
  //   }

  //   alert(
  //     'Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___'
  //   )
  // },
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },

  // TODO: https://github.com/lupas/nuxt-firebase-demo/blob/master/store/mutations.js

  // RESET_STORE: (state) => {
  //   Object.assign(state, initialState())
  // },

  // SET_AUTH_USER: (state, { authUser }) => {
  //   state.authUser = {
  //     uid: authUser.uid,
  //     email: authUser.email
  //   }
  // }
}

const state = () => ({
  user: null,

  // https://github.com/lupas/nuxt-firebase-demo/blob/master/store/state.js
  // authUser: null
})

const getters = {
  getUser(state) {
    return state.user
  },

  // https://github.com/lupas/nuxt-firebase-demo/blob/master/store/getters.js

  // isLoggedIn: (state) => {
  //   try {
  //     return state.authUser.uid !== null
  //   } catch {
  //     return false
  //   }
  // }
}

export default {
  actions,
  mutations,
  state,
  getters,
}
