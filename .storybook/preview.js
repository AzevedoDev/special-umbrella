import { addDecorator } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

addDecorator(withNextRouter())

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  backgrounds: {
    default: 'mega',
    values: [
      {
        name: 'mega',
        value: '#6BEFA3'
      },
      {
        name: 'quina',
        value: '#8666EF'
      },
      {
        name: 'lotoFacil',
        value: '#DD7AC6'
      },
      {
        name: 'lotoMania',
        value: '#FFAB64'
      },
      {
        name: 'timeMania',
        value: '#5AAD7D'
      },
      {
        name: 'diaSorte',
        value: '#BFAF83'
      }
    ]
  }
}
