const authJWT = require('./authJWT')
const authLogout = require('./authJwtIsNotLogout')
const authCred = require('./authCredentials')

module.exports = {
    verifyJWT: authJWT.verify,
    verifyNotLogout: authLogout.verify,
    verifyCreds: authCred.verify 
}