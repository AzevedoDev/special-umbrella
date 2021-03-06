import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import Select from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

const pushFn = jest.fn()

useRouter.mockImplementation(() => ({
  query: {},
  push: pushFn
}))

describe('<Select />', () => {
  const lotteries = [
    {
      id: 0,
      nome: 'mega-sena'
    },
    {
      id: 1,
      nome: 'quina'
    }
  ]
  it('should render and match with snapshot', () => {
    renderWithTheme(<Select lotteries={lotteries} />)

    expect(
      screen.getByRole('combobox', {
        name: /select-lotteries/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('combobox', {
        name: /select-lotteries/i
      })
    ).toMatchSnapshot()
  })

  it('should select a QUINA option', () => {
    renderWithTheme(<Select lotteries={lotteries} />)

    const select = screen.getByRole('combobox', {
      name: /select-lotteries/i
    })

    expect(select).toBeInTheDocument()

    userEvent.selectOptions(select, ['1'])

    const quina = screen.getByDisplayValue(/quina/i)

    expect(quina).toBeInTheDocument()
    expect(pushFn).toBeCalledWith('/concurso/quina')
  })
})
