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
  return {
    type: 'SEND_MESSAGE_SUCCESS',
  }
}
