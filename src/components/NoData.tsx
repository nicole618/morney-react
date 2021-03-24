import styled from 'styled-components';
import Icon from './Icon';
import React from 'react';

const NoDatas = styled.div`
  display: flex;
  display: none;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  color: #edccb8;
  margin-top: 40px;
  .icon{
    width: 50%;
    height: auto;
    margin: 0 auto;
  }
  &.show{
    display: block;
  }
`;
type Props = {
  className: string
}
const NoData:React.FC<Props> = (props)=>{
  return (
    <NoDatas className={props.className}>
      <Icon name="noData"/>
      <p>暂无数据哟~</p>
    </NoDatas>
  );
}

export default  NoData;