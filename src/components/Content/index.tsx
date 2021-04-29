import DrawnLotteryNumber from 'components/DrawnLotteryNumber'
import Text from 'components/Text'
import * as S from './styles'

const Content = () => (
  <S.Wrapper>
    <S.DrawnLotteryNumbersWrapper>
      <DrawnLotteryNumber lotteryNumber="01" />
      <DrawnLotteryNumber lotteryNumber="01" />
      <DrawnLotteryNumber lotteryNumber="01" />
      <DrawnLotteryNumber lotteryNumber="01" />
      <DrawnLotteryNumber lotteryNumber="01" />
      <DrawnLotteryNumber lotteryNumber="01" />
    </S.DrawnLotteryNumbersWrapper>
    <S.TextWrapper>
      <Text color="black">
        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a
        CAIXA.
      </Text>
    </S.TextWrapper>
  </S.Wrapper>
)

export default Content
