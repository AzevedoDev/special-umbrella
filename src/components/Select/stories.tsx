import { Story, Meta } from '@storybook/react/types-6-0'
import Select, { SelectProps } from '.'

export default {
  title: 'Select',
  component: Select,
  args: {
    lotteries: [
      {
        id: 0,
        nome: 'mega-sena'
      },
      {
        id: 1,
        nome: 'quina'
      }
    ]
  }
} as Meta

export const Default: Story<SelectProps> = (args) => <Select {...args} />
