const initialState = ['TRA-TA-TA'];

export default function connectReducer(state = initialState, action) {
switch(action.type) {

  /*case "CONNECT":
  return [
    state
  ]
    break;

    case "DISCONNECT":
    return [
      state
    ]
      break;*/

    case "CONNECTED":
    return [
      state
    ]
      break;

    case "DISCONNECTED":
    return [
      state
    ]
      break;

    case "MSG_RECEIVED":
    return [
      ...state,
      action.payload
    ]
      break;

    case "CONNECTING":
    return [
      state
    ]
      break;


  default:
    return state;
}
}
