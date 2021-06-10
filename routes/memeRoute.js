const express = require('express');
const router = express.Router();
const memeController = require('../controllers/memeController');
const authMiddelware = require('../middlewares/authMiddleware');

router.post('/', authMiddelware, memeController.createMeme);
router.get('/', memeController.getMemes);
router.delete('/:memeId', authMiddelware, memeController.deleteMeme);
router.get('/:memeId', memeController.getMeme);

module.exports = router;
