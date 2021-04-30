<template>
  <div>
    <section class="container">
      <!-- component -->
      <div
        class="bg-gray-100 m-auto w-96 h-64 mt-5"
        :style="`
          background-image: url('https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&h=350');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;`"
      >
        <div class="flex flex-row items-end h-full w-full">
          <div
            class="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200"
          >
            <h3 class="text-base font-bold leading-5 uppercase">
              Nostromo carrier spaceship logo
            </h3>
            <div class="inline-flex items-center">
              <span class="capitalize font-base text-xs my-1 mr-1">
                Agnezmo Tuginem
              </span>
              <svg
                class="stroke-current stroke-1 text-blue-600 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex flex-row justify-between">
              <div class="flex flex-row">
                <div class="w-max inline-flex items-center">
                  <svg
                    class="w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span class="text-xs ml-1 antialiased">1</span>
                </div>
                <div class="w-max inline-flex ml-4 items-center">
                  <svg
                    class="w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    ill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="text-xs ml-1 antialiased">1 Hours ago</span>
                </div>
              </div>
              <div class="w-max">
                <svg
                  class="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full bg-gray-100 dark:bg-gray-800 rounded-t-full">
      <div class="container">
        <!-- component -->
        <div class="flex items-center justify-center">
          <div
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
          >
            <!-- 1 card -->
            <article
              class="relative bg-white py-6 px-6 rounded-2xl w-64 my-4 shadow-xl"
            >
              <div
                class="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6"
              >
                <!-- svg  -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div class="mt-8">
                <p class="text-xl font-semibold my-2">App Development</p>
                <div class="flex space-x-2 text-gray-400 text-sm">
                  <!-- svg  -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>Marketing Team</p>
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                  <!-- svg  -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>1 Weeks Left</p>
                </div>
                <div class="border-t-2"></div>

                <div class="flex justify-between">
                  <div class="my-2">
                    <p class="font-semibold text-base mb-2">Team Member</p>
                    <div class="flex space-x-2">
                      <img
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        class="w-6 h-6 rounded-full"
                      />
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU"
                        class="w-6 h-6 rounded-full"
                      />
                    </div>
                  </div>
                  <div class="my-2">
                    <p class="font-semibold text-base mb-2">Progress</p>
                    <div class="text-base text-gray-400 font-semibold">
                      <p>34%</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <BaseLink />
    </section>
  </div>
</template>

<script>
// not necessary cause "components: true" option set is enabled in "nuxt.config" file
// import ThemeSwitch from '@/components/ThemeSwitch'
// import BaseLink from '@/components/BaseLink'

export default {
  // components: { ThemeSwitch, BaseLink },
  layout: 'default',
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
main section {
  min-height: 50vh;
}
</style>
