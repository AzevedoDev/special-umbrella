import * as S from './styles'

export type DrawnLotteryNumberProps = {
  lotteryNumber: string
}

const DrawnLotteryNumber = ({ lotteryNumber }: DrawnLotteryNumberProps) => (
  <S.Wrapper>
    <S.SortedNumber>{lotteryNumber}</S.SortedNumber>
  </S.Wrapper>
)

export default DrawnLotteryNumber
