import React, {ChangeEventHandler} from 'react';
import {Input} from 'components/Input';

type  Props = {
  value:string,
  onChange:(value:string)=>void,
  maxlength?:number,
}
const NoteSection:React.FC<Props> = (props)=>{
  const note = props.value;
  const maxlength = props.maxlength;
  const onChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
    props.onChange(e.target.value)
  }
  return(
        <Input label="备注：" type="text" value={note}  onChange={onChange} placeholder="在这里添加备注" maxLength={maxlength !== undefined ? maxlength : 1000}/>
  )
}

export {NoteSection};