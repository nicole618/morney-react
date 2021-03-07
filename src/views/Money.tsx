import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './money/TagsSection';
import {NoteSection} from './money/NoteSection';
import {CategorySection} from './money/CategorySection';
import {NumberSection} from './money/NumberSection';
import {useRecords} from 'hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Category = '-' | '+';
const defaultSelected = {
  tagIds:[] as number [],
  note:'',
  category:'-' as Category,
  amount:0
};
function Money() {
  const [selected,setSelected] = useState(defaultSelected);
  const {addRecords} = useRecords()
  const onChange =(obj:Partial<typeof selected>)=>{
    setSelected({
      ...selected,
      ...obj
                })
  }
  const submit = () =>{
    if(addRecords(selected)){
      alert('保存成功');
      setSelected(defaultSelected)
    }
  }
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds} onChange={(tags)=>onChange({tagIds:tags})}/>
      <NoteSection value={selected.note} onChange={(note)=>{onChange({note:note})}}/>
      <CategorySection value={selected.category} onChange={(category)=>{ onChange({category:category})}}/>
      <NumberSection value={selected.amount} onChange={(amount)=>{ onChange({amount:amount})}} onOk={submit}/>
    </MyLayout>
  );
}

export default Money;