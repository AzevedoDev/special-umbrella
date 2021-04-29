import * as S from './styles'

export type SelectProps = {
  lotteries: Loteria[]
}
type Loteria = {
  id: number
  nome: string
}
const Select = ({ lotteries }: SelectProps) => (
  <S.Wrapper>
    <select aria-label="select-lotteries">
      {lotteries.map(({ nome, id }) => (
        <option key={id} value={id}>
          {nome.toUpperCase()}
        </option>
      ))}
    </select>
  </S.Wrapper>
)

export default Select
