import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Content from '.'

describe('<Content />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Content />)

    expect(
      screen.getByText(
        /Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA/i
      )
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
