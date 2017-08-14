/* eslint-disable no-else-return,brace-style */
// @flow

import React, { Component } from 'react';
import { Panel, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { PeopleListActions } from '../../actions/index';
import { bindActionCreators } from 'redux';
import peopleContainerType from './../../reducers/types';
import { PeopleInput, PeopleInfo, Results, Loader } from './subComponents/index';

let mark = 0;

export class PeopleContainer extends Component {
  componentDidMount() {
    if (this.props.peopleList.people.length <= 0) {
      this.props.actions.requestPeople();
    }
  }

  results = (people, index) => {
    if (people.valid) {
      mark++;
    }

    if (index === this.props.peopleList.people.length - 1) {
      return ({ mark, index });
    } else {
      return '';
    }
  };
  show = () => {
    if (this.props.peopleList.loading) {
      return (<Loader />);
    }
    if (this.props.peopleList.index === this.props.peopleList.people.length - 1) {
      const result = this.props.peopleList.people.map((marks, index) => this.results(marks, index));
      const item = result[result.length - 1];
      return (
        <Results
          mark={item.mark}
          total={item.index}
          reset={this.props.actions.reset}
        />
      );
    }
    else {
      return (
        <Row >
          <Panel
            className="mainPanel"
            header="People"
            footer={`Number of people left: ${
              this.props.peopleList.people ?
                this.props.peopleList.people.length - this.props.peopleList.index - 1 :
                '0'}`}
            bsStyle="info"
          >
            <PeopleInfo
              people={this.props.peopleList.people}
            />
            <PeopleInput
              event={this.props.actions.requestName}
              people={this.props.peopleList.people}
              index={this.props.peopleList.index}
            />
          </Panel>
        </Row>
      );
    }
  };
  render() {
    return this.show();
  }
}


PeopleContainer.propTypes = {
  peopleList: React.PropTypes.object,
  actions: React.PropTypes.object.isRequired,
};

// noinspection JSAnnotator
const mapStateToProps = (state: peopleContainerType) => ({ peopleList: state.peopleList });


const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(PeopleListActions, dispatch) }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeopleContainer);

