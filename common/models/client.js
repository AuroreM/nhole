const LoopBackContext = require('loopback-context');

module.exports = Client => {
  const smsGatewayPackage = require('sms-gateway-nodejs');

  const sendSMS = (clientNumbers, message) => {
    const ctx = LoopBackContext.getCurrentContext();
    const currentUser = ctx && ctx.get('currentUser');
    const { smsGatewayEmail, smsGatewayPassword, smsGatewayDeviceId } = currentUser;
    const smsGateway = smsGatewayPackage(smsGatewayEmail, smsGatewayPassword);
    smsGateway.message
      .sendMessageToNumbers(smsGatewayDeviceId, clientNumbers, message)
      .then(data => {
        console.log('Messages sent', data);
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
