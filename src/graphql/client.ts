import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHQL_HOST || ''

const client = new GraphQLClient(endpoint, { headers: {} })

export default client
