<template>
  <div class="min-h-screen">
    <section class="container p-5 relative">
      <p class="sticky top-20 z-40 pb-2 flex justify-start items-center bg-opacity-75 bg-white dark:bg-navy-900 dark:text-white backdrop-filter backdrop-blur-sm">
        <input
          v-model="filter"
          type="text"
          class="w-80 px-4 py-3 rounded-lg border text-navy-700 dark:text-white bg-gray-200 dark:bg-navy-700 focus:bg-gray-100 dark:focus:bg-navy-500 border-gray-200 dark:border-navy-700 focus:border-blue-500 focus:outline-none dark:placeholder-navy-300 dark:focus:placeholder-navy-500"
          placeholder="Para buscar o filtrar..."
        />
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
                    <th class="py-3 px-4 text-left">Brand</th>
                    <th class="py-3 px-4 text-left">Title</th>
                    <th class="py-3 px-4 text-left">Image</th>
                    <th class="py-3 px-4 text-left">Tags</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, index) in filteredRows"
                    :key="index"
                    class="border-b border-gray-200 dark:border-navy-700 
                    bg-white 
                    dark:bg-navy-900 hover:bg-gray-100 dark:hover:bg-navy-700"
                  >
                    <td class="py-3 px-4 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <span
                          v-html="row.id"
                          class="font-medium text-green-200"
                        ></span>
                      </div>
                    </td>
                    <td class="py-3 px-4 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <span
                          v-html="highlightMatches(row.brand)"
                          class="font-medium text-sm text-navy-700 dark:text-sky-300"
                        ></span>
                      </div>
                    </td>
                    <td class="py-3 px-4 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <span
                          v-html="highlightMatches(row.title)"
                          class="font-medium text-sm text-navy-700 dark:text-sky-300 truncate w-64 inline-block"
                        ></span>
                      </div>
                    </td>
                    <td class="py-3 px-4 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <span
                          v-html="highlightMatches([...row.tags].sort().join(', '))"
                          class="font-medium text-sm text-navy-900 dark:text-sky-100"
                        ></span>
                      </div>
                    </td>
                    <td class="py-3 px-4 text-left whitespace-nowrap text-sm truncate w-80 inline-block">
                      <div class="flex items-center">
                        <span
                          v-html="highlightMatches(row.img)"
                          :title="row.img"
                          class="font-medium text-sm text-navy-700 dark:text-sky-300 truncate w-80 inline-block"
                        ></span>
                      </div>
                    </td>
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
import portfolio from '~/data/portfolio'

export default {
  name: 'Portfolio',
  layout: 'Default',
  data: () => ({
    filter: '',
    portfolio: portfolio,
    currentPage: 1,
    itemsPerPage: 18,
    resultCount: 0,
  }),
  computed: {
    // IMP! 1. Data loads with filtering only
    // filteredRows() {
    //   return this.portfolio.filter(row => {
    //     const brand = row.brand.toLowerCase();
    //     const title = row.title.toLowerCase();
    //     const tags = row.tags.toString().toLowerCase();
    //     const searchTerm = this.filter.toLowerCase();

    //     return brand.includes(searchTerm) ||
    //       title.includes(searchTerm) ||
    //       tags.includes(searchTerm);
    //   });
    // },
    // IMP! 2. Data loads with pagination & filtering
    filteredRows() {
      if (!this.portfolio || this.portfolio.length != this.portfolio.length) {
        return this.portfolio.filter(row => {
          const brand = row.brand.toLowerCase()
          const title = row.title.toLowerCase()
          const img = row.img.toLowerCase()
          const tags = row.tags.toString().toLowerCase()
          const searchTerm = this.filter.toLowerCase()

          return brand.includes(searchTerm) ||
            title.includes(searchTerm) ||
            img.includes(searchTerm) ||
            tags.includes(searchTerm)
        });
      }
      this.resultCount = this.portfolio.length
      if (this.currentPage >= this.totalPages) this.currentPage = this.totalPages
      var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
      return this.portfolio.slice(index, index + this.itemsPerPage).filter(row => {
        const brand = row.brand.toLowerCase()
        const title = row.title.toLowerCase()
        const img = row.img.toLowerCase()
        const tags = row.tags.toString().toLowerCase()
        const searchTerm = this.filter.toLowerCase()

        return brand.includes(searchTerm) ||
          title.includes(searchTerm) ||
          img.includes(searchTerm) ||
          tags.includes(searchTerm)
      });
    },
    totalPages() {
      if (this.resultCount == 0) return 1
      else return Math.ceil(this.resultCount / this.itemsPerPage)
    }
  },
  methods: {
    highlightMatches(text) {
      const matchExists = text.toLowerCase().includes(this.filter.toLowerCase())
      if (!matchExists) return text

      const re = new RegExp(this.filter, 'ig')
      return text.replace(re, matchedText => `<strong>${matchedText}</strong>`)
    },
    setPage(pageNumber) {
      this.currentPage = pageNumber
    },
    // TODO: set data to firebase´s RealTimeDB:
    // async readFromRealtimeDb() {
    //   const messageRef = this.$fire.database.ref()
    //   try {
    //     const snapshot = await messageRef.once('value')
    //     alert('RealTimeDB conextion success! -> ' + snapshot.val())
    //     this.customers = snapshot.val()
    //   } catch (e) {
    //     alert('Error get data from RealTimeDB! -> ' + e.message)
    //     // return
    //   }
    // },
  },
}
</script>
