import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Content from '.'
const concurso = {
  id: '5534',
  loteria: 1,
  numeros: ['17', '32', '41', '58', '69'],
  data: '2021-04-26T21:12:23.562Z'
}

describe('<Content />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Content concurso={concurso} />)

    expect(
      screen.getByText(
        /Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA/i
      )
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
