import React, {ChangeEventHandler} from 'react';
import {Input} from 'components/Input';

type  Props = {
  value:string,
  onChange:(value:string)=>void,
  maxlength?:number,
  placeholder:string,
  label:string,
}
const NoteSection:React.FC<Props> = (props)=>{
  const note = props.value;
  const maxlength = props.maxlength;
  const onChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
    props.onChange(e.target.value)
  }
  return(
        <Input label={props.label} type="text" value={note}
               onChange={onChange} placeholder={props.placeholder}
               maxLength={maxlength !== undefined ? maxlength : 1000}/>
  )
}

export {NoteSection};