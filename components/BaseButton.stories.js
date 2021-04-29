
// import MyButton from './MyButton'

export default {
  title: 'Button',
  component: BaseButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
      defaultValue: 'primary'
    },
    round: { control: 'boolean' },
    text: {
      control: 'text',
      defaultValue: 'Awesome Button'
    }
  }
}

export const BaseButton = (arg, { argTypes }) => ({
  components: { BaseButton },
  props: Object.keys(argTypes),
  template: '<BaseButton v-bind="$props" />'
})
