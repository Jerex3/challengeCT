const Router = require('express')

const controller = require('../controllers/logHistory')
const auth = require('../middleware/authJWT')

const router = Router()


router.get('/' , [auth.verifyToken],  controller.getLogs);


module.exports = router;
