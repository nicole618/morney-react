import styled from 'styled-components';
import Icon from './Icon';
import {NavLink} from 'react-router-dom';
import React from 'react';


const NoFounds = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: #edccb8;
  .icon{
    width: 50%;
    height: auto;
    display: flex;
    align-items: center;
  }
`;

function NoFound(){
  return (
    <NoFounds>
      <Icon name="404"/>
      <NavLink to="/" >返回首页</NavLink>
    </NoFounds>
  )
}

export default  NoFound;