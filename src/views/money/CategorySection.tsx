import styled from 'styled-components';
import React, {useState} from 'react';
import Icon from '../../components/Icon';

const Wrapper = styled.section`
  >ul{
    display: flex;
    font-size: 20px;
    background: #edccb8;
    >li{
      width: 50%;
      text-align: center;
      padding: 12px 0;
      position: relative;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon{
        margin-right: 4px;
      }
      &.selected{
        color: #fb5f03;
      }
    }
  }
`;
type  Props = {
  value:'-'|'+',
  onChange:(value:'-'|'+')=>void
}
const CategorySection:React.FC<Props> = (props)=>{
  const categoryMap = {'-':'支出','+':'收入'};
  const [categoryList] = useState<('-'|'+')[]>(['-','+']);
  const category = props.value;
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c=>
            <li key={c} className = { category === c ? 'selected':'' }
                onClick={()=>props.onChange(c)}>
              <Icon name={ c === '-' ? 'spend':'income'}/>{categoryMap[c]}
            </li>
        )}
      </ul>
    </Wrapper>
  )
}
export {CategorySection};