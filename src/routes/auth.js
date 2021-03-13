const Router = require('express')

const controller = require('../controllers/users')

const auth = require('../middleware')

const router = Router()

router.post('/signIn' , [auth.verifyCreds], controller.signIn);

router.post('/signUp' , controller.createUser);

router.post ('/logout', controller.logOut)

module.exports = router;
