var redux = require('redux');


var actions = require('./actions/index.jsx');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(()=>{
  var state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
  console.log('New State', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'loading'
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target=_blank>View your location</a>'
  }
});
// unsubscribe();

var currentState = store.getState();

store.dispatch(actions.fetchLocation());
store.dispatch(actions.changeName('Álvaro'));
store.dispatch(actions.addHobby('Play basket   '));
store.dispatch(actions.addHobby('lifting'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emily'))
store.dispatch(actions.addMovie('Mad Max', 'action'))
store.dispatch(actions.addMovie('The Lord of the Rings','Fantasy'));
store.dispatch(actions.removeMovie(1));
