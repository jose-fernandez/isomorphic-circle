/* eslint-disable no-param-reassign,array-callback-return,no-unused-expressions */
// @flow
import { REQUEST_PEOPLE, REQUEST_PEOPLE_SUCCESS, REQUEST_PEOPLE_FAIL, REQUEST_INPUT, RESET }
  from '../constants/people-list-actions-constants';
import { peopleStateType } from './types';

// noinspection JSAnnotator
const initialState: peopleStateType = {
  loading: false,
  error: false,
  people: [],
  index: 0,
};

const modifyObject = (state, action) => {
  const array = state.people;
  if (action.payload.value === array[action.payload.index].name.first) {
    array[action.payload.index].valid = true;
  } else {
    array[action.payload.index].valid = false;
  }
  array[action.payload.index].display = false;
  action.payload.index++;
  array[action.payload.index].display = true;
  return { ...state, people: array, index: action.payload.index };
};

const reset = (state) => {
  const array = state.people;
  array.map((guys, index) => {
    guys.valid = false;
    index === 0 ? guys.display = true : guys.display = false;
  });
  return { ...state, people: array, index: 0 };
};

// noinspection JSAnnotator
export default function peopleList(
  state: peopleStateType = initialState,
  action: Object = {}): peopleStateType {
  switch (action.type) {
    case REQUEST_PEOPLE:
      return { ...state, loading: true };
    case REQUEST_PEOPLE_SUCCESS:
      return { ...state, people: action.people.results, loading: false, index: 0 };
    case REQUEST_PEOPLE_FAIL:
      return { ...state, error: true, loading: false };
    case REQUEST_INPUT:
      return modifyObject(state, action);
    case RESET:
      return reset(state);
    default:
      return state;
  }
}
