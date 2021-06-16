const express = require('express');

const router = express.Router();
const upload = require('./upload');
/* GET home page. */

router.use('/upload', upload);

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
