export function updateClientInfo(firstname, lastname, number) {
  return {
    type: 'UPDATE_CLIENT_INFO',
    firstname,
    lastname,
    number,
  }
}
