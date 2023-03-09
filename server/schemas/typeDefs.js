const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Query {
        me: user
    }
    type Mutation {
       login(email: String!, password: String!): Auth
       addUser(username: String!, email: String!, password: String!): Auth
       saveBook(sss description: String!, title: String!, bookId: Id!, image: image, link: link): User
       removeBook(bookId: Id!): User
    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: String
        savedBooks: [bookSchema]
    }
    type Book {
        bookID: ID
        authors: String
        description: String
        title: String
        image: image
        link: link
    }
    type Auth {
        token: ID!
        user: user
    }
`;

module.exports = typeDefs;