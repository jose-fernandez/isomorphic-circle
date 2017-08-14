// @flow
import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import NewsListItem from './NewsListItem';

const renderNewsListItemView = (article: {title: string}, index: number) => (
  <Panel header={article.title} eventKey={index} key={index} >
    <NewsListItem key={index} article={article} index={index} />
  </Panel>
);

const mapNewsListItem = (news: Object) => (
  news.map((article, index) => renderNewsListItemView(article, index))
);

const NewsList = (props: Object) => {
  const newsList: Array<{}> = mapNewsListItem(props.news);
  return (
    <Panel header="News" bsStyle="info">
      <PanelGroup accordion>
        {newsList}
      </PanelGroup>
    </Panel>

  );
};

NewsList.propTypes = {
  news: React.PropTypes.array.isRequired,
};

export default NewsList;
