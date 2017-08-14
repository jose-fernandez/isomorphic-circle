import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Label, Media, ListGroupItem } from 'react-bootstrap';

const EmployeesListItem = ({ index, employee }) =>

  <ListGroupItem key={index}>
    <Link to={`/Employee/${index}`}>
      <Media>
        <Media.Left>
          <img width={50} height={50} src={employee.img} alt="hi" />
        </Media.Left>
        <Media.Body>
          <Grid>
            <Row>
              <Label>{name}</Label>
            </Row>
            <Row>
              <Label>{employee.position}</Label>
            </Row>
            <Row>
              <p>{employee.description}</p>
            </Row>
          </Grid>
        </Media.Body>
      </Media>
    </Link>
  </ListGroupItem>;

EmployeesListItem.propTypes = {
  index: React.PropTypes.number.isRequired,
  employee: React.PropTypes.object.isRequired,
};

export default EmployeesListItem;
