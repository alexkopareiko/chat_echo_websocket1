const initialState = [];

export default function tracks(state = initialState, action) {

  if (action.type === 'DELETE_TRACK') {
    return state;
  }
  else if (action.type === 'FETCH_TRACK') {
    return [

      action.payload
    ];
  }
  return state;
}
