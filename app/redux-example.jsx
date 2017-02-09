var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name:'Anonymous',
  hobbies:[],
  movies:[]
}

var nextHobbyId = 1;
var nextMovieId = 1;
var oldReducer = (state = stateDefault,  action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies :[
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies :[
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action. genre
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby)  => hobby.id !== action.id)
      }
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.id)
      }
    default:
      return state
  }
}


var nameReducer = (state='Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
        return state.filter((hobby)  => hobby.id !== action.id);
    default:
      return state
  }
};

var moviesReducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ];
    case 'REMOVE_MOVIE':
        return state.filter((movie)  => movie.id !== action.id);
    default:
      return state
  }
};

var reducer= redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});



var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(()=>{
  var state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
  console.log('New State', store.getState())
});

var currentState = store.getState();
store.dispatch({
  type: 'CHANGE_NAME', //Action type
  name:'Álvaro'
});
store.dispatch({
  type: 'ADD_HOBBY', //Action type
  hobby: 'Running'
});
store.dispatch({
  type: 'ADD_HOBBY', //Action type
  hobby: 'Lifting'
});
store.dispatch({
  type: 'REMOVE_HOBBY', //Action type
  id: 2
});
// unsubscribe();
store.dispatch({
  type:'CHANGE_NAME',
  name:'Emily'
})
store.dispatch({
  type:'ADD_MOVIE',
  title: 'Mad Max',
  genre:'Action'
})
store.dispatch({
  type:'ADD_MOVIE',
  title: 'The Lord of the Rings',
  genre:'Fantasy'
});
store.dispatch({
  type: 'REMOVE_MOVIE', //Action type
  id: 1
});
