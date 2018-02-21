import { SET_CURRENT_LIST, SET_ITEMS, ADD_ITEM } from './ItemsActions';

function itemsReducer(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_LIST:
      return Object.assign({}, state, {
        currentList: action.list
      });
    case SET_ITEMS:
      return Object.assign({}, state, {
        currentList: state.currentList,
        items: action.items
      });
    case ADD_ITEM:
      return Object.assign({}, state, {
        currentList: state.currentList,
        items: [
          ...state.items,
          action.item
        ]
      });
    default:
      return state;
  }
}

export default itemsReducer;
