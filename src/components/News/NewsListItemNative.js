import React from 'react';
import styled from 'styled-components/native';
import { TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const CharacterRow = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 20;
  padding-bottom: 20;
`;
const BgrImage = styled.Image`
  flex: 1;
  resize-mode: cover;
`;
const Title = styled.Text`
  text-align: center;
  font-size: 17;
  flex: 1;
  color: #212121;
`;
const Author = styled.Text`
  text-align: center;
  position: absolute;
  left: 135;
  top: 60;
  padding: 3px;
  font-size: 12;
  background-color: grey;
`;
const Icon = styled.Image`
  margin-left: auto;
  margin-right: 20;
  width: 50;
  height: 50;
`;

const Row = (rowData) =>
  <TouchableHighlight onPress={() => { Actions.newsDetail(rowData); }}>
    <BgrImage source={{ uri: rowData.item.urlToImage }}>
      <CharacterRow>
        <Title>
          {rowData.item.title}
        </Title>
        <Author>
          {rowData.item.author}
        </Author>
        <Icon
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
        />
      </CharacterRow>
    </BgrImage>
  </TouchableHighlight>
;
export default Row;
