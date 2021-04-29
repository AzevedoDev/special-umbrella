import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Select from '.'

describe('<Select />', () => {
  const lotteries = [
    {
      id: 0,
      nome: 'mega-sena'
    },
    {
      id: 1,
      nome: 'quina'
    }
  ]
  it('should render and match with snapshot', () => {
    renderWithTheme(<Select lotteries={lotteries} />)

    expect(screen.getByLabelText(/select-lotteries/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/select-lotteries/i)).toMatchSnapshot()
  })
  it('should select a QUINA option', () => {
    renderWithTheme(<Select lotteries={lotteries} />)
    const select = screen.getByLabelText(/select-lotteries/i)
    select
    expect(screen.getByLabelText(/select-lotteries/i)).toBeInTheDocument()
  })
})
