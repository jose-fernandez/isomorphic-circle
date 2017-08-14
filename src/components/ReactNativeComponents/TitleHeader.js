import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';//eslint-disable-line

const styles = {
  listHeader: {
    paddingTop: 11,
    paddingBottom: 11,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#bce8f1',
    borderRadius: 3,
  },
  listHeaderText: {
    left: 20,
    color: '#31708f',
    backgroundColor: 'transparent',
  },
};
const TitleHeader = ({ title }) =>
  <LinearGradient
    colors={['#d9edf7', '#c4e3f3']}
    style={styles.listHeader}
  >
    <Text style={styles.listHeaderText}>{title}</Text>
  </LinearGradient>
;

TitleHeader.propTypes = {
  title: React.PropTypes.string,
};

export default TitleHeader;
