import React from 'react';
import { Actions } from 'react-native-router-flux';
import styled from 'styled-components/native';

const Touchable = styled.TouchableHighlight`
  width: 90%;
  margin-left: 5%;
`;
const CharacterRow = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 10;
  padding-bottom: 35;
  border-width: 0.5;
  border-color: lightgrey;
  width: 100%;
`;
const Description = styled.Text`
  font-size: 13;
  position: relative;
  left: 10;
  top: 20;
  color: #31708f;
  width: 70%;
`;
const Position = styled.Text`
  text-align: center;
  font-size: 12;
  color: white;
  font-weight: bold;
`;
const PositionContainer = styled.View`
  border-radius: 3;
  left: 70;
  top: 10;
  padding: 3px;
  position: absolute;
  background-color: grey;
`;
const Img = styled.Image`
  margin-left: 10;
  width: 50;
  height: 50;
`;


const Row = (rowData) =>
  <Touchable
    underlayColor="lightgrey"
    onPress={() => { Actions.employee(rowData); }}
  >
    <CharacterRow>
      <Img source={{ uri: rowData.item.img }} />
      <Description>
        {rowData.item.description}
      </Description>
      <PositionContainer>
        <Position>
          {rowData.item.position}
        </Position>
      </PositionContainer>
    </CharacterRow>
  </Touchable>
;
export default Row;
