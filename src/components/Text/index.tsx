import * as S from './styles'

export type TextProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'large'
  weight?: 'normal' | 'bold'
}

const Text = ({
  children,
  color = 'white',
  size = 'small',
  weight
}: TextProps) => (
  <S.TextComponent weight={weight} size={size} color={color}>
    {children}
  </S.TextComponent>
)

export default Text
