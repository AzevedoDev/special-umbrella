import * as S from './styles'
import Logo from 'components/Logo'
import Select from 'components/Select'
import Text from 'components/Text'
import { Loteria } from 'graphql/generated/graphql'
import { removeAccents, removeSlashesAndEmptySpaces } from 'utils/helper'

export type HeaderProps = {
  title?: string
  concourseNumber?: string | null
  loterias: Loteria[]
  isMobile?: boolean
}

const Header = ({
  title = 'mega-sena',
  concourseNumber = '0',
  loterias,
  isMobile = true
}: HeaderProps) => {
  return (
    <S.Wrapper color={removeSlashesAndEmptySpaces(removeAccents(title))}>
      <Select lotteries={loterias} value={title} />
      <Logo title={title} isMobile={isMobile} />
      <Text>CONCURSO Nº {concourseNumber}</Text>
    </S.Wrapper>
  )
}

export default Header
