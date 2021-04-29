import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Text from '.'

describe('<Text />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Text color="white">Text</Text>)

    expect(screen.getByText(/Text/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
