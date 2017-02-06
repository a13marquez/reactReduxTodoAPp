var redux = require('redux');

console.log('Starting redux example');


var reducer = (state = {name:'Anonymous'},  action) => {

  console.log('New action' , action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state
  }
}
var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState: ', currentState);

store.dispatch({
  type: 'CHANGE_NAME', //Action type
  name:'Álvaro'
});

console.log('Name should be Álvaro', store.getState());
