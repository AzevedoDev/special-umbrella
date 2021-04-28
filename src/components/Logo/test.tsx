import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white logo by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Sena/i).parentElement).toHaveStyle({
      color: '#FFFFFF'
    })
  })
  it('should render a black logo', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Sena/i).parentElement).toHaveStyle({
      color: '#333333'
    })
  })
  it('should render a normal size logo', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Sena/i).parentElement).toHaveStyle({
      width: '6rem'
    })
  })

  it('should render a small size logo', () => {
    renderWithTheme(<Logo size="small" />)
    expect(screen.getByLabelText(/Sena/i).parentElement).toHaveStyle({
      width: '3.5rem'
    })
  })

  it('should render a when a isMobile Props is true', () => {
    renderWithTheme(<Logo isMobile />)
    expect(screen.getByTestId('logo-component')).toHaveStyle({
      flexDirection: 'column'
    })
  })
})
