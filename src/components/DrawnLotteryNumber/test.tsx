import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import LotterySortedNumber from '.'

describe('<LotterySortedNumber />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <LotterySortedNumber lotteryNumber="01" />
    )

    expect(screen.getByText(/01/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
