import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
require('icons/money.svg');
require('icons/tag.svg');
require('icons/chart.svg');


const NavWrapper =styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,.25);
  line-height: 24px;
  >ul{
    display: flex;
    >li{
      width: 33.3333%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 5px 0;
      >.icon{
        fill:currentColor;
        color: #999;
        width: 26px;
        height: 26px;
        margin-bottom: 2px;
      }
    }
  }
`;
const Nav = ()=>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <svg className="icon">
            <use xlinkHref="#tag"></use>
          </svg>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#money"></use>
          </svg>
          <Link to="/money">记一笔</Link>
        </li>
        <li>
          <svg className="icon">
            <use xlinkHref="#chart"></use>
          </svg>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav;