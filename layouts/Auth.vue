<template>
  <div>
    <main class="bg-white dark:bg-navy-900">
      <transition name="checkpoint-transition" appear>
        <Nuxt />
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Auth',
}
</script>
