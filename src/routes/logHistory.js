const Router = require('express')

const controller = require('../controllers/logHistory')

const auth = require('../middleware')

const router = Router()


router.get('/' , [auth.verifyJWT, auth.verifyNotLogout],  controller.getLogs);


module.exports = router;
