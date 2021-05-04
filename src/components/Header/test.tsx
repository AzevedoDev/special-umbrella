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

const loteriaFiltrado = {
  id: '1',
  nome: 'mega-sena',
  data: '2021-05-02T01:59:06.186Z'
}

jest.mock('components/Logo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Logo"></div>
    }
  }
})

jest.mock('components/Select', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Select"></div>
    }
  }
})

jest.mock('components/Text', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <p data-testid="Mock Text">mega-sena</p>
    }
  }
})

describe('<Header />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Header
        loterias={loterias}
        title={loteriaFiltrado.nome}
        concourseNumber={loteriaFiltrado.id}
        concourseData={loteriaFiltrado.data}
      />
    )
    expect(screen.getAllByTestId('Mock Logo')).toHaveLength(2)
    expect(screen.getAllByTestId('Mock Select')).toHaveLength(2)
    expect(screen.getAllByTestId('Mock Text')).toHaveLength(3)

    expect(screen.getAllByTestId('Mock Text')[0]).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render correctly default props ', () => {
    renderWithTheme(
      <Header loterias={loterias} concourseData={loteriaFiltrado.data} />
    )

    expect(screen.getAllByText('mega-sena')[0]).toBeInTheDocument()
  })
})
