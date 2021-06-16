const express = require('express');
const fileUpload = require('express-fileupload');
const uploadService = require('../services/s3');
const random = require('../helpers/random');

const router = express.Router();

router.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

router.post('/', (req, res) => {
  uploadService.upload(req.files.img.data,
    random.createRandomHexString(3) + req.files.img.name, 'samcrode')
    .then((url) => {
      res.status(200).send({ url });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ msg: err });
    });
});

module.exports = router;
