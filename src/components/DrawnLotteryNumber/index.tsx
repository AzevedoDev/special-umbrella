import * as S from './styles'

export type DrawnLotteryNumberProps = {
  lotteryNumber: string | null | undefined
}

const DrawnLotteryNumber = ({ lotteryNumber }: DrawnLotteryNumberProps) => (
  <S.SortedNumber>{lotteryNumber}</S.SortedNumber>
)

export default DrawnLotteryNumber
