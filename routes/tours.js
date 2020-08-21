const express = require('express');
const Tour = require('../models/Tour');

const router = express.Router();

router.route('/').get().post();

router.route('/:id').get().put().delete();

module.exports = router;
