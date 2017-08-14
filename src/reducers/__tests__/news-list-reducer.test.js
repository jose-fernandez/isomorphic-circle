import newsList from '../news-list-reducer';
import { REQUEST_NEWS, REQUEST_NEWS_SUCCESS, REQUEST_NEWS_FAIL }
  from '../../constants/news-list-actions-constants';

jest.unmock('../news-list-reducer');

describe('Testing NewsList Reducer', () => {
  const state = {
    loading: false,
    news: [],
    orderBy: 'date',
    lastFetch: '0',
    error: false,
  };

  const requestAction = {
    type: REQUEST_NEWS,
  };

  const requestSuccessAction = {
    type: REQUEST_NEWS_SUCCESS,
    news: [{ test: 'test' }],
    time: '10',
  };

  const requestFailAction = {
    type: REQUEST_NEWS_FAIL,
  };

  it('An unknown action returns the state', () => {
    const returnedObject = newsList(state, { type: 'UNKNOWN_ACTION' });
    expect(returnedObject).toEqual(state);
  });

  it('Loading should be false by default', () => {
    const returnedObject = newsList();
    expect(returnedObject.loading).toBe(false);
  });

  it('Loading should be true', () => {
    const returnedObject = newsList(state, requestAction);
    expect(returnedObject.loading).toBe(true);
  });

  it('Loading should be false', () => {
    const returnedObject = newsList(state, requestSuccessAction);
    expect(returnedObject.loading).toBe(false);
  });

  it('News should be expected', () => {
    const returnedObject = newsList(state, requestSuccessAction);
    expect(returnedObject.news).toEqual(requestSuccessAction.news);
  });

  it('LastFetch should be expected', () => {
    const returnedObject = newsList(state, requestSuccessAction);
    expect(returnedObject.lastFetch).toEqual(requestSuccessAction.time);
  });

  it('Returned object type should be correct', () => {
    const returnedObject = newsList(state, requestSuccessAction);
    expect(returnedObject.lastFetch).toEqual(jasmine.any(String));
    expect(returnedObject.orderBy).toEqual(jasmine.any(String));
    expect(returnedObject.loading).toEqual(jasmine.any(Boolean));
    expect(returnedObject.news).toEqual(jasmine.any(Array));
  });

  it('A failed request will set an error in the state', () => {
    const returnedObject = newsList(state, requestFailAction);
    expect(returnedObject.error).toEqual(true);
  });
});
