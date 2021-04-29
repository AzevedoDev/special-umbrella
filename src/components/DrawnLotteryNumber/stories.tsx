import { Story, Meta } from '@storybook/react/types-6-0'
import LotterySortedNumber, { DrawnLotteryNumberProps } from '.'

export default {
  title: 'LotterySortedNumber',
  component: LotterySortedNumber,
  args: {
    lotteryNumber: '01'
  }
} as Meta

export const Default: Story<DrawnLotteryNumberProps> = (args) => (
  <LotterySortedNumber {...args} />
)
