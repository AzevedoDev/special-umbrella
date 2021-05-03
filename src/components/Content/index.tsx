import DrawnLotteryNumber from 'components/DrawnLotteryNumber'
import Text from 'components/Text'
import { Concurso } from 'graphql/generated/graphql'
import * as S from './styles'

export type ContentProps = {
  concurso: Concurso
}

const Content = ({ concurso }: ContentProps) => (
  <S.Wrapper>
    <S.DrawnLotteryNumbersWrapper>
      {concurso.numeros?.map((lotteryNumber: string | null | undefined) => (
        <DrawnLotteryNumber key={lotteryNumber} lotteryNumber={lotteryNumber} />
      ))}
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
