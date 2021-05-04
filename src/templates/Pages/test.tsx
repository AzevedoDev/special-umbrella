import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import TemplatePage from '.'
import { concurso, loteriaFiltrado, loterias } from './mocks'

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
  it('should render and to be in the document', () => {
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
