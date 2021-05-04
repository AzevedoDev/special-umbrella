import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Text from '.'

describe('<Text />', () => {
  it('should render Text correctly', () => {
    renderWithTheme(<Text>Text</Text>)

    expect(screen.getByText(/Text/)).toHaveStyle({
      color: '#FFFFFF'
    })

    expect(screen.getByText(/Text/)).toHaveStyle({
      fontSize: '1.4rem'
    })

    expect(screen.getByText(/Text/)).toBeInTheDocument()
  })
  it('should render Text with bold and black color', () => {
    renderWithTheme(
      <Text color="black" weight="bold" size="large">
        Text
      </Text>
    )
    expect(screen.getByText(/Text/)).toHaveStyle({
      color: '#333333'
    })

    expect(screen.getByText(/Text/)).toHaveStyle({
      fontSize: '2rem'
    })
  })
})
