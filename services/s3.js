const AWS = require('aws-sdk');

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
AWS.config.update({ region: 'us-east-2' });

async function upload(file, name, bucket) {
  const uploadParams = { Bucket: bucket, Key: name, Body: file };

  return new Promise((resolve, reject) => {
    s3.upload(uploadParams, (err) => {
      if (err) {
        return reject(err);
      }

      return resolve(name);
    });
  });
}

module.exports = {
  upload,
};
