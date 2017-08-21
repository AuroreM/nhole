export function getClients() {
  return {
    type: 'GET_CLIENTS',
  };
}
export function clientsListLoading() {
  return {
    type: 'CLIENT_LIST_LOADING',
  };
}
export function getClientsFail() {
  return {
    type: 'GET_CLIENTS_FAIL',
  };
}
export function getClientsSuccess(clients) {
  return {
    type: 'GET_CLIENTS_SUCCESS',
    clients,
  };
}
export function deleteClient(clientId) {
  return {
    type: 'DELETE_CLIENT',
    clientId,
  };
}
