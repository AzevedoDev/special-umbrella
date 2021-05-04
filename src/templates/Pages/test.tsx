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

jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>
    }
  }
})

jest.mock('components/Content', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Content"></div>
    }
  }
})

describe('<TemplatePage />', () => {
  it('should render and match with snapshot', () => {
    renderWithTheme(
      <TemplatePage
        concurso={concurso}
        loterias={loterias}
        loteriaFiltrado={loteriaFiltrado}
      />
    )

    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Content')).toBeInTheDocument()
  })
})
