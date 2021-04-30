import {
  GET_CONCURSO,
  GET_LOTERIA,
  GET_LOTERIA_CONCURSOS
} from 'graphql/queries'
import { useRouter } from 'next/dist/client/router'
import TemplatePage from 'templates/Pages'
import client from 'graphql/client'
import {
  GetLoteriaAndConcursosQuery,
  GetLoteriaQuery,
  GetConcursoQuery,
  GetConcursoQueryVariables,
  Concurso,
  Loteria
} from 'graphql/generated/graphql'
import { GetStaticProps } from 'next'
import { slugify } from 'utils/helper'

type LotteriesProps = {
  concurso: Concurso
  loterias: Loteria[]
  loteriaFiltrado: { id: string; nome: string }
}

export default function Lotteries({
  concurso,
  loterias,
  loteriaFiltrado
}: LotteriesProps) {
  const router = useRouter()
  if (router.isFallback) return null
  return (
    <TemplatePage
      loterias={loterias}
      concurso={concurso}
      loteriaFiltrado={loteriaFiltrado}
    />
  )
}

export async function getStaticPaths() {
  const { loterias } = await client.request<GetLoteriaQuery>(GET_LOTERIA)

  const paths = loterias?.map((loteria) => {
    const slug = slugify(loteria?.nome)
    return {
      params: {
        slug
      }
    }
  })
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { loterias } = await client.request<GetLoteriaQuery>(GET_LOTERIA)

  const {
    loteriasConcursos
  } = await client.request<GetLoteriaAndConcursosQuery>(GET_LOTERIA_CONCURSOS)

  const loteriaFiltrado = loterias?.find(
    (loteria) => slugify(loteria?.nome) === params?.slug
  )
  const concursoFiltrado = loteriasConcursos?.find(
    (obj) => obj?.loteriaId === loteriaFiltrado?.id
  )

  const { concurso } = await client.request<
    GetConcursoQuery,
    GetConcursoQueryVariables
  >(GET_CONCURSO, { id: concursoFiltrado?.concursoId as string })

  return {
    props: { concurso, loterias, loteriaFiltrado }
  }
}
