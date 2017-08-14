import { fork } from 'redux-saga/effects';
import { requestEmployees } from './employee-list-saga';
import { requestNews } from './news-list-saga';
import { requestPeople } from './people-list-saga';

export default function* rootSaga() {
  yield [
    fork(requestEmployees),
    fork(requestNews),
    fork(requestPeople),
  ];
}
