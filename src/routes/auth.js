const Router = require('express')

const controller = require('../controllers/users')
const authC = require('../middleware/authCredentials')

const router = Router()

router.post('/singIn' , [authC.authCredentials], controller.singIn);

router.post('/singUp' , controller.createUser);

module.exports = router;
