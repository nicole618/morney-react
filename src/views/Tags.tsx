import Layout from 'components/Layout';
import React, {useState} from 'react';
import {useTags} from 'hooks/useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link,useLocation} from 'react-router-dom';
import {Center} from 'components/Center';
import {Space} from '../components/Space';
import {CategorySection} from './money/CategorySection';
import {Category} from 'hooks/typeState';
import { Modal ,Button,Icon as Iconrs} from 'rsuite';
const TagList = styled.ol`
  padding: 16px 0;
  flex-grow: 1;
  > li {
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    border-bottom: 1px solid #fff;
    background: #f3eeeb;
    height: 40px;
    >div{
      display: flex;
      align-items: center;
    }
    .tagLeft{
      .icon{
        color: #999;
        margin-right: 5px;
        width: 20px;
        height: 20px;
      }
    }
    .tagRight{
      a{
        margin-right: 5px;
        span{
          background:#edccb8 ;
          &:hover{
            background: #fb5f03;
          }
        }
      }
      span{
        width: 26px;
        height: 26px;
        background: #f56c6c;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        cursor: pointer;
        .icon{
          width: 18px;
          height: 18px;
        }
        &:hover{
          background: #f78989;
        }
      }
    }
  }
  
`;
function Tags() {
  const {findTagByType,deleteTag} = useTags();
  const query = new URLSearchParams(useLocation().search).get('queryTagType');
  let initialType: Category = '-';
  if( query && query.trim() === '收入'){
    initialType = '+';
  }
  const [state, setState] = useState(false);
  const [deleteId,setDeleteId] = useState(-1);
  const show = (id: number) =>{
    setDeleteId(id)
    setState(true)
  }

  const close = () =>{
    setState(false)
  }
  const confirm = () =>{
    deleteTag(deleteId)
    close();
  }
  const [tagType,setTagType] = useState<Category>(initialType);
  const onChange = (tagType: Category) => {
    setTagType(tagType);
  };
  const tagsByType = findTagByType(tagType);
  return (
    <Layout>
      <CategorySection value={tagType}
                       onChange={tagType => onChange(tagType)}/>
      <TagList className="hideScroll">
        {tagsByType.map(tag=>
                    <li key={tag.id}>
                      <div className="tagLeft">
                        <Icon name={tag.name}/>
                        <span className="onLine">{tag.textValue}</span>
                      </div>
                      <div className="tagRight">
                        <Link to={`/addEditTag/`+tag.id+'/'+tagType}>
                          <span>
                          <Icon name="editTag"/>
                        </span>
                        </Link>
                        <span onClick={()=>show(tag.id)}>
                          <Icon name="deleteTag"/>
                        </span>
                      </div>
                    </li>
        )}
        <Modal backdrop="static" show={state} onHide={()=>close()} size="xs" >
          <Modal.Body>
            <Iconrs
              icon="remind"
              style={{
                color: '#ffb300',
                fontSize: 24
              }}
            />
            确认删除标签？
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>confirm()} appearance="primary">
              删除
            </Button>
            <Button onClick={()=>close()} appearance="subtle">
              取消
            </Button>
          </Modal.Footer>
        </Modal>
      </TagList>
      <Space/><Space/>
      <Center>
        <Link to={"/addEditTag/"+tagType} className="addEdit">
          新增{tagType === '+' ? '收入':'支出'}标签
        </Link>
      </Center>
      <Space/><Space/>
    </Layout>
  );

}

export  default  Tags;