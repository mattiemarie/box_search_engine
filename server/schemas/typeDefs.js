const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Query {
        me: user
    }
    type Mutation {
       login(email: String!, password: String!): Auth
       addUser(username: String!, email: String!, password: String!): Auth
       saveBook(sss description: String!, title: String!, bookId: Id!, image: image, link: link): User
    }

`;