import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
const Label = styled.label`
  display: flex;
  align-items: center;
  padding:0 16px;
  background: #f3eeeb;
  >span{
    display: flex;
    align-items: center;
    .icon{
      width: 1.5em;
      height: 1.5em;
      position: relative;
      bottom: 1.5px;
    }
  }
  >input{
    height: 48px;
    border: none;
    flex-grow: 1;
    background: transparent;
    &::placeholder {
      color: #999;
    }
    &::-webkit-input-placeholder {
      color: #999;
    }
    &:-moz-placeholder {
      color: #999;
    }
    &:-ms-input-placeholder {
      color: #999;
    }
  }
`;
type Props = {
  label: string
}& React.InputHTMLAttributes<HTMLInputElement>
const Input:React.FC<Props> = (props)=>{
  const {label,...reset} = props
  return (
    <Label>
      <span><Icon name="remark"/>{props.label}</span>
      <input {...reset}/>
    </Label>
  )
}

export {Input}