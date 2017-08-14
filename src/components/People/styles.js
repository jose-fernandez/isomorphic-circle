import React from 'react';
import styled from 'styled-components';

export const ComponentOne = styled.div`
  width: 60%;
  height: 600px;
  float: left
`;

export const ComponentTwo = styled.div`
  width: 39%;
  height: 600px;
  float: right;
`;

export const Container = styled.div`
  position: relative;
  top:15%;
  text-align: center;
`;

export const Wallpaper = styled.div`
  background-image: url("../images/wallpaper.jpg");
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
`;

export const WallpaperInput = styled.div`
  background-image: url("../images/cube.gif");
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
`;

export const PersonalInfo = styled.p`
  color: white;
  font-size: 30px;
  margin-top: 4%;
  width: 100%;
  font-family: Comic Sans MS, Times;
`;

export const Email = styled.a`
  color: white;
  font-size: 18px;
  width: 100%;
  font-family: Comic Sans MS, Times;
`;

export const Location = styled.p`
  color: white;
  font-size: 15px;
  width: 100%;
  margin-top: -1%;
  font-family: Comic Sans MS, Times;
`;

export const ResultComponent = styled.div`
  color: white;
  font-size: 40px;
  width: 100%;
  margin-top: 5%;
  margin-left: 40%;
  font-family: Comic Sans MS, Times;
`;

export const ResultContainer = styled.div`
  width: 40%;
  height: 300px;
  border: 3px solid darkslategrey;
  border-radius: 15px;
  background-color: #B3B3B3;
  margin-top: 10%;
  margin-left: 27%;
`;

export const Comment = styled.p`
  
`;

