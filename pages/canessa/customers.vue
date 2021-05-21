<template>
  <div>
    <section class="container p-5 relative">
      <p class="sticky top-20 z-40 pb-2 flex justify-start items-center bg-opacity-75 bg-white dark:bg-navy-900 dark:text-white backdrop-filter backdrop-blur-sm">
        <input
          v-model="searchQuery"
          type="text"
          class="w-80 px-4 py-3 rounded-lg border text-navy-700 dark:text-white bg-gray-200 dark:bg-navy-700 focus:bg-gray-100 dark:focus:bg-navy-500 border-gray-200 dark:border-navy-700 focus:border-blue-500 focus:outline-none dark:placeholder-navy-300 dark:focus:placeholder-navy-500"
          placeholder="Para buscar o filtrar..."
        />
        <button
          type="button"
          class="block rounded-lg px-3 py-1 ml-2 bg-navy-300 hover:bg-navy-500 focus:bg-navy-500 active:bg-navy-500 text-white font-semibold"
          @click="readFromRealtimeDb()"
        >
          Cargar usuarios
        </button>
        <button
          v-for="pageNumber in totalPages"
          :key="pageNumber.id"
          v-bind:key="pageNumber"
          @click="setPage(pageNumber)"
          type="button"
          class="block rounded-full px-3 py-1 ml-2 bg-navy-300 hover:bg-navy-500 focus:bg-navy-500 active:bg-navy-500 text-white font-semibold"
          :class="{
            current: currentPage === pageNumber,
            last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3),
            first: (pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)
          }">
            {{ pageNumber }}
        </button>
      </p>
      <div class="overflow-x-auto">
        <div
          class="min-w-screen flex items-center justify-center font-sans overflow-hidden"
        >
          <div class="w-full">
            <div class="bg-white dark:text-white shadow-md rounded my-6">
              <table class="min-w-max w-full table-auto">
                <thead>
                  <tr class="bg-gray-200 text-gray-500 dark:bg-navy-700 dark:text-navy-300 uppercase text-sm leading-normal">
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
                <tbody class="text-gray-600 text-base font-light">
                  <!-- TODO: fix data to can filter them
                  <tr
                    v-for="(customer, index) in filteredCustomers"
                    :key="index"
                    class="border-b border-gray-200 dark:border-navy-700 hover:bg-gray-100 dark:hover:bg-navy-700"
                  > -->
                  <tr
                    v-for="(customer, index) in customersPerPage"
                    :key="index"
                    class="border-b border-gray-200 dark:border-navy-700 
                    bg-white 
                    dark:bg-navy-900 hover:bg-gray-100 dark:hover:bg-navy-700"
                  >
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
                        <small class="mr-1 text-navy-700 dark:text-sky-300">
                          {{ [...customer.doggie.breed].sort().join(', ') }}
                        </small>
                      </div>
                    </td>
                    <!-- Doggie Name -->
                    <td class="py-3 px-4 text-left">
                      <div class="flex items-center">
                        <span class="font-medium capitalize text-navy-700 dark:text-sky-300">
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
                        )}-200 text-${getColorMood(customer.doggie.mood)}-700`"
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
                          v-if="owner.phone != ''"
                          class="mr-2 text-sm font-medium text-navy-700 dark:text-sky-300"
                        >
                          {{ owner.phone }}
                        </span>
                        <span v-else class="mr-2 text-sm text-gray-300 dark:text-navy-700">
                          600000000
                        </span>
                        <span v-if="owner.name != ''" class="capitalize text-navy-900 dark:text-sky-100">
                          {{ owner.name }}
                        </span>
                      </div>
                    </td>
                    <!-- Comments -->
                    <td class="py-3 px-4 text-left whitespace-nowrap">
                      <div class="flex items-center text-navy-700 dark:text-sky-300">
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
// IMP! If U want use local data instead Firebase´s one!
// import customers from '~/data/customers'

export default {
  name: 'Customers',
  layout: 'Default',
  data: () => ({
    searchQuery: '',
    customers: [],
    currentPage: 1,
    itemsPerPage: 36,
    resultCount: 0,
  }),
  computed: {
    // IMP! logic to filtering data incomplete by the moment...
    filteredCustomers() {
      return this.customers.filter(customer => {
        const doggieName = customer.doggie.name.toLowerCase();
        const doggieBreed = customer.doggie.breed.toString().toLowerCase();
        const doggieMood = customer.doggie.mood.toLowerCase();
        // const doggieOwner = this.getOwners(customer.owner);
        const doggieComs = customer.comment.toLowerCase();

        const searchTerm = this.searchQuery.toLowerCase();

        return doggieName.includes(searchTerm) ||
              doggieBreed.includes(searchTerm) ||
              doggieMood.includes(searchTerm) ||
              // doggieOwner.includes(searchTerm) ||
              doggieComs.includes(searchTerm);
      });
    },
    // IMP! Data loads with pagination options only
    customersPerPage() {
      if (!this.customers || this.customers.length != this.customers.length) return this.customers
      this.resultCount = this.customers.length
      if (this.currentPage >= this.totalPages) this.currentPage = this.totalPages
      var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
      return this.customers.slice(index, index + this.itemsPerPage)
    },
    totalPages() {
      if (this.resultCount == 0) return 1
      else return Math.ceil(this.resultCount / this.itemsPerPage)
    }
  },
  methods: {
    // TODO: check the following code to can filter by owner.name && owner.phone
    // getOwners(ownerArr) {
    //   console.log(ownerArr + ' :: ' + typeof ownerArr)
    //   let i, owname, owphone
    //   i = 0
    //   owname = ''
    //   owphone = ''
    //   for (i; i < ownerArr.length; i++) {
    //     owname += ownerArr.name[i]
    //     owphone += ownerArr.phone[i].toString()
    //     console.log(`
    //       ${owname} :: ${typeof owname}
    //       ${owphone} :: ${typeof owphone}
    //     `)
    //   }
    //   return owners
    // },

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

    // checkme() {
    //   console.log('Owner length :: ' + this.customers[2].owner.length)
    //   console.log(this.customers[1].customerId + ' :: ' + typeof this.customers[1].customerId)
    //   console.log(this.customers[1].doggie.name + ' :: ' + typeof this.customers[1].doggie.name)
    //   console.log(this.customers[1].doggie.breed + ' :: ' + typeof this.customers[1].doggie.breed)
    //   console.log(this.customers[1].doggie.mood + ' :: ' + typeof this.customers[1].doggie.mood)
    //   console.log('Owner :: ' + this.customers[1].owner + ' :: ' + typeof this.customers[1].owner)
    //   console.log(this.customers[2].comment + ' :: ' + typeof this.customers[2].comment)
    // },

    async readFromRealtimeDb() {
      const messageRef = this.$fire.database.ref()
      try {
        const snapshot = await messageRef.once('value')
        // alert('RealTimeDB conextion success! -> ' + snapshot.val())
        this.$toast.success(`Descargando &nbsp;<b>${snapshot.val().length}</b>&nbsp; usuarios de Firebase RealTimeDB`)
        this.customers = snapshot.val()
      } catch (e) {
        this.$toast.error('Error get data from RealTimeDB! -> ' + e.message)
        // return
      }
    },

    setPage(pageNumber) {
      this.currentPage = pageNumber
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
