import styled from 'styled-components';
import React, {useRef, useState} from 'react';

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
const NoteSection = ()=>{
  const [note,setNode]=useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = ()=>{
    if(refInput.current !==null)setNode(refInput.current.value)
  }
  return(
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" defaultValue={note} ref={refInput} onBlur={onBlur} placeholder="在这里添加备注"/>
      </label>
    </Wrapper>
  )
}

export {NoteSection};