const typeDefs = `
  type Book {
    title: String
    author: String
    pages: Int
  }
  type Query {
    books: [Book]
    books(_id: String!): Book
  }
  type Mutation {
    createBook(title: String!, author: String! pages: Int): Book
  }
`;

export default typeDefs