import styled from 'styled-components';
import {Tag, useTags} from 'hooks/useTags';
import React from 'react';
import Icon from 'components/Icon';
import 'animation.scss'
import { Route } from 'react-router'
import {NavLink} from 'react-router-dom';
const Wrapper = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  >ol{
    display: flex;
    flex-wrap: wrap;
    >li{
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-items: center;
      width: 23%;
      margin: 1%;
      div{
        background: #f3eeeb;
        height: 40px;
        width: 100%;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin-bottom: 5px;
        .icon{
          width: auto;
          height: 60%;
        }
      }
      &.selected{
        color: #fb5f03;
        div{
          background: #fb5f03;
          color: #fff;
          .icon{
            -webkit-animation: icon-bounce .5s alternate;
            animation: icon-bounce .5s alternate;
          }
        }
      }
    }
  }
  >button{
    background: none;border: none;
    padding: 2px 4px;border-bottom: 1px solid #333;
    color: #666;margin-top: 8px;
  }
`;

type Props ={
  value:Tag,
  onChange:(tag: Tag)=>void,
  type: string
}

const TagsSection:React.FC<Props> = (props)=>{
  const {tags,addTag} = useTags();
  const selectedTag = props.value;
  const typeTags: Tag[] = tags.filter(tag=>tag.type === props.type)
  const onToggleTag = (tag:Tag)=>{
    if(selectedTag.id === tag.id){
      //如果有当前选中元素，就过滤掉当前元素
      props.onChange({} as Tag)
    }else{
      props.onChange(tag)
    }
  }
  const getClass = (tagId:number)=> selectedTag.id === tagId ? 'selected':'';
  return(
  <Wrapper>
    <ol>
      {typeTags.map(tag=><li key={tag.id} onClick={()=>{onToggleTag(tag)}} className={getClass(tag.id)}>
        <div><Icon name={tag.name}/></div>
        <p>{tag.textValue}</p>
      </li>)}
      <li>
        <NavLink to="/tags" >
          <div>
            <Icon name="add"/>
          </div>
          <p>编辑标签</p>
        </NavLink>
      </li>
  </ol>
  </Wrapper>
  )
}

export {TagsSection};