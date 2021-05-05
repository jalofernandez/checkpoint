export default function ({ app, route, redirect }) {
  if (route.path !== '/auth/login') {
    if (!app.$fire.auth.currentUser) {
      return redirect('/auth/login')
    }
  } else if (route.path === '/auth/login') {
    if (!app.$fire.auth.currentUser) {
      //
    } else {
      return redirect('/')
    }
  }
}
