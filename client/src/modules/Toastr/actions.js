export function clearToastr() {
  return {
    type: 'CLEAR_TOASTR',
  };
}

export function displayToastr(wording) {
  return {
    type: 'DISPLAY_TOASTR',
    wording,
  };
}
