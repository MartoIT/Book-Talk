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

exports.postloginUser = async (email, password) => {
    const user = await User.findOne({email});
    if (!user) {
        throw new Error(`User or password is wrong!`)
    }
    try {
        await bcrypt.compare(user.password, password);
        const payload = { _id: user._id, username: user.username };
        const token = await jwt.sign(payload, 'secret');
        return token

    } catch (err) {
        console.log(err.message)
    }
}