

exports.getLoginPage = (req, res) => {
    res.render('auth/login')
};

exports.getRegisterPage = (req, res) => {
    res.render('auth/register')
};