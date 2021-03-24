import Icon from 'components/Icon';
import styled from 'styled-components';
import React from 'react';

const DayTypeOl = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;

  li {
    width: 50%;
    padding: 10px 0;
    background: #eddcd1;

    .icon {
      margin-right: 5px;
    }

    &:nth-child(2) {
      background: #edccb8;
    }

    &.selected {
      background: #fb5f03;
      color: #fff;
    }

  }
`;
type Props = {
  dayType: string,
  onChange:(value:string)=>void,
}
const DayType:React.FC<Props> = (props)=>{
  const selectedDayType = (type: string)=>{
    props.onChange(type);
  }
  return (
    <DayTypeOl>
      <li className={props.dayType === '1'? 'selected' : ''} onClick={()=>selectedDayType('1')}><Icon name="day"/>按天</li>
      <li className={props.dayType === '2'? 'selected' : ''} onClick={()=>selectedDayType('2')}><Icon name="month"/>按月</li>
    </DayTypeOl>
  );
}

export {DayType};