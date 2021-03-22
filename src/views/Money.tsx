import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './money/TagsSection';
import {NoteSection} from './money/NoteSection';
import {CategorySection} from './money/CategorySection';
import {NumberSection} from './money/NumberSection';
import {useRecords} from 'hooks/useRecords';
import {Pickers} from './Pickers';
const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0,
  datetime: new Date(),
};

function Money() {
  const [selected,setSelected] = useState(defaultFormData);
  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功');
      setSelected(defaultFormData);
    }
  };

  return (
    <MyLayout>

      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
      <Pickers value={selected.datetime} onChange={datetime => onChange({datetime})} placeholder="请输入日期" format="YYYY-MM-DD" placement="topStart"/>
      <NumberSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={submit}/>
      {JSON.stringify(selected)}
    </MyLayout>
  );
}

export default Money;