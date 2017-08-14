import React from 'react';
import styled from 'styled-components/native';

const Base = styled.View`
    margin-top: 63;
    align-items: center;
`;
const NewsImage = styled.Image`
    margin-top: 60;
    width: 100%;
    height: 200;
`;
const Name = styled.Text`
    margin-top: 30;
`;
const Desc = styled.Text`
    margin-top: 30;
    width: 80%;
`;

const NewsItemNative = (props) =>
  <Base>
    <NewsImage source={{ uri: props.item.urlToImage }} />
    <Name>{props.item.author}</Name>
    <Desc>{props.item.description}</Desc>
  </Base>
;


NewsItemNative.propTypes = {
  item: React.PropTypes.object,
};
export default NewsItemNative;
