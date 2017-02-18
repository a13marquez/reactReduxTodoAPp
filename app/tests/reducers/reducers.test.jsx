var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');


describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      }
      var res = reducers.searcTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('toggleShowCompleted', () => {
    it('should the show completed status get flipped', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      }
      var res = reducers.showCompletedReducer(df(false),df(action));
      expect(res).toBe(true);
      var res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toBe(false);

    });
  });
});
