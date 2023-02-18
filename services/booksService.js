const Book = require('../Models/Book');
const User = require('../Models/User');


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

exports.getUserData = async (id) => {
    const userData = await User.findById(id).lean();
    return userData;
}
exports.wishToRead = async (wisherId, bookId) => {

    const book = await Book.findById(bookId)
    book.wishingList.push(wisherId);
    await book.save();
}

exports.delete = async (bookId) => {

    await Book.findByIdAndDelete(bookId);

}

exports.edit = async (id, data) => {
    await Book.findByIdAndUpdate(id, data);
}

exports.search = async (id) => {

    let books = await this.getAll();


    if (books) {

        books = books.filter(x => x.wishingList == id);
    }

    return books;
}