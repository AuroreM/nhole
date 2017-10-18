const LoopBackContext = require('loopback-context');
const smsGatewayPackage = require('sms-gateway-nodejs');

module.exports = Client => {
  Client.observe('before save', (ctx, next) => {
    ctx.instance.userId = getCurrentUser().id;
    next();
  });

  const getCurrentUser = () => {
    const ctx = LoopBackContext.getCurrentContext();
    return (currentUser = ctx && ctx.get('currentUser'));
  };

  const sendSMS = (clientNumbers, message) => {
    const { smsGatewayEmail, smsGatewayPassword, smsGatewayDeviceId } = getCurrentUser();
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

  Client.getByAuthenticatedUser = cb => {
    const currentUserId = getCurrentUser().id;
    Client.find({ where: { userId: currentUserId } }, (err, clients) => {
      cb(null, clients);
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

  Client.remoteMethod('getByAuthenticatedUser', {
    accepts: [],
    http: { path: '/byAuth', verb: 'get' },
    returns: { type: 'object', root: true },
  });
};
