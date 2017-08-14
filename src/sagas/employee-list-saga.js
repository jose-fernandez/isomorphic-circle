import { call, put, take } from 'redux-saga/effects';
import { REQUEST_EMPLOYEES, REQUEST_EMPLOYEES_SUCCESS, REQUEST_EMPLOYEES_FAIL }
  from '../constants/employee-list-actions-constants';

export function fetchEmployees() {
  return fetch(
    'https://demo3829805.mockable.io/',
    { method: 'get', mode: 'cors' }
  ).then(response => response.json());
}

export function* getEmployees() {
  try {
    const employees = yield call(fetchEmployees);
    employees.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    yield put({ type: REQUEST_EMPLOYEES_SUCCESS, employees });
  } catch (e) {
    yield put({ type: REQUEST_EMPLOYEES_FAIL, message: e.message });
  }
}

export function* requestEmployees() {
  while (true) {// eslint-disable-line
    yield take(REQUEST_EMPLOYEES);
    yield call(getEmployees);
  }
}
