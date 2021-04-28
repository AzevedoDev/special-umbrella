import { Story, Meta } from '@storybook/react/types-6-0'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'mega',
      values: [
        {
          name: 'mega',
          value: '#6BEFA3'
        },
        {
          name: 'quina',
          value: '#8666EF'
        },
        {
          name: 'lotoFacil',
          value: '#DD7AC6'
        },
        {
          name: 'lotoMania',
          value: '#FFAB64'
        },
        {
          name: 'timeMania',
          value: '#5AAD7D'
        },
        {
          name: 'diaSorte',
          value: '#BFAF83'
        }
      ]
    }
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
