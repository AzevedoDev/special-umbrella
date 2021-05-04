import { graphql } from 'msw'

export const handlers = [
  graphql.query('getLoteria', (req, res, ctx) => {
    return res(
      ctx.data({
        loterias: [
          {
            id: 0,
            nome: 'mega-sena'
          },
          {
            id: 1,
            nome: 'quina'
          },
          {
            id: 2,
            nome: 'lotofácil'
          },
          {
            id: 3,
            nome: 'lotomania'
          },
          {
            id: 4,
            nome: 'timemania'
          },
          {
            id: 5,
            nome: 'dia de sorte'
          }
        ]
      })
    )
  }),
  graphql.query('getLoteriaAndConcursos', (req, res, ctx) => {
    return res(
      ctx.data({
        loteriasConcursos: [
          {
            loteriaId: 0,
            concursoId: '2359'
          },
          {
            loteriaId: 1,
            concursoId: '5534'
          },
          {
            loteriaId: 2,
            concursoId: '2200'
          },
          {
            loteriaId: 3,
            concursoId: '2167'
          },
          {
            loteriaId: 4,
            concursoId: '1622'
          },
          {
            loteriaId: 5,
            concursoId: '440'
          }
        ]
      })
    )
  }),
  graphql.query('getConcurso', (req, res, ctx) => {
    return res(
      ctx.data({
        concurso: {
          id: '2359',
          loteria: 0,
          numeros: ['31', '32', '39', '42', '43', '51'],
          data: '2021-05-02T19:33:05.325Z'
        }
      })
    )
  })
]
