import styled from 'styled-components';
import React from 'react';
import Icon from 'components/Icon';
import {useParams, useHistory} from 'react-router-dom';
import {Category, categoryMap} from 'hooks/typeState';

const AddEdit = styled.div`
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
`;
type Params = {
  idString: string,
  tagType: Category
}
const AddEditTag: React.FC = (props) => {
  const {idString, tagType} = useParams<Params>();
  const typeName = categoryMap[tagType];
  const editAdd = idString !== undefined ? '编辑' : '新增';
  const history = useHistory();
  const goBack = () => {
    history.push(`/tags?queryTagType= ${typeName}`)
  };
  return (
    <AddEdit>
      <header>
        <Icon name="left" onClick={goBack}/>
        <p>{editAdd}{typeName}标签</p>
        <Icon name="right" className="rightIcon"/>
      </header>

    </AddEdit>
  );
};

export {AddEditTag};