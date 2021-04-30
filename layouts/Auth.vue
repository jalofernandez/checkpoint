<template>
  <div>
    <main class="dark:bg-gray-700">
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
