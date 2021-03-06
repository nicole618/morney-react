import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  > li {
    border-bottom: 1px solid #D5D5D5;
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon{
      width: 25px;
      height: 25px;
      fill:#999;
    }
  }
`;
const Button = styled.button`
  font-size: 16px;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  background: #767676;
  color: #fff;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 16px;
`
function Tags() {
  const {tags,setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag=>
          <li key={tag}>{tag}<Icon name="right"></Icon></li>
        )}
      </TagList>
      <Space/><Space/>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );

}

export  default  Tags;