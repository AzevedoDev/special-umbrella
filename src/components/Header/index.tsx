import * as S from './styles'
import Logo from 'components/Logo'
import Select from 'components/Select'
import Text from 'components/Text'
import { Loteria } from 'graphql/generated/graphql'
import {
  dateFormatter,
  removeAccents,
  removeSlashesAndEmptySpaces
} from 'utils/helper'

export type HeaderProps = {
  title?: string
  concourseNumber?: string | null
  loterias: Loteria[]
  isMobile?: boolean
  concourseData?: string | null
}

const Header = ({
  title = 'mega-sena',
  concourseNumber = '0',
  loterias,
  isMobile = true,
  concourseData
}: HeaderProps) => {
  return (
    <S.Wrapper color={removeSlashesAndEmptySpaces(removeAccents(title))}>
      <S.MobileGroup>
        <Select lotteries={loterias} value={title} />
        <Logo title={title} isMobile={isMobile} />
        <Text>CONCURSO Nº {concourseNumber}</Text>
      </S.MobileGroup>
      <S.DesktopGroup>
        <Select lotteries={loterias} value={title} />
        <Logo title={title} isMobile={false} />
        <S.TextWrapper>
          <Text>CONCURSO</Text>
          <Text size="large" weight="bold">
            {concourseNumber} - {dateFormatter(concourseData)}
          </Text>
        </S.TextWrapper>
      </S.DesktopGroup>
    </S.Wrapper>
  )
}

export default Header
