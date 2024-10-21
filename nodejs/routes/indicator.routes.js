const express = require('express');
const { getIndicators } = require('../controllers/post');
const router = express.Router();

// router.route('/post/upload').post(createPost);


router.post('/', getIndicators);




module.exports = router;