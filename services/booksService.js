const Book = require('../Models/Book');


exports.createBookReview = async (title, author, genre, stars, image, review, owner) => {
    await Book.create({ title, author, genre, stars, image, review, owner })
};

exports.getAll = async () => {
    return await Book.find().lean();
};

exports.getOne = async (id) => {
    const bookData = await Book.findById(id).lean();
    return bookData;
}

exports.wishToRead = async (wisherId, bookId) => {
        
    const book = await Book.findById(bookId)
    book.wishingList.push(wisherId);
    await book.save();
}

exports.delete = async (bookId) => {
    
    await Book.findByIdAndDelete(bookId);
    
}