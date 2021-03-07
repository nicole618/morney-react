import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom'
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from 'components/Center';
import {Space} from 'components/Space';

type Params = {
   id : string
}
const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #fff;
  .icon{
    width: 25px;
    height: 25px;
    fill:#999;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0 16px;
  margin-top:16px;
  
`;
const Tag:React.FC = (props)=>{
   const {findTag,updateTag} = useTags();
   let { id:idString } = useParams<Params>()
   const tag = findTag(parseInt(idString));
   return(
     <Layout>
        <TopBar>
          <Icon name = "left"/>
          <span>编辑标签</span>
          <Icon/>
        </TopBar>
       <InputWrapper>
        <Input label="标签名" type="text" placeholder="标签名" value={tag.name}
               onChange={(e)=>{updateTag(tag.id,{name:e.target.value})}}/>
       </InputWrapper>
       <Center>
         <Space/>
         <Space/>
         <Button>删除标签</Button>
       </Center>
     </Layout>
   )
}

export {Tag}

