const { User, bookSchema } = require('../models');

const resolvers = {
    Query: {
        user: async() => {
            return User.find({});
        },
        book: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return bookSchema.find(params)
        }
    }
}