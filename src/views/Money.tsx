import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './money/TagsSection';
import {NoteSection} from './money/NoteSection';
import {CategorySection} from './money/CategorySection';
import {NumberSection} from './money/NumberSection';
import {RecordItem, useRecords} from 'hooks/useRecords';
import {Pickers} from './Pickers';
import {Alert} from 'rsuite';
import {Category} from '../hooks/typeState';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;


const defaultFormData: RecordItem = {
  tag: {id:-1,name:'',textValue:'',type:''},
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
      Alert.success('保存成功');
      setSelected(defaultFormData);
    }
  };

  return (
    <MyLayout>

      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <TagsSection value={selected.tag}
                   onChange={tag => onChange({tag})}
                   type = {selected.category}
      />
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})} label="备注" placeholder="请输入备注"/>
      <Pickers value={selected.datetime} onChange={datetime => onChange({datetime})} placeholder="请输入日期" format="YYYY-MM-DD" placement="topStart"/>
      <NumberSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={submit}/>
    </MyLayout>
  );
}

export default Money;