import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import TemplatePage from '.'

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
const concurso = {
  id: '5534',
  loteria: 1,
  numeros: ['17', '32', '41', '58', '69'],
  data: '2021-04-26T21:12:23.562Z'
}
const loteriaFiltrado = { id: '1', nome: 'mega-sena' }

describe('<Select />', () => {
  it('should render and match with snapshot', () => {
    renderWithTheme(
      <TemplatePage
        concurso={concurso}
        loterias={loterias}
        loteriaFiltrado={loteriaFiltrado}
      />
    )

    expect(screen.getByDisplayValue(/mega-sena/i)).toBeInTheDocument()
    expect(screen.getByDisplayValue(/mega-sena/i)).toMatchSnapshot()
  })
})
