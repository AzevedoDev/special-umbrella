import { gql } from 'graphql-request'

export const GET_LOTERIA = gql`
  query getLoteria {
    loterias {
      id
      nome
    }
  }
`

export const GET_LOTERIA_CONCURSOS = gql`
  query getLoteriaAndConcursos {
    loteriasConcursos {
      loteriaId
      concursoId
    }
  }
`
export const GET_CONCURSO = gql`
  query getConcurso($id: ID!) {
    concurso(id: $id) {
      id
      loteria
      numeros
      data
    }
  }
`
