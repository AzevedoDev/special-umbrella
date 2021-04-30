import * as S from './styles'
import Logo from 'components/Logo'
import Select from 'components/Select'
import Text from 'components/Text'
import { Loteria } from 'graphql/generated/graphql'

type HeaderProps = {
  title?: string
  concourseNumber?: string | null
  loterias: Loteria[]
}

const Header = ({
  title = 'mega-sena',
  concourseNumber = '0',
  loterias
}: HeaderProps) => {
  return (
    <S.Wrapper color={title}>
      <Select lotteries={loterias} />
      <Logo title={title} isMobile />
      <Text>CONCURSO Nº {concourseNumber}</Text>
    </S.Wrapper>
  )
}

export default Header
