<template>
  <div>
    <label
      v-if="label"
      :for="name"
      class="block text-gray-700 dark:text-sky-300"
    >
      {{ label }}
    </label>
    <input
      v-model="inputValue"
      @input="$emit('input', inputValue)"
      :id="name"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      class="w-full mt-2 px-4 py-3 rounded-lg font-medium tracking-wide text-navy-700 dark:text-white bg-gray-200 dark:bg-navy-700 focus:bg-gray-100 dark:focus:bg-navy-500 border-gray-200 dark:border-navy-700 focus:border-blue-500 focus:outline-none dark:placeholder-navy-300 dark:focus:placeholder-navy-500"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String, // becarefull cause you can have other values
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputValue: null,
    }
  },
  mounted() {
    this.inputValue = this.value
  },
  // better way but not working by the moment
  // computed: {
  //   inputValue: {
  //     // getters
  //     get() {
  //       return this.value
  //     },
  //     // setters
  //     set(newValue) {
  //       return newValue
  //     }
  //   }
  // }
}
</script>
