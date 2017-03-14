const INPUT_CHANGED = 'red1/INPUT_CHANGED';

const initialState = {
  oldInput: 'ORIGINAL TEXT'
}

export default function reducer(state=initialState, action) {
  console.log('action: ', action);
  switch(action.type) {
    case INPUT_CHANGED:
      return {
        oldInput: action.payload
      }
    default:
      return state;
  }
}

export function sendToStore(red1) {
  console.log('red1: ', red1);
  return {
    type: INPUT_CHANGED,
    payload: red1
  }

}
