

exports.getCatalogPage = async (req, res) => {

    // const cryptoOffers = await Crypto.find().lean()
    res.render('catalog');
};

exports.getCreategPage = async (req, res) => {

    // const cryptoOffers = await Crypto.find().lean()
    res.render('create');
};

