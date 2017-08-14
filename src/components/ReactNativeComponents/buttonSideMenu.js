import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';//eslint-disable-line


const styles = {
  button: {
    marginTop: 18,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
    width: '90%',
    borderWidth: 0.5,
    borderBottomWidth: 1.5,
    borderRadius: 3,
    borderColor: 'lightgrey',
  },
  buttonText: {
    alignSelf: 'center',
    paddingTop: 11,
    paddingBottom: 11,
    backgroundColor: 'transparent',
  },
};

const ButtonSideMenu = ({ title, onPress }) =>
  <View style={styles.button}>
    <LinearGradient
      colors={['#fff', '#ccc']}
    >
      <TouchableOpacity
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  </View>
;

ButtonSideMenu.propTypes = {
  title: React.PropTypes.string,
  onPress: React.PropTypes.any,
};

export default ButtonSideMenu;
