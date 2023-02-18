
const getError = require('../utils/errorUtils');
const bookService = require('../services/booksService')
const jwt = require('../lib/jwt');

exports.getCatalogPage = async (req, res) => {
    const allBooks = await bookService.getAll();

    res.render('catalog', { allBooks });
};

exports.getDetails = async (req, res) => {
    const book = await bookService.getOne(req.params.bookId);
    const isOwner = book.owner == req.user?._id;
    const iswished = book.wishingList?.some(id => id == req.user._id);

    res.render(`details`, { book, isOwner, iswished })
}

exports.getCreategPage = async (req, res) => {
    res.render('create');
};


exports.postCreateReview = async (req, res) => {

    try {
        const { title, author, genre, stars, image, review } = req.body;
        const owner = req.user._id;
        await bookService.createBookReview(title, author, genre, stars, image, review, owner)
        res.redirect('/catalog');

    } catch (error) {
        res.status(404).render('create', { error: getError.getErrorMessage(error) })
    }

}


exports.postAddToWishList = async (req, res) => {

    const bookId = req.params.bookId;
    const token = req.cookies['auth'];
    const decodedToken = await jwt.verify(token, 'secret');
    const wisherId = decodedToken._id;
    await bookService.wishToRead(wisherId, bookId)

    res.redirect('/catalog')
}


exports.delete = async (req, res) => {
    const bookId = req.params.bookId;
    const book = await bookService.getOne(bookId);
    const isOwner = book.owner == req.user?._id;
    if (!isOwner) {
        throw Error `You are not the owner of the book!!!`
    }

    await bookService.delete(bookId);
    res.redirect('/catalog');

}



exports.getEditPage = async (req, res) => {
    const book = await bookService.getOne(req.params.bookId);
    
    res.render('edit', {book});
};

exports.postEditPage = async (req, res) => {
    const id = req.params.bookId;
    const data = req.body;
    
    await bookService.edit(id, data);
    
    const book = await bookService.getOne(id);
    const isOwner = book.owner == req.user?._id;
    const iswished = book.wishingList?.some(id => id == req.user._id);
    res.render(`details`, { book, isOwner, iswished })
    
}


exports.getProfilePage = async (req, res) => {
    const token = req.cookies['auth'];
    const decodedToken = await jwt.verify(token, 'secret');
    const userId = decodedToken._id;
    const userData = await bookService.search(userId);
    
    console.log(userData[0].wishingList)
    res.render('profile');
}