export function sendMessage(message, slot) {
  return {
    type: 'SEND_MESSAGE',
    message,
    slot,
  };
}
