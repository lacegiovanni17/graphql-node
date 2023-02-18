import { BookModel } from "./model";

const resolvers = {
  Query: {
        async books(root, { }, { }) {
          const book = await BookModel.find()
          return book
      },
         async book(root, { _id }) {
          const book = await BookModel.findById(_id)
            return book
      }
    },
    Mutation: {
        async createBook(root, { title, author, pages }, { }) {
            const newBook = await BookModel.create({ title, author, pages })
            return newBook
        }
    }
};

export default resolvers;