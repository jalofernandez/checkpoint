<template>
  <div class="min-h-screen">
    <section class="container p-5 relative">
      <p class="sticky top-20 z-40 pb-2 flex justify-start items-center bg-opacity-75 bg-white dark:bg-navy-900 dark:text-white backdrop-filter backdrop-blur-sm">
        <input
          v-model="searchQuery"
          type="query"
          class="w-80 px-4 py-3 rounded-lg border text-navy-700 dark:text-white bg-gray-200 dark:bg-navy-700 focus:bg-gray-100 dark:focus:bg-navy-500 border-gray-200 dark:border-navy-700 focus:border-blue-500 focus:outline-none dark:placeholder-navy-300 dark:focus:placeholder-navy-500"
          placeholder="Para buscar o filtrar..."
        />
      </p>
      <div class="overflow-x-auto">
        <div
          class="min-w-screen flex items-center justify-center font-sans overflow-hidden"
        >
          <div class="w-full">
            <div
              id="demo"
              class="bg-white dark:text-white shadow-md rounded my-6"
            >
              <DemoGrid
                :data="gridData"
                :columns="gridColumns"
                :filter-key="searchQuery"
              ></DemoGrid>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Negocios',
  layout: 'Default',
  data() {
    return {
      searchQuery: '',
      // gridColumns: ['Id', 'Raza', 'Perrete', 'Caracter', 'Dueño', 'Notas', 'Citas'],
      gridColumns: ['customerId', 'doggie', 'comment'],
      gridData: [
        {
          "customerId": 1,
          "doggie": {
            "name": "andi",
            "breed": ["bichón maltés"],
            "mood": "Simpático jugetón"
          },
          // "owner": [
          //   {
          //     "name": "lina",
          //     "phone": 696620723
          //   }
          // ],
          "comment": "Es superbueno :)",
          // "dates": [
          //   {
          //     "date": "2018-08-10T11:30:00-0400",
          //     "groom": "calza mitad patas rebajo laterales cabeza (mucho nudo extra nudos)",
          //     "price": 33
          //   },
          //   {
          //     "date": "2017-08-10T00:00:00-0400",
          //     "groom": "calza 19mm cabeza cuadrada oreja recta",
          //     "price": 26
          //   },
          //   {
          //     "date": "2017-06-13T00:00:00-0400",
          //     "groom": "calza 19mm cabeza cuadrada",
          //     "price": 26
          //   },
          //   {
          //     "date": "2017-05-15T00:00:00-0400",
          //     "groom": "baño y retirada nudos (mucho nudo)",
          //     "price": 25
          //   },
          //   {
          //     "date": "2017-02-20T00:00:00-0400",
          //     "groom": "calza 19mm cabeza cuadrada",
          //     "price": 26
          //   }
          // ]
        },
        {
          "customerId": 2,
          "doggie": {
            "name": "rondo",
            "breed": ["pastor alemán"],
            "mood": "Simpático jugetón"
          },
          // "owner": [
          //   {
          //     "name": "dani",
          //     "phone": 661579982
          //   }
          // ],
          "comment": "Simpático jugetón",
          // "dates": [
          //   {
          //     "date": "2020-12-15T17:30:00-0400",
          //     "groom": "baño y retirada de pelo muerto",
          //     "price": 0
          //   }
          // ]
        },
        // { id: 'Chuck Norris', raza: Infinity },
        // { id: 'Bruce Lee', raza: 9000 },
        // { id: 'Jackie Chan', raza: 7000 },
        // { id: 'Jet Li', raza: 8000 },
      ],
    }
  }
}
</script>
