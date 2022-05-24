const router = require('express').Router();
const { verifyToken } = require('../middleware/verifyToken');
const userController = require('../controllers/user/index');

//GET ALL
router.get('/', verifyToken, userController.getAllUser);

module.exports = router;
