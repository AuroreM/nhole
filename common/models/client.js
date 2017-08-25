module.exports = Client => {
  var smsGatewayPackage = require('sms-gateway-nodejs');
  var smsGateway = smsGatewayPackage('a.malherbes@gmail.com', 'TOTOFOOBAR123');
  var sendSMS = (clientNumbers, message) => {
    smsGateway.message
      .sendMessageToNumbers('46773', clientNumbers, message)
      .then(data => {
        console.log(data);
        console.log('Messages sent');
      })
      .catch(message => {
        console.log('Failed', message);
      });
  };
  Client.sendSMSToMorningClient = (message, cb) => {
    Client.find({ where: { morning: true } }, (err, results) => {
      const clientNumbers = results.map(client => {
        return String(client.number);
      });
      sendSMS(clientNumbers, message);
      cb(null, clientNumbers);
    });
  };
  Client.remoteMethod('sendSMSToMorningClient', {
    accepts: [{ arg: 'message', type: 'string' }],
    http: { path: '/morning', verb: 'post' },
    returns: { arg: 'OK', type: 'string' },
  });

  Client.sendSMSToLunchClient = (message, cb) => {
    Client.find({ where: { lunch: true } }, (err, results) => {
      const clientNumbers = results.map(client => {
        return String(client.number);
      });
      sendSMS(clientNumbers, message);
      cb(null, clientNumbers);
    });
  };
  Client.remoteMethod('sendSMSToLunchClient', {
    accepts: [{ arg: 'message', type: 'string' }],
    http: { path: '/lunch', verb: 'post' },
    returns: { arg: 'OK', type: 'string' },
  });

  Client.sendSMSToAfternoonClient = (message, cb) => {
    Client.find({ where: { afternoon: true } }, (err, results) => {
      const clientNumbers = results.map(client => {
        return String(client.number);
      });
      sendSMS(clientNumbers, message);
      cb(null, clientNumbers);
    });
  };
  Client.remoteMethod('sendSMSToAfternoonClient', {
    accepts: [{ arg: 'message', type: 'string' }],
    http: { path: '/afternoon', verb: 'post' },
    returns: { arg: 'OK', type: 'string' },
  });

  Client.sendSMSToEveningClient = (message, cb) => {
    Client.find({ where: { evening: true } }, (err, results) => {
      const clientNumbers = results.map(client => {
        return String(client.number);
      });
      sendSMS(clientNumbers, message);
      cb(null, clientNumbers);
    });
  };
  Client.remoteMethod('sendSMSToEveningClient', {
    accepts: [{ arg: 'message', type: 'string' }],
    http: { path: '/evening', verb: 'post' },
    returns: { arg: 'OK', type: 'string' },
  });
};
