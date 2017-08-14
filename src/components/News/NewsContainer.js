// @flow
import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import NewsList from './NewsList';
import { connect } from 'react-redux';
import { NewsListActions } from '../../actions';
import { bindActionCreators } from 'redux';
import newsContainerType from './../../reducers/types';


export class NewsContainer extends Component {
  componentDidMount() {
    this.props.actions.requestNews();
  }

  render() {
    return (
      <Row>
        <NewsList
          news={this.props.newsList.news}
        />
      </Row>
    );
  }
}

NewsContainer.propTypes = {
  newsList: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state: newsContainerType) => (
  {
    newsList: state.newsList,
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: bindActionCreators(NewsListActions, dispatch),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsContainer);
