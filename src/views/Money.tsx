import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './money/TagsSection';
import {NoteSection} from './money/NoteSection';
import {CategorySection} from './money/CategorySection';
import {NumberSection} from './money/NumberSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Category = '-' | '+';
function Money() {

  const [selected,setSelected] = useState({
    tagIds:[] as number [],
    note:'',
    category:'-' as Category,
    amount:0
    });
  const onChange =(obj:Partial<typeof selected>)=>{
    setSelected({
      ...selected,
      ...obj
                })
  }
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds} onChange={(tags)=>onChange({tagIds:tags})}/>
      <NoteSection value={selected.note} onChange={(note)=>onChange({note:note})}/>
      <CategorySection value={selected.category} onChange={(category)=>{onChange({category:category})}}/>
      <NumberSection value={selected.amount} onChange={(amount)=>{onChange({amount:amount})}}/>
    </MyLayout>
  );
}

export default Money;