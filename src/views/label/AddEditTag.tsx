import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import Icon from 'components/Icon';
import {useParams, useHistory} from 'react-router-dom';
import {Category, categoryMap} from 'hooks/typeState';
import {NoteSection} from '../money/NoteSection';
import {Tag, useTags} from 'hooks/useTags';
import {Button} from 'components/Button';
import Layout from '../../components/Layout';
import {Alert} from 'rsuite';

const AddEdit = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    background: #edccb8;

    p {
      font-size: 18px;
    }

    .icon {
      width: 25px;
      height: 25px;
      cursor: pointer;

      &.rightIcon {
        visibility: hidden;
      }
    }
  }

  .editAddContent {
    padding: 16px 0;
  }
  .tagIcon {
    padding: 0 16px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    li {
      width: 22%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1% 1.5%;
      border-radius: 8px;
      background: #f3eeeb;
      height: 40px;
      overflow: hidden;

      .icon {
        width: auto;
        height: 60%;
      }

      &.selected {
        background: #fb5f03;
        color: white;

        .icon {
          -webkit-animation: icon-bounce 0.5s alternate;
          -moz-animation: icon-bounce 0.5s alternate;
          -o-animation: icon-bounce 0.5s alternate;
          animation: icon-bounce 0.5s alternate;
        }
      }
    }
  }
`;
type Params = {
  idString: string,
  tagType: Category
}
const AddEditTag: React.FC = (props) => {
  const {idString, tagType} = useParams<Params>();
  const {getIcons,addTag,updateTag,findTag} = useTags();
  const defaultTag = {id:-1,name:'',textValue: '',type:tagType};
  const [tag, setTag] = useState<Tag>(defaultTag);
  const oldTag  = findTag(parseInt(idString));
  useEffect(()=>{
    if (oldTag !== undefined){
      setTag({...oldTag})
    }
  },[oldTag])
  const icons = getIcons();
  const typeName = categoryMap[tagType];
  const editAdd = idString !== undefined ? '编辑' : '新增';
  const history = useHistory();
  const goBack = () => {
    history.push(`/tags?queryTagType= ${typeName}`);
  };
  const onChange = (obj: Partial<typeof tag>) => {
    setTag({...tag, ...obj});
  };
  const toggleIcon = (tagName: string)=>{
    if(tagName === tag.name){
      setTag({...tag,name:""});
    }else{
      setTag({...tag,name:tagName});
    }
  }
  const addOrEdit = ()=>{
    if (tag.textValue === '' || tag.name === ''){
      if (document.querySelectorAll('.rs-alert-item-wrapper').length>0){
        return false;
      }else{
        Alert.warning('标签名和图标不能为空');
      }
      return ;
    }
    if(editAdd === '新增'){
      addTag(tag);
      Alert.success('新增标签成功');
    }else if(editAdd === '编辑'){
      updateTag(tag.id,{name:tag.name,textValue:tag.textValue,type:tag.type});
      Alert.success('编辑标签成功');
    }
    goBack();
  }
  return (
    <Layout>
    <AddEdit>

      <header>
        <Icon name="left" onClick={goBack}/>
        <p>{editAdd}{typeName}标签</p>
        <Icon name="right" className="rightIcon"/>
      </header>
      <div className="editAddContent">
        <NoteSection value={tag.textValue}
                     onChange={textValue => onChange({textValue})}
                     maxlength={4} placeholder="请输入标签名"
                     label="标签名："/>
      </div>
      <ol className="tagIcon hideScroll">
        {icons.map((tagName,index)=>
                          <li key={index} onClick={()=>toggleIcon(tagName)} className={tagName === tag.name ? 'selected':''}>
                            <Icon name={tagName}/>
                          </li>
        )}

      </ol>
        <Button onClick={()=>addOrEdit()}>{ editAdd }</Button>
    </AddEdit>
    </Layout>
  );
};

export {AddEditTag};