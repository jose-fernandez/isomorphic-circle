// @flow
import { REQUEST_NEWS, REQUEST_NEWS_SUCCESS, REQUEST_NEWS_FAIL }
  from '../constants/news-list-actions-constants';
import type { newsStateType } from './types';

const initialState: newsStateType = {
  loading: false,
  news: [],
  orderBy: 'date',
  lastFetch: '0',
};

export default function newsList(
  state: newsStateType = initialState,
  action: Object = {}): newsStateType {
  switch (action.type) {
    case REQUEST_NEWS:
      return Object.assign({}, state, { loading: true });
    case REQUEST_NEWS_SUCCESS:
      return { ...state, news: action.news, loading: false };
    case REQUEST_NEWS_FAIL:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}
