const getError = require('../utils/errorUtils');
const bookService = require('../services/booksService')


exports.getCatalogPage = async (req, res) => {

    // const cryptoOffers = await Crypto.find().lean()
    res.render('catalog');
};

exports.getCreategPage = async (req, res) => {

    // const cryptoOffers = await Crypto.find().lean()
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

