import * as S from './styles'
import Logo from 'components/Logo'
import Select from 'components/Select'
import Text from 'components/Text'
const lotteries = [{ id: 0, nome: 'mega-sena' }]

const Header = () => (
  <S.Wrapper>
    <Select lotteries={lotteries} />
    <Logo title={lotteries[0].nome.toUpperCase()} isMobile />
    <Text>CONCURSO Nº 4560</Text>
  </S.Wrapper>
)

export default Header
