<template>
  <table class="min-w-max w-full table-auto">
    <thead>
      <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <th
          v-for="(key, index) in columns"
          :key="index"
          :class="{ active: sortKey == key }"
          class="py-3 px-4 text-left"
          @click="sortBy(key)"
        >
          {{ key | capitalize }}
          <span v-if="sortOrders[key] > 0">⬇️</span>
          <span v-if="sortOrders[key] < 0">⬆️</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(entry, index) in filteredData"
        :key="index"
        class="border-b border-gray-200 hover:bg-gray-100"
      >
        <td
          v-for="(key, index) in columns"
          :key="index"
          class="py-3 px-4 text-left whitespace-nowrap"
        >
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  props: {
    data: {
      type: Array,
      default: [],
    },
    columns: {
      type: Array,
      default: [],
    },
    filterKey: {
      type: String,
      default: '',
    },
  },
  data() {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
  }
}
</script>
