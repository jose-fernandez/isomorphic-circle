import React from 'react';
import { Row, Label, Media, Grid } from 'react-bootstrap';

const NewsListItem = ({ index, article }) =>
  <Media>
    <Media.Left>
      <img width={50} height={50} src={article.urlToImage} alt="hi" />
    </Media.Left>
    <Media.Body>
      <Grid>
        <Row>
          <Label>{index}</Label>
        </Row>
        <Row>
          <Label>{article.publishedAt}</Label>
        </Row>
        <Row>
          <p>{article.description}</p>
        </Row>
      </Grid>
    </Media.Body>
  </Media>;

NewsListItem.propTypes = {
  index: React.PropTypes.number.isRequired,
  article: React.PropTypes.object.isRequired,
};

export default NewsListItem;
