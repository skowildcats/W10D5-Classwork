import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions'
import {fetchAllPokemon} from './util/api_util'

import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  window.store = store
  window.getState = store.getState
  window.dispatch = store.dispatch
  window.receiveAllPokemon = receiveAllPokemon
  window.requestAllPokemon = requestAllPokemon
  window.fetchAllPokemon = fetchAllPokemon
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});