export default function (state=null, action) {
  switch(action.type) {
    case "CONTACT_FILTER ":
      return action.payload;
      break;
    default:
      return state;
  }
}
