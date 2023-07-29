// Container component
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  TypePolicies,
} from '@apollo/client'

const typePolicies: TypePolicies = {
  Query: {
    fields: {
      postPaginatedList: {
        keyArgs: false,
        merge(existing = [], incoming) {
          return [...existing, ...incoming]
        },
      },
    },
  },
}

const client = new ApolloClient({
  uri: 'https://mooresville.stepzen.net/api/with-neon/__graphql',
  headers: {
    Authorization:
      'apikey mooresville::stepzen.net+1000::329dffb67389c2f0faad380f8ee0edb2d332ddaf4aaa0a975226b65db471b460',
  },
  cache: new InMemoryCache({ typePolicies }),
})

export default client
