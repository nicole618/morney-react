import {useEffect, useRef, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from 'hooks/useUpdate';

const useTags = () =>{ //封装一个自定义Hook
  const [tags,setTags] = useState<{id:number;name:string}[]>([]);
  const count = useRef(0);
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags])
  useEffect(()=>{
    let localTags =JSON.parse(window.localStorage.getItem('tags') || '[]');
    if(localTags.length === 0){
      localTags =[
        {id:createId(),name:'衣'},
        {id:createId(),name:'食'},
        {id:createId(),name:'住'},
        {id:createId(),name:'行'},
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
  return {tags,setTags,findTag,updateTag,findTagIndex,deleteTag,addTag};
}

export {useTags}
