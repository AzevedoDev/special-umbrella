import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Header from '.'

const loterias = [
  {
    id: 0,
    nome: 'mega-sena'
  },
  {
    id: 1,
    nome: 'quina'
  },
  {
    id: 2,
    nome: 'lotofácil'
  },
  {
    id: 3,
    nome: 'lotomania'
  },
  {
    id: 4,
    nome: 'timemania'
  },
  {
    id: 5,
    nome: 'dia de sorte'
  }
]

const loteriaFiltrado = { id: '1', nome: 'mega-sena' }

describe('<Header />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Header
        loterias={loterias}
        title={loteriaFiltrado.nome}
        concourseNumber={loteriaFiltrado.id}
      />
    )

    expect(
      screen.getByRole('heading', { name: /MEGA-SENA/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render default values', () => {
    renderWithTheme(<Header loterias={loterias} />)

    expect(
      screen.getByRole('heading', { name: /MEGA-SENA/i })
    ).toBeInTheDocument()
  })
})
