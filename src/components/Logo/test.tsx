import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render and match with snapshot', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Sena/i)).toMatchSnapshot()
  })

  it('should render a white logo by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Sena/i).parentElement).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render a normal size logo', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Sena/i).parentElement).toHaveStyle({
      width: '6rem'
    })
  })

  it('should render a when a isMobile Props is true', () => {
    renderWithTheme(<Logo isMobile />)
    expect(screen.getByTestId('logo-component')).toHaveStyle({
      flexDirection: 'column'
    })
  })
})
