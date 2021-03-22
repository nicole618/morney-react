import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from 'hooks/useUpdate';

const useTags = () =>{ //封装一个自定义Hook
  const [tags,setTags] = useState<{id:number;name:string}[]>([]);
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
  const updateTag = (id:number,obj:{name:string})=>{
    setTags(tags.map(tag=>tag.id === id ?{id:id,name:obj.name}:tag));
  };
  const deleteTag = (id:number)=>{
    setTags(tags.filter(tag=>tag.id !== id))
  }
  const addTag = () =>{
    const tagName = window.prompt('新的标签名为：')
    if (tagName != null && tagName !== ''){
      setTags([...tags,{id:createId(),name:tagName}])
    }
  }
  const getName = (id:number) =>{
    const tag = tags.filter(t=>t.id === id)[0];
    return tag ? tag.name : '';
  }
  const getIcons = ()=>{
    return  ['clothing','food','live','travel','wages','stock','fiscal','lottery',
      'custom1','custom2','custom3','custom4','custom5','custom6','custom7','custom8'];
  }
  return {tags,getName,setTags,findTag,updateTag,findTagIndex,deleteTag,addTag,getIcons};
}

export {useTags}
