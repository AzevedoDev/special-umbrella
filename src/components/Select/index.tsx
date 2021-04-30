import * as S from './styles'
import { Loteria } from 'graphql/generated/graphql'
import { useRouter } from 'next/dist/client/router'
import { slugify } from 'utils/helper'
import React from 'react'

export type SelectProps = {
  lotteries: Loteria[]
}

const Select = ({ lotteries }: SelectProps) => {
  const router = useRouter()
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const loteria = lotteries.find(({ id }) => id === Number(e.target.value))

    return router.push(`/concurso/${slugify(loteria?.nome)}`)
  }
  return (
    <S.Wrapper>
      <select aria-label="select-lotteries" onChange={handleSelect}>
        {lotteries.map((loteria) => (
          <option key={loteria.id} value={loteria.id as number}>
            {loteria.nome?.toUpperCase()}
          </option>
        ))}
      </select>
    </S.Wrapper>
  )
}

export default Select
