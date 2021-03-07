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
  const getName = (id:number) =>{
    const tag = tags.filter(t=>t.id === id)[0];
    return tag ? tag.name : '';
  }
  return {tags,getName,setTags,findTag,updateTag,findTagIndex,deleteTag,addTag};
}

export {useTags}
