import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Glyphicon, Button } from 'react-bootstrap';

const MenuItem = ({ index, item, visibility }) => (
  <Link to={item.url}>
    <Button block className="menu-button">
      <Glyphicon glyph={item.glyph} key={index} />
      {visibility ? item.title : ''}
    </Button>
  </Link>
);

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
  visibility: PropTypes.bool,
};

export default MenuItem;
