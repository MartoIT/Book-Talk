const User = require('../Models/User');
const jwt = require('../lib/jwt');
const bcrypt = require('bcrypt');


exports.postRegistreUser = async (username, email, password) => {
    const hashPassword = await bcrypt.hash(password, 7)
    const user =  await User.create({username, email, password: hashPassword});
    const payload = { _id: user._id, username: user.username };
    const token = await jwt.sign(payload, 'secret');
    return token

}