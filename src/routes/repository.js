const Router = require('express')

const controller = require('../controllers/repository')

const auth = require('../middleware')

const router = Router()

router.post('/' , [auth.verifyJWT, auth.verifyNotLogout], controller.createRep);

router.get('/' ,[auth.verifyJWT, auth.verifyNotLogout],  controller.getReps);

router.get('/:id' , [auth.verifyJWT, auth.verifyNotLogout], controller.getRep);

router.delete('/:id', [auth.verifyJWT, auth.verifyNotLogout], controller.deleteRep);

router.put('/:id',[auth.verifyJWT, auth.verifyNotLogout], controller.modifyRep);

module.exports = router;
