// https://vue-test-utils.vuejs.org/
import ButtonLoginSocial from '@/components/ButtonLoginSocial.vue'
import { shallowMount } from '@vue/test-utils'


describe('Auth -> ButtonLoginSocial', () => {
  // que se renderice correctamente con su configuración básica
  test('should be render', () => {
    const wrapper = shallowMount(ButtonLoginSocial)
    expect(wrapper.vm).toBeTruthy()
  })
})
