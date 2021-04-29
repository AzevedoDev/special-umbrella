import { Story, Meta } from '@storybook/react/types-6-0'
import Text, { TextProps } from '.'

export default {
  title: 'Text',
  component: Text,
  args: {
    children: 'Texto'
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['white', 'black']
      }
    }
  }
} as Meta

export const Default: Story<TextProps> = (args) => <Text {...args} />
