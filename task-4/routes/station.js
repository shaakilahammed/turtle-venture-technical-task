const router = require('express').Router();
const { verifyToken } = require('../middleware/verifyToken');
const stationController = require('../controllers/station/index');

router.get('/', verifyToken, stationController.getAllStation);
router.get('/:id', verifyToken, stationController.getStationById);
router.post('/', verifyToken, stationController.createStation);
router.put('/:id', verifyToken, stationController.updateStation);
router.delete('/:id', verifyToken, stationController.deleteStation);

module.exports = router;
