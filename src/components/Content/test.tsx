import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Content from '.'
const concurso = {
  id: '5534',
  loteria: 1,
  numeros: ['17', '32', '41', '58', '69'],
  data: '2021-04-26T21:12:23.562Z'
}

jest.mock('components/DrawnLotteryNumber', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock DrawnLotteryNumber"></div>
    }
  }
})

jest.mock('components/Text', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Text"></div>
    }
  }
})

describe('<Content />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Content concurso={concurso} />)

    expect(screen.getAllByTestId('Mock DrawnLotteryNumber')).toHaveLength(10)

    expect(screen.getAllByTestId('Mock Text')).toHaveLength(2)

    expect(container.firstChild).toMatchSnapshot()
  })
})
