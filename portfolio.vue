<template>
  <div>
    <section class="container">
      <p class="h-36 flex justify-center items-center">
        <button
          type="button"
          class="block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
          @click="getData()"
        >
          Cargar datos
        </button>
      </p>
    </section>
    <section class="container">
      <input
        v-model="filter"
        type="text"
        class="px-4 py-3 rounded-lg bg-gray-200 mb-4 border focus:border-blue-500 focus:bg-white focus:outline-none"
        placeholder="Para buscar o filtrar..."
      />
      <table>
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-3 px-4 text-left">Brand</th>
            <th class="py-3 px-4 text-left">Title</th>
            <th class="py-3 px-4 text-left">Tags</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in filteredRows"
            :key="index"
            class="border-b border-gray-200 hover:bg-gray-100"
          >
            <td class="py-3 px-4 text-left whitespace-nowrap" v-html="highlightMatches(row.brand)"></td>
            <td class="py-3 px-4 text-left whitespace-nowrap" v-html="highlightMatches(row.title)"></td>
            <td class="py-3 px-4 text-left whitespace-nowrap" v-html="highlightMatches([...row.tags].sort().join(', '))"></td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  layout: 'Default',
  data: () => ({
    filter: '',
    portfolio: [
      { brand: 'Upplication', title: 'Upplication + Movistar promo rollup', tags: ['all', 'graph',] },
      { brand: 'British Knights', title: 'British Knights shoesbox packaging', tags: ['all', 'pack', 'photo'] },
      { brand: 'Upplication', title: 'Upplication business card cover', tags: ['all', 'layout'] },
      { brand: 'Upplication', title: 'Upplication Developers business card', tags: ['all', 'layout',] },
      { brand: 'Widitrade', title: 'EcomerzPro email layout', tags: ['all', 'layout'] }
    ],
  }),
  computed: {
    filteredRows() {
      return this.portfolio.filter(row => {
        const brand = row.brand.toLowerCase();
        const title = row.title.toLowerCase();
        const tags = row.tags.toString().toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return brand.includes(searchTerm) ||
          title.includes(searchTerm) ||
          tags.includes(searchTerm);
      });
    },
  },
  methods: {
    highlightMatches(text) {
      const matchExists = text.toLowerCase().includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, 'ig');
      return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
    },
    getData() {
      alert('Load data from RealTimeDB in firebase, folk!')
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
