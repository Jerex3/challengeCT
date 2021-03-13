const Router = require('express')

const controller = require('../controllers/users')
const auth = require('../middleware')

const router = Router()

router.get('/' , [auth.verifyJWT, auth.verifyNotLogout] , controller.getUsers);

router.get('/:email',[auth.verifyJWT, auth.verifyNotLogout], controller.getUserById);

router.put('/:email', [auth.verifyJWT, auth.verifyNotLogout], controller.modifyUser);

router.delete('/:email',[auth.verifyJWT, auth.verifyNotLogout], controller.deleteUser);

module.exports = router;
