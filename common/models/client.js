'use strict';
module.exports = function(Client) {
  var SmsGateway = require('smsgateway');

  var gateway = new SmsGateway('a.malherbes@gmail.com', 'TOTOFOOBAR123');
  var sendSMS = function(client, message) {
    gateway.send(
      client.number,
      message,
      46773
    ).then(function(data) {
      console.log('Message sent');
    }).fail(function(message) {
      console.log('Failed', message);
    });
  };
  Client.sendSMSToMorningClient = function(message, cb) {
    Client.find({where: {morning: true}}, function(err, results) {
      results.map(function(result) {
        sendSMS(result, message);
      });
      cb(null, results);
    });
  };
  Client.remoteMethod(
    'sendSMSToMorningClient', {
      accepts: [{arg: 'message', type: 'string'}],
      http: {path: '/morning', verb: 'post'},
      returns: {arg: 'OK', type: 'string'},
    }
  );

  Client.sendSMSToLunchClient = function(message, cb) {
    Client.find({where: {lunch: true}}, function(err, results) {
      results.map(function(result) {
        sendSMS(result, message);
      });
      cb(null, results);
    });
  };
  Client.remoteMethod(
    'sendSMSToLunchClient', {
      accepts: [{arg: 'message', type: 'string'}],
      http: {path: '/lunch', verb: 'post'},
      returns: {arg: 'OK', type: 'string'},
    }
  );

  Client.sendSMSToAfternoonClient = function(message, cb) {
    Client.find({where: {afternoon: true}}, function(err, results) {
      results.map(function(result) {
        sendSMS(result, message);
      });
      cb(null, results);
    });
  };
  Client.remoteMethod(
    'sendSMSToAfternoonClient', {
      accepts: [{arg: 'message', type: 'string'}],
      http: {path: '/afternoon', verb: 'post'},
      returns: {arg: 'OK', type: 'string'},
    }
  );

  Client.sendSMSToEveningClient = function(message, cb) {
    Client.find({where: {evening: true}}, function(err, results) {
      results.map(function(result) {
        sendSMS(result, message);
      });
      cb(null, results);
    });
  };
  Client.remoteMethod(
    'sendSMSToEveningClient', {
      accepts: [{arg: 'message', type: 'string'}],
      http: {path: '/evening', verb: 'post'},
      returns: {arg: 'OK', type: 'string'},
    }
  );
};
