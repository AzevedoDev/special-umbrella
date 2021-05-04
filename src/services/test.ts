import client from 'graphql/client'
import {
  GetConcursoQuery,
  GetConcursoQueryVariables,
  GetLoteriaAndConcursosQuery,
  GetLoteriaQuery
} from 'graphql/generated/graphql'
import {
  GET_CONCURSO,
  GET_LOTERIA,
  GET_LOTERIA_CONCURSOS
} from 'graphql/queries'
import {
  expectedConcurso,
  expectedLoteriaConcurso,
  expectedLoterias
} from './mocks'
import { server } from './server'

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Call Services', () => {
  it('When GET_LOTERIA is called', async () => {
    const { loterias } = await client.request<GetLoteriaQuery>(GET_LOTERIA)

    expect(loterias).toEqual(expectedLoterias)
  })

  it('When GET_LOTERIA_CONCURSOS is called', async () => {
    const {
      loteriasConcursos
    } = await client.request<GetLoteriaAndConcursosQuery>(GET_LOTERIA_CONCURSOS)

    expect(loteriasConcursos).toEqual(expectedLoteriaConcurso)
  })

  it('When GET_CONCURSO is called', async () => {
    const { concurso } = await client.request<
      GetConcursoQuery,
      GetConcursoQueryVariables
    >(GET_CONCURSO, { id: '2359' })

    expect(concurso).toEqual(expectedConcurso)
  })
})
