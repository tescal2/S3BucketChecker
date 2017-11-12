var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = function(event, context, callback) {
   context.callbackWaitsForEmptyEventLoop = false

   var params = {
       Bucket: event.params.querystring.bucketName
    };

    s3.waitFor('bucketNotExists',params, function(err, data) {
      if (err) {
          console.log("error", err, err.stack);
          return callback(null,"error encountered");
      }
      else  {
          console.log("not found");
          return callback(null,"bucket not found");
      }
   	});

    s3.waitFor('bucketExists',params, function(err, data) {
      if (err) {
          console.log("error", err, err.stack);
          return callback(null,"error encountered");
      }
      else  {
          console.log("found");
          return callback(null,"bucket found");
      }
    });
};
