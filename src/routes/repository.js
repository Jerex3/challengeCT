const Router = require('express')

const controller = require('../controllers/repository')
const auth = require('../middleware/authJWT')

const router = Router()

router.post('/' , [auth.verifyToken], controller.createRep);

router.get('/' , [auth.verifyToken],  controller.getReps);

router.get('/:id' , [auth.verifyToken], controller.getRep);

router.delete('/:id', [auth.verifyToken], controller.deleteRep);

router.put('/:id', [auth.verifyToken], controller.modifyRep);

module.exports = router;
