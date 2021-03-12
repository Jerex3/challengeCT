const Router = require('express')

const controller = require('../controllers/users')
const authJwt = require('../middleware/authJWT')

const router = Router()

router.get('/' , [authJwt.verifyToken], controller.getUsers);

router.get('/:email', [authJwt.verifyToken], controller.getUserById);

router.put('/:email', [authJwt.verifyToken], controller.modifyUser);

router.delete('/:email', [authJwt.verifyToken], controller.deleteUser);

module.exports = router;
