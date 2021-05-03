import { Story, Meta } from '@storybook/react/types-6-0'
import Header, { HeaderProps } from '.'

export default {
  title: 'Header',
  component: Header,
  args: {
    title: 'mega-sena',
    concourseNumber: '1020',
    loterias: [
      {
        id: 0,
        nome: 'mega-sena'
      },
      {
        id: 1,
        nome: 'quina'
      }
    ]
  },
  argTypes: {
    title: {
      control: {
        type: 'select',
        options: [
          'mega-sena',
          'quina',
          'lotofácil',
          'lotomania',
          'timemania',
          'dia de sorte'
        ]
      }
    }
  }
} as Meta

export const Default: Story<HeaderProps> = (args) => <Header {...args} />
