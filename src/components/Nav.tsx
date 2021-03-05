import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper =styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,.25);
  line-height: 24px;
  >ul{
    display: flex;
    >li{
      width: 33.3333%;
      text-align: center;
      padding: 5px 0;
      >a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        >.icon{
          fill: #999; 
          color: #999;
          width: 26px; 
          height: 26px;
          margin-bottom: 2px;
        }
        &.selected{
          color: #000;
          .icon{
            fill: #000;
          }
        }
      }
    }
  }
`;
const Nav = ()=>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected"><Icon name="tag"/>标签</NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected"><Icon name="money"/>记一笔</NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected"><Icon name="chart"/>统计</NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav;