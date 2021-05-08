<template>
  <div>
    <section class="container">
      <p class="h-36 flex justify-center items-center">
        <button
          type="button"
          class="block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
          @click="readFromRealtimeDb()"
        >
          Cargar usuarios
        </button>
      </p>
    </section>
    <!-- customers TAILWINDCSS :: TABLE -->
    <section class="container">
      <div class="overflow-x-auto">
        <div
          class="min-w-screen flex items-center justify-center font-sans overflow-hidden"
        >
          <div class="w-full">
            <div class="bg-white dark:text-white shadow-md rounded my-6">
              <table class="min-w-max w-full table-auto">
                <caption>
                  <span>{{ customers.length }}</span>
                </caption>
                <thead>
                  <tr
                    class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                  >
                    <th class="py-3 px-4 text-left">ID</th>
                    <th class="py-3 px-4 text-left">Raza</th>
                    <th class="py-3 px-4 text-left">Perrete</th>
                    <th class="py-3 px-4 text-center">Caracter</th>
                    <th class="py-3 px-4 text-left">Dueño</th>
                    <th class="py-3 px-4 text-left">Notas</th>
                    <th class="py-3 px-4 text-right">Citas</th>
                    <!-- <th class="py-3 px-4 text-center">Acciones</th> -->
                  </tr>
                </thead>
                <tbody
                  v-for="customer in customers.slice(12, 26)"
                  :key="customer.customerId"
                  class="text-gray-600 text-base font-light"
                >
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <!-- Customer ID -->
                    <td class="py-3 px-4 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <span class="font-medium text-green-200">
                          {{ customer.customerId }}
                        </span>
                      </div>
                    </td>
                    <!-- Doggie Breed -->
                    <td class="py-3 px-4 text-center">
                      <div class="flex items-center">
                        <div
                          :class="[
                            'flex',
                            'items-center',
                            'justify-center',
                            'mr-2',
                            { churruskus: customer.doggie.breed.length > 1 },
                          ]"
                        >
                          <img
                            v-for="(breed, index) in customer.doggie.breed"
                            :key="index"
                            class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                            :src="require(`~/assets/doggies/bichon-maltes.png`)"
                          />
                        </div>
                        <small
                          v-for="(breed, index) in customer.doggie.breed"
                          :key="index"
                          class="mr-1"
                        >
                          <!-- {{ breed }}  -->
                          {{ getDoggiePic(breed) }}
                        </small>
                      </div>
                    </td>
                    <!-- Doggie Name -->
                    <td class="py-3 px-4 text-left">
                      <div class="flex items-center">
                        <span class="font-medium capitalize">
                          {{ customer.doggie.name }}
                        </span>
                      </div>
                    </td>
                    <!-- Doggie Mood -->
                    <td class="py-3 px-4 text-center">
                      <span
                        v-if="customer.doggie.mood"
                        class="py-0.5 px-2 rounded-full text-xs"
                        :class="`bg-${getColorMood(
                          customer.doggie.mood
                        )}-200 text-${getColorMood(customer.doggie.mood)}-600`"
                      >
                        {{ customer.doggie.mood }}
                      </span>
                    </td>
                    <!-- Owner Name + Phone -->
                    <td class="py-3 px-4 text-left whitespace-nowrap">
                      <div
                        v-for="(owner, index) in customer.owner"
                        :key="index"
                        class="flex items-center"
                      >
                        <span
                          v-if="owner.phone != null"
                          class="text-sm font-medium mr-2"
                        >
                          {{ owner.phone }}
                        </span>
                        <span v-else class="text-sm text-gray-300 mr-2">
                          600000000
                        </span>
                        <span v-if="owner.name != null" class="capitalize">
                          {{ owner.name }}
                        </span>
                      </div>
                    </td>
                    <!-- Comments -->
                    <td class="py-3 px-4 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <small>{{ customer.comment }}</small>
                      </div>
                    </td>
                    <!-- Number of Dates -->
                    <td class="py-3 px-4 text-left whitespace-nowrap">
                      <div class="flex items-center justify-end">
                        <span class="font-bold text-indigo-300">
                          {{ customer.dates.length }}
                        </span>
                      </div>
                    </td>
                    <!-- Actions -->
                    <!-- <td class="py-3 px-4 text-center">
                      <div class="flex item-center justify-center">
                        <div
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                        <div
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                        <div
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </div>
                    </td> -->
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Customers',
  layout: 'Default',
  data: () => ({
    customers: [],
  }),
  methods: {
    // Write & read from a Firebase real database:
    // async sendToFirebaseDb() {
    //   const messageRef = this.$fire.database.ref('totalReviewCount')
    //   try {
    //     await messageRef.set({
    //       totalReviewCount: '724',
    //     })
    //   } catch (e) {
    //     alert('¡Error! ' + e)
    //     return
    //   }
    //   alert('¡Enviao!')
    // },
    async readFromRealtimeDb() {
      const messageRef = this.$fire.database.ref()
      try {
        const snapshot = await messageRef.once('value')
        alert('RealTimeDB conextion success! -> ' + snapshot.val())
        this.customers = snapshot.val()
      } catch (e) {
        alert('Error get data from RealTimeDB! -> ' + e.message)
        // return
      }
    },
    formatDate(dateStr) {
      const date = new Date(dateStr)
      // return date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
      return date.toLocaleDateString('en-GB')
    },
    getDoggiePic(breed) {
      return breed
    },
    getColorMood(mood) {
      // TODO: why the following code is broke?!
      // mood === 'Simpático jugetón' ? 'green'
      // : mood === 'Nervioso' ? 'yellow'
      // : mood === 'Muerde' ? 'red'
      // : 'purple'
      if (mood === 'Simpático jugetón' || mood === 'Bueno / sumiso') {
        return 'green'
      } else if (mood === 'Nervioso') {
        return 'yellow'
      } else if (mood === 'Muerde') {
        return 'red'
      } else {
        return 'purple'
      }
    },
  },
}
</script>

<style scoped>
.churruskus img {
  margin-left: -0.5rem;
}
.churruskus img:first-child {
  margin-left: 0;
}
</style>
