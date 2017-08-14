// @flow
import { REQUEST_NEWS } from '../constants/news-list-actions-constants';

function requestNews(): { type: string } {
  return { type: 'REQUEST_NEWS' };
}

const NewsListActions: Object = {
  requestNews,
};

export default NewsListActions;
