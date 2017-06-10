export function deleteClient(clientId) {
  console.log(clientId)
  return {
    type: 'DELETE_CLIENT',
    clientId
  }
}
