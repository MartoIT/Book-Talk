const authService = require('../services/authService');
const getError = require('../utils/errorUtils');

exports.getLoginPage = (req, res) => {
    res.render('auth/login')
};

exports.postLoginPage = async (req, res) => {
    const { email, password } = req.body;

   
    try{
        const token = await authService.postloginUser(email, password);
        res.cookie('auth', token, { httpOnly: true });

        res.redirect('/');

    }catch(error){
          res.status(404).render('auth/login', { error: getError.getErrorMessage(error) })
    }

   
};

exports.getRegisterPage = (req, res) => {


    res.render('auth/register')
};

exports.postRegisterPage = async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    if(password !== repeatPassword) {
        throw  Error `Password\'s don mach!`
    }

    try{
        const token = await authService.postRegistreUser(username, email, password);
        res.cookie('auth', token, { httpOnly: true });

        res.redirect('/');
    }catch(error){
        console.log(error)
    }


};