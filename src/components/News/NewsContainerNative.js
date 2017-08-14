import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NewsListActions } from '../../actions/index';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/native';
import renderSeparator from '../Employees/ListSeparator';
import NewsListItemNative from './NewsListItemNative';
import TitleHeader from '../ReactNativeComponents/TitleHeader';


const Container = styled.View`
  margin-top: 73;
  height: 100%;
`;

export class NewsContainerNative extends Component {

  componentDidMount() {
    this.props.actions.requestNews();
  }
  titleHeader = () => <TitleHeader title="News" />;
  render() {
    return (
      <Container>
        <FlatList
          data={this.props.newsList.news}
          renderItem={NewsListItemNative}
          keyExtractor={item => item.publishedAt}
          ItemSeparatorComponent={renderSeparator}
          ListHeaderComponent={this.titleHeader}
        />
      </Container>
    );
  }
}

NewsContainerNative.propTypes = {
  newsList: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ newsList: state.newsList });

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(NewsListActions, dispatch) }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsContainerNative);

