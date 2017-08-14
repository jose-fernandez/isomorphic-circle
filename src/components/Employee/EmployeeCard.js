import React from 'react';
import { Panel } from 'react-bootstrap';

const EmployeeCard = ({ title, info }) =>

  <Panel header={title}>
    <span>{info}</span>
  </Panel>;

EmployeeCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  info: React.PropTypes.string.isRequired,
};

export default EmployeeCard;
