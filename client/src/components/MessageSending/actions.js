export function sendMessage(message, slot) {
  return {
    type: 'SEND_MESSAGE',
    message,
    slot
  }
}
export function sendMessageFail() {
  return {
    type: 'SEND_MESSAGE_FAIL',
  }
}
export function sendMessageSuccess() {
  console.log('in sendMessageSuccess action')
  return {
    type: 'SEND_MESSAGE_SUCCESS',
  }
}
