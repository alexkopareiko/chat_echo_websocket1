export default function (state={}, action) {
  switch(action.type) {
    case "CONTACT_ADD":
    return [
      ...state,
      action.payload
    ]
      break;
    default:
      return state;
  }
}
