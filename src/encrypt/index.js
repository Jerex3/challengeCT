const bcrypt = require('bcrypt')

const encryptPassword = async (password) => {

    const salt = await bcrypt.genSalt(10)

    return await bcrypt.hash(password, salt)

}
const comparePassword = async (password, receivedPassword) => {

    return await bcrypt.compare(password, receivedPassword)
}

module.exports = {
    compare:comparePassword,
    encrypt:encryptPassword
}