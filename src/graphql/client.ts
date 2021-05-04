import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://brainn-api-loterias.herokuapp.com/graphql'

const client = new GraphQLClient(endpoint, { headers: {} })

export default client
