var Sender = require('aws-sms-send');
var config = {
  AWS: {
    accessKeyId: 'xxxxxxxxxx',
    secretAccessKey: 'xxxxxxxxxx',
    region: 'xxxxxxxxxx',
  },
  topicArn: 'xxxxxxxxxx',
};
var sender = new Sender(config);

module.exports.createSubscribe = function (number, countryCode, callback) {
  sender.createSubscribe('+905054146201').then(function(response) {
    callback(null, response);
  });
};

module.exports.sendTopicSms = function (number, countryCode, callback) {
  sender.sendSms('Sms body topic', 'Topic sms', true).then(function(response) {
    callback(null, response);
  });
};

module.exports.sendDirectSms = function (number, countryCode, callback) {
  sender.sendSms('Sms body direct', 'Topic sms', false, '+905054146201').then(function(response) {
    callback(null, response);
  });
};
