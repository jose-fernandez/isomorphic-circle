import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ButtonSideMenu from './buttonSideMenu';
import LinearGradient from 'react-native-linear-gradient';//eslint-disable-line

const styles = {
  header: {
    borderWidth: 1,
    borderColor: '#bce8f1',
  },
  headerText: {
    paddingTop: 11,
    paddingBottom: 10,
    paddingLeft: 20,
    color: '#31708f',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
};

const SideMenu = () =>
  <View>
    <LinearGradient
      colors={['#d9edf7', '#c4e3f3']}
      style={styles.header}
    >
      <Text style={styles.headerText}>Menu</Text>
    </LinearGradient>
    <ButtonSideMenu title="Employees" onPress={Actions.employees} />
    <ButtonSideMenu title="News" onPress={Actions.news} />
    <ButtonSideMenu title="Blusers" onPress={Actions.employees} />
    <ButtonSideMenu title="Blusers" onPress={Actions.news} />
  </View>
;

export default SideMenu;
