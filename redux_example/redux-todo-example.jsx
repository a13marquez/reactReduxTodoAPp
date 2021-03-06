var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  showCompleted: false,
  searchText: '',
  todos:[]
};
var reducer = (state = stateDefault,  action) => {
  console.log('New action' , action);
  switch (action.type) {
    case 'CHANGE_SEARCHTEXT':
    return{
      ...state,
      searchText: action.searchText
    }
    default:
      return state
  }
}
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCHTEXT', //Action type
  searchText:'test'
});
console.log('searchText should be test', store.getState());
