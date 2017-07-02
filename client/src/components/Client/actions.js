export function deleteClient(clientId) {
  return {
    type: 'DELETE_CLIENT',
    clientId
  }
}
