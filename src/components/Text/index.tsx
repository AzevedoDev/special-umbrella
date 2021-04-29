import * as S from './styles'

export type TextProps = {
  children: string
  color?: 'white' | 'black'
}

const Text = ({ children, color = 'white' }: TextProps) => (
  <S.TextComponent color={color}>{children}</S.TextComponent>
)

export default Text