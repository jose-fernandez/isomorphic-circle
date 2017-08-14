// @flow
import { call, put, take } from 'redux-saga/effects';
import { REQUEST_NEWS, REQUEST_NEWS_SUCCESS, REQUEST_NEWS_FAIL }
  from '../constants/news-list-actions-constants';

export function fetchNews() {
  return fetch(
    'https://newsapi.org/v1/articles?source=techcrunch&apiKey=76c844c761924c2aa1173c0b9fdec177',
    { method: 'get', mode: 'cors' }
  ).then(response => response.json());
}

export function* getNews() {
  try {
    const news = yield call(fetchNews);
    news.articles.sort((a: Object, b: Object) => {
      const firstDate:Date = new Date(a.publishedAt);
      const secondDate:Date = new Date(b.publishedAt);
      if (firstDate < secondDate) {
        return -1;
      }
      if (firstDate > secondDate) {
        return 1;
      }
      return 0;
    });
    yield put({ type: REQUEST_NEWS_SUCCESS, news: news.articles });
  } catch (e) {
    yield put({ type: REQUEST_NEWS_FAIL, message: e.message });
  }
}

export function* requestNews() {
  while (true) {// eslint-disable-line
    yield take(REQUEST_NEWS);
    yield call(getNews);
  }
}
