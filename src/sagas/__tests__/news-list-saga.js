import { requestNews, getNews, fetchNews } from '../news-list-saga';
import { call, put, take } from 'redux-saga/effects';
import { REQUEST_NEWS, REQUEST_NEWS_SUCCESS, REQUEST_NEWS_FAIL }
  from '../../constants/news-list-actions-constants';

describe('Testing newsList Saga', () => {
  const requestNewsIterator = requestNews();
  const getNewsIterator = getNews();
  const news = {
    a: 'b',
    1: 'c',
  };
  fetch.mockResponse(JSON.stringify(news));

  it('The saga will listen to REQUEST_NEWS action', () => {
    expect(
      requestNewsIterator.next().value
    ).toEqual(
      take(REQUEST_NEWS)
    );
  });

  it('The saga will answer by calling fetchEmployees', () => {
    expect(
      requestNewsIterator.next().value
    ).toEqual(
      call(getNews)
    );
  });

  it('fetchEmployee will make an API request', () => {
    expect(
      getNewsIterator.next().value
    ).toEqual(
      call(fetchNews)
    );
  });

  it('the result of the API request will be dispatched again', () => {
    expect(
      getNewsIterator.next(news).value
    ).toEqual(
      put({ type: REQUEST_NEWS_SUCCESS, news })
    );
  });

  it('if the API request fails, we dispatch a fail action', () => {
    expect(
      getNewsIterator.throw({ message: 'error' }).value
    ).toEqual(
      put({ type: REQUEST_NEWS_FAIL, message: 'error' })
    );
  });

  it('the fetchNews functions triggers a fetch', () => {
    expect(
      fetchNews()
    ).toEqual(
      jasmine.any(Promise)
    );
  });

  it('fetchNews returns some data', () => {
    fetchNews().then((response) => {
      expect(response).toEqual(news);
    });
  });
});
