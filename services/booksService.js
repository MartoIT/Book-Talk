const Book = require('../Models/Book');


exports.createBookReview = async (title, author, genre, stars, image, review, owner) => {
    await Book.create({ title, author, genre, stars, image, review, owner })
}
