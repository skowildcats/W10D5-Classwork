import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions'

const pokemonReducer = function(state = {}, action) {
  Object.freeze(state)
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState.pokemon = action.pokemon
      return newState
    default:
      return state
  }
}

export default pokemonReducer