const Router = require('express')

const controller = require('../controllers/users')
const auth = require('../middleware/authJWT')
const authC = require('../middleware/authCredentials')

const router = Router()

router.post('/singIn' , [authC.authCredentials ,auth.verifyToken], controller.authUser);

router.post('/singUp' , controller.createUser);

module.exports = router;
