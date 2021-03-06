export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    regular: 'regular',
    normal: 500,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2rem',
      xlarge: '2.7rem',
      xxlarge: '3rem'
    }
  },
  colors: {
    mainBg: '#EFEFEF',
    white: '#FFFFFF',
    black: '#333333',
    megasena: '#6BEFA3',
    quina: '#8666EF',
    lotofacil: '#DD7AC6',
    lotomania: '#FFAB64',
    timemania: '#5AAD7D',
    diadesorte: '#BFAF83'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const

export type Colors =
  | 'megasena'
  | 'quina'
  | 'lotofacil'
  | 'lotomania'
  | 'timemania'
  | 'diadesorte'
