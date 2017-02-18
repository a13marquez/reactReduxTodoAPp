var redux = require('redux');
var {searcTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searcTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer,redux.compose(
    window.devToolsExtension() ? window.devToolsExtension() : f => f
  ));

  return store;
}
