const Router = require('express')

const controller = require('../controllers/users')
const authC = require('../middleware/authCredentials')

const router = Router()

router.post('/signIn' , [authC.authCredentials], controller.signIn);

router.post('/signUp' , controller.createUser);

module.exports = router;
