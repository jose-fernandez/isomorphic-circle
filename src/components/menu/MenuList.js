// @flow
import React, { PropTypes } from 'react';
import MenuItem from './MenuItem.js';
import { ButtonGroup } from 'react-bootstrap';

const renderMenuItem = (item: {}, index: number, visibility: boolean) => (
  <MenuItem index={index} item={item} visibility={visibility} key={index} />
);

const getMenuItems = (items: Array<{}>, visibility: boolean) => (
  items.map((item, index) => renderMenuItem(item, index, visibility))
);

const MenuList = (props: {items: Array<{}>, visibility: boolean}) => {
  const items = getMenuItems(props.items, props.visibility);
  return (
    <ButtonGroup vertical block>
      {items}
    </ButtonGroup>
  );
};

MenuList.propTypes = {
  items: PropTypes.array.isRequired,
  visibility: PropTypes.bool.isRequired,
};

export default MenuList;
