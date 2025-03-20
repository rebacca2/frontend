import {ApolloClient,InMemoryCache,gql} from '@apollo/client'
const client=new ApolloClient({
    uri:'http://localhost:8081/graphql',
    cache:new InMemoryCache(),
})
export default client;