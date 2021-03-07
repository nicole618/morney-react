import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom'
import Layout from 'components/Layout';
import Icon from 'components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';

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
const Tag:React.FC = (props)=>{
   const {findTag} = useTags();
   let { id } = useParams<Params>()
   const tag = findTag(parseInt(id));
   return(
     <Layout>
        <TopBar>
          <Icon name = "left"/>
          <span>编辑标签</span>
          <Icon/>
        </TopBar>
       <div>

       </div>
       <div>
         <Button>删除标签</Button>
       </div>
     </Layout>
   )
}

export {Tag}

