import { call, put, take } from 'redux-saga/effects';
import { REQUEST_PEOPLE, REQUEST_PEOPLE_SUCCESS, REQUEST_PEOPLE_FAIL }
    from '../constants/people-list-actions-constants';

export function fetchPeople() {
  return fetch(
    'https://randomuser.me/api/?results=6',
    { method: 'get', mode: 'cors' }
  ).then(response => response.json());
}

// ------------------OPTIONS-------------------------
// item.valid && item.display => next
// !item.valid && item.display => next
// item.valid  && !item.display => store (prev)
// !item.valid && !item.display => store (prev || next)
function updateObject(array) {
  return array.map((item, index) => {
    index === 0 ? item.display = true : item.display = false;
    item.key = index;
    item.valid = false;
    return (item);
  });
}

export function* getPeople() {
  try {
    const people = yield call(fetchPeople);
    const peopleList = updateObject(people.results);
    people.results = peopleList;
    yield put({ type: REQUEST_PEOPLE_SUCCESS, people });
  } catch (e) {
    yield put({ type: REQUEST_PEOPLE_FAIL, message: e.message });
  }
}

export function* requestPeople() {
  while (true) {// eslint-disable-line
   yield take(REQUEST_PEOPLE);
   yield call(getPeople);
  }
}
