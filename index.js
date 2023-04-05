const AWS = require('aws-sdk');

const s3 = new AWS.S3()

module.exports.handler = async (event) => {
  const params = {
    Bucket: "bucketsobri",
    Key: "night.png",
    ContentType: 'image/png',
  };
  const res = s3.getSignedUrl("putObject", params);

  return {
    statusCode: 200,
    body: JSON.stringify({ res }),
  };
};
