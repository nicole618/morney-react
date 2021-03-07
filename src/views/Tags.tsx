import Layout from 'components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';
import {Button} from 'components/Button';
import {Center} from 'components/Center';
import {Space} from '../components/Space';

const TagList = styled.ol`
  font-size: 16px;
  background: #fff;
  > li {
    border-bottom: 1px solid #D5D5D5;
    line-height: 20px;
    margin-left: 16px;
    .icon{
      width: 25px;
      height: 25px;
      fill:#999;
    }
    a{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px 12px 0;
    }
  }
`;
function Tags() {
  const {tags,addTag} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag=>
                    <li key={tag.id}>
                      <Link to={'/tags/'+tag.id}>
                        <span className="onLine">{tag.name}</span>
                        <Icon name="right"></Icon>
                      </Link>
                    </li>
        )}
      </TagList>
      <Space/><Space/>
      <Center>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );

}

export  default  Tags;