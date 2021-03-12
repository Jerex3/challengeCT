const Router = require('express')

const controller = require('../controllers/users')

const router = Router()

router.get('/' , controller.getUsers);

router.get('/:clientId' , controller.getUserById);

router.put('/:updateId' , controller.modifyUser);

router.delete('/:deleteId' , controller.deleteUser);

module.exports = router;
