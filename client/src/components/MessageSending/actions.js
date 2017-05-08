export function sendMessage(message) {
  console.log('in Action')
  console.log(message)
  return {
    type: 'SEND_MESSAGE',
    message,
  }
}
