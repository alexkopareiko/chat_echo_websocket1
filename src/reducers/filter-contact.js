const initialState = '';

export default function (state=initialState, action) {
  switch(action.type) {
    case "CONTACT_FILTER":
      return action.payload;
      break;
    default:
      return state;
  }
}
