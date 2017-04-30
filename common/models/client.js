'use strict';
module.exports = function(Client) {
  var SmsGateway = require('smsgateway');

  var gateway = new SmsGateway('a.malherbes@gmail.com','TOTOFOOBAR123');
  var sendSMS = function (client) {
    gateway.send(
      client.number,
      "Hello",
      46773
    ).then(function(data){
      console.log('Message sent');
    }).fail(function(message){
      console.log('Failed', message);
    });
  }
  Client.sendSMSToMorningClient = function(cb) {
    Client.find({where: {morning: true}}, function(err, results) {
      results.map(sendSMS);
      cb(null, results);
    });
  };
  Client.remoteMethod(
    'sendSMSToMorningClient', {
      http: {path: '/morning', verb: 'get'},
      returns: {arg: 'OK', type: 'string'}
    }
  );

  Client.sendSMSToLunchClient = function(cb) {
    Client.find({where: {lunch: true}}, function(err, results) {
      cb(null, results);
    });
  };
  Client.remoteMethod(
    'sendSMSToLunchClient', {
      http: {path: '/lunch', verb: 'get'},
      returns: {arg: 'OK', type: 'string'}
    }
  );

  Client.sendSMSToAfternoonClient = function(cb) {
    Client.find({where: {afternoon: true}}, function(err, results) {
      cb(null, results);
    });
  };
  Client.remoteMethod(
    'sendSMSToAfternoonClient', {
      http: {path: '/afternoon', verb: 'get'},
      returns: {arg: 'OK', type: 'string'}
    }
  );

  Client.sendSMSToEveningClient = function(cb) {
    Client.find({where: {evening: true}}, function(err, results) {
      cb(null, results);
    });
  };
  Client.remoteMethod(
    'sendSMSToEveningClient', {
      http: {path: '/evening', verb: 'get'},
      returns: {arg: 'OK', type: 'string'}
    }
  );
};
