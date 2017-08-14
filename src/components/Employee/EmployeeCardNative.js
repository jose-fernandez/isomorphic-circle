import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';//eslint-disable-line

const Base = styled.View`
  background-color: #eee;
  height: 100%;
`;
const Container = styled.View`
  margin-top: 63px;
  width: 90%;
  align-self: center;
`;
const Name = styled.Text`
  margin-top: 10;
  font-size: 30;
  font-weight: bold;
  color: #212121;
`;
const Img = styled.Image`
  margin-top: 30;
  width: 300;
  height: 250;
  align-self: center;
  border-width: 5;
  border-bottom-width: 6;
  border-color: white;
  border-radius: 3;
`;
const DescContainer = styled.View`
  border-bottom-width: 1.5;
  border-radius: 3;
  border-color: lightgrey;
  background-color: white;
  margin-top: 15;
`;
const Header = styled.View`
  border-width: 0.5;
  border-bottom-width: 1.5;
  border-radius: 3;
  border-color: lightgrey;
`;
const HeaderText = styled.Text`
  padding: 10px;
  padding-left: 20;
  background-color: transparent;
`;
const Desc = styled.Text`
  padding: 12.5px;
  padding-left: 20;
`;

const EmployeeCardNative = ({ item }) =>
  <Base>
    <Container>
      <Img source={{ uri: item.img }} />
      <Name>{item.name}</Name>
      <DescContainer>
        <Header>
          <LinearGradient colors={['#fff', '#eee']} >
            <HeaderText>Position</HeaderText>
          </LinearGradient>
        </Header>
        <Desc>{item.position}</Desc>
      </DescContainer>
      <DescContainer>
        <Header>
          <LinearGradient colors={['#fff', '#eee']} >
            <HeaderText>Description</HeaderText>
          </LinearGradient>
        </Header>
        <Desc>{item.description}</Desc>
      </DescContainer>
    </Container>
  </Base>
  ;


EmployeeCardNative.propTypes = {
  item: React.PropTypes.object,
};
export default EmployeeCardNative;
