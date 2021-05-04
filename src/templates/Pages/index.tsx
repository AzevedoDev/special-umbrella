import Content from 'components/Content'
import Header from 'components/Header'
import { Concurso, Loteria } from 'graphql/generated/graphql'
import * as S from './styled'

type TemplateProps = {
  loterias: Loteria[]
  concurso: Concurso
  loteriaFiltrado: { id: string; nome: string }
}

export default function TemplatePage({
  concurso,
  loterias,
  loteriaFiltrado
}: TemplateProps) {
  return (
    <S.Wrapper>
      <Header
        loterias={loterias}
        concourseNumber={concurso.id}
        title={loteriaFiltrado.nome}
        concourseData={concurso.data}
      />
      <Content concurso={concurso} />
    </S.Wrapper>
  )
}
