import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from 'hooks/useUpdate';
import {Category} from './typeState';

export  type Tag = {
  id: number,
  name: string,
  textValue: string,
  type: string
}

const useTags = () =>{ //封装一个自定义Hook
  const [tags,setTags] = useState<Tag[]>([]);
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags)
  useEffect(()=>{
    let lTags = window.localStorage.getItem('tags');
    let localTags;
    if(lTags){
      localTags =JSON.parse(lTags)
    }else{
      localTags =[
        {
          id: createId(),
          name: 'clothing',
          textValue: '衣',
          type: '-'
        },
        {
          id: createId(),
          name: 'food',
          textValue: '食',
          type: '-'
        },
        {
          id: createId(),
          name: 'live',
          textValue: '住',
          type: '-'
        },
        {
          id: createId(),
          name: 'travel',
          textValue: '行',
          type: '-'
        },
        {
          id: createId(),
          name: 'wages',
          textValue: '工资',
          type: '+'
        },
        {
          id: createId(),
          name: 'stock',
          textValue: '股票',
          type: '+'
        },
        {
          id: createId(),
          name: 'fiscal',
          textValue: '理财',
          type: '+'
        },
        {
          id: createId(),
          name: 'lottery',
          textValue: '彩票',
          type: '+'
        }
      ]
    }
    setTags(localTags)
  },[])
  const findTag = (id:number) => tags.filter(tag=>tag.id === id)[0];
  const findTagIndex = (id:number)=>{
    let result = -1;
    for(let i =0;i<tags.length;i++){
      if(tags[i].id===id){
        result = i;
        break;
      }
    }
    return result;
  }
  const findTagByType = (type: Category) => {
    return tags.filter(tag => tag.type === type);
  }
  const updateTag = (id:number,obj:{name:string,textValue: string,type:string})=>{
    setTags(tags.map(tag=>tag.id === id ?{id:id,name:obj.name,type:obj.type,textValue:obj.textValue}:tag));
  };
  const deleteTag = (id:number)=>{
    setTags(tags.filter(tag=>tag.id !== id))
  }
  const addTag = (tag: Tag) =>{
    setTags([...tags,{...tag,id:createId()}]);
  }
  const getName = (id:number) =>{
    const tag = tags.filter(t=>t.id === id)[0];
    return tag ? tag.name : '';
  }
  const getIcons = ()=>{
    return  ['clothing','food','live','travel','wages','stock','fiscal','lottery',
      'custom1','custom2','custom3','custom4','custom5','custom6','custom7','custom8'];
  }
  return {tags,getName,setTags,findTag,updateTag,findTagIndex,deleteTag,addTag,getIcons,findTagByType};
}

export {useTags}
