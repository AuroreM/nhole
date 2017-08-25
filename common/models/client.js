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

  Client.sendSMS = (message, slot, cb) => {
    Client.find({ where: { [slot]: true } }, (err, results) => {
      const clientNumbers = results.map(client => {
        return String(client.number);
      });
      sendSMS(clientNumbers, message);
      cb(null, clientNumbers);
    });
  };

  Client.remoteMethod('sendSMS', {
    accepts: [{ arg: 'message', type: 'string' }, { arg: 'slot', type: 'string' }],
    http: { path: '/sendMessage', verb: 'post' },
    returns: { arg: 'OK', type: 'string' },
  });
};
