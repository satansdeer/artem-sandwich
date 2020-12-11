export const sandwichReducer = (state={}, action) => {
  switch(action.type){
    case 'sandwich/set_sandwich': {
      return action.payload
    }
    default:
      return state
  }
}