// @ts-nocheck
import React from 'react';
import { DatePicker } from 'rsuite';
import Icon from '../components/Icon';
import styled from 'styled-components';
const Label = styled.label`
  display: flex;
  justify-items: center;
  padding: 0 16px;
  background: #f3eeeb;
  border-top:1px solid #fff;
  .rs-picker-date{
    flex-grow: 1;
  }
  span{
    display: flex;
    align-items: center;
    .icon{
      width: 21px;
      height: 21px;
    }
  }
`;

type Props = {
  value:Date,
  onChange:(value:Date)=>void,
  placeholder: string,
  format: string,
  placement: string
}

const Pickers:React.FC<Props> = (props)=>{


  return (
    <Label>
      <span><Icon name="date"/>日期：</span>
     <DatePicker placement={props.placement } placeholder={props.placeholder} format={props.format} value={props.value}
                 onChange={(date)=>{props.onChange(date)}}/>
    </Label>
 )
}

export {Pickers};