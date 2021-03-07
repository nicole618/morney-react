import styled from 'styled-components';
import React, {ChangeEventHandler, useRef} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding:  16px;
  font-size: 14px;
  >label{
    display: flex; 
    align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none; 
    }
  }
`;
type  Props = {
  value:string,
  onChange:(value:string)=>void
}
const NoteSection:React.FC<Props> = (props)=>{
  const note = props.value;
  const onChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
    props.onChange(e.target.value)
  }
  return(
    <Wrapper>
      <label>
        <span>备注</span>
        {/*<input type="text" defaultValue={note} ref={refInput} onChange={onChange} placeholder="在这里添加备注"/>*/}
        <Input label="备注" type="text" value={note}  onChange={onChange} placeholder="在这里添加备注"/>
      </label>
    </Wrapper>
  )
}

export {NoteSection};