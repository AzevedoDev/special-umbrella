import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'small'
  isMobile?: boolean
  title?: string
}

const Logo = ({
  color = 'white',
  size = 'normal',
  isMobile = false,
  title = 'Sena'
}: LogoProps) => (
  <S.Wrapper color={color} isMobile={isMobile} data-testid="logo-component">
    <S.WrapperSvg color={color} size={size} isMobile={isMobile}>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 65 64"
        aria-label={title}
        role="img"
      >
        <path
          d="M21.517 63.154a9.26 9.26 0 009.241-9.241V33.271H9.206a9.243 9.243 0 103.5 17.84 9.234 9.234 0 008.811 12.043zM42.623.754a9.26 9.26 0 00-9.24 9.241v20.64h21.549a9.241 9.241 0 10-3.5-17.84A9.235 9.235 0 0042.623.754zM21.517.754a9.26 9.26 0 019.241 9.241v20.641H9.206a9.24 9.24 0 113.5-17.84A9.236 9.236 0 0121.517.754zm21.106 62.4a9.259 9.259 0 01-9.24-9.242V33.271h21.549a9.242 9.242 0 11-3.5 17.84 9.236 9.236 0 01-8.809 12.043z"
          fill="currentColor"
        />
      </svg>
    </S.WrapperSvg>
    <S.Text>{title}</S.Text>
  </S.Wrapper>
)

export default Logo
