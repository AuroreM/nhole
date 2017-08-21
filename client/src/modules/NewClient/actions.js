export function registerClientFail() {
  return {
    type: 'REGISTER_CLIENT_FAIL',
  };
}

export function registerClientSuccess() {
  return {
    type: 'REGISTER_CLIENT_SUCCESS',
  };
}

export function registerClient() {
  return {
    type: 'REGISTER_CLIENT',
  };
}

export function updateClientInfo(firstname, lastname, number) {
  return {
    type: 'UPDATE_CLIENT_INFO',
    firstname,
    lastname,
    number,
  };
}

export function updateSlotChoice(slot) {
  return {
    type: 'UPDATE_SLOT_CHOICES',
    slot,
  };
}
