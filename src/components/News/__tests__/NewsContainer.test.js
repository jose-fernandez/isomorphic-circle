import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { NewsContainer } from '../NewsContainer';
import newsListActions from '../../../actions/news-list-actions';

jest.unmock('../NewsContainer');
jest.unmock('../NewsList');
jest.unmock('../NewsListItem');
jest.mock('fetchNews');

describe('Testing NewsContainer Component', () => {
  let componentInstance;
  let returnedNews;
  const newsList = {
    loading: false,
    news: [],
    orderBy: 'date',
    lastFetch: '0',
  };

  newsList.news = [
    {
      picture: 'http://placehold.it/32x32',
      title: 'aliqua proident non aliquip amet',
      article: 'Ut elit sunt laborum cupidatat incididunt do labore non aute. Ut' +
      'eiusmod sunt anim sit pariatur fugiat incididunt nostrud cillum Lorem sint'
      + ' anim cupidatat incididunt. Officia velit non veniam ea. Ut velit eu ' +
      'Lorem consectetur elit do. Et proident commodo nulla anim do id occaecat.',
      date: 'Saturday, November 14, 2015 11:05 AM',
      index: 0,
      key: 0,
    },
    {
      picture: 'http://placehold.it/32x32',
      title: 'aliqua proident non aliquip amet',
      article: 'Ut elit sunt laborum cupidatat incididunt do labore non aute. Ut' +
      'eiusmod sunt anim sit pariatur fugiat incididunt nostrud cillum Lorem sint'
      + ' anim cupidatat incididunt. Officia velit non veniam ea. Ut velit eu ' +
      'Lorem consectetur elit do. Et proident commodo nulla anim do id occaecat.',
      date: 'Friday, November 13, 2015 11:05 AM',
      index: 1,
      key: 1,
    },
  ];

  it('Should be visible', () => {
    componentInstance = TestUtils.renderIntoDocument(
      <NewsContainer newsList={newsList} actions={newsListActions} />
    );
    expect(componentInstance).not.toBe(null);
  });
  it('Testing Sort function', () => {
    returnedNews = componentInstance.sort(newsList.news);
    expect(returnedNews[0].index).toEqual(1);
  });
});
