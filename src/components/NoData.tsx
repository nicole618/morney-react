import styled from 'styled-components';
import Icon from './Icon';

const NoDatas = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  color: $color-lowLight;
  margin-top: 40px;
  .icon{
    width: 50%;
    height: auto;
    margin: 0 auto;
  }
  &.hide{
    display: none;
  }
`;
function NoData(){
  return (
    <NoDatas>
      <Icon name="noData"/>
      <p>暂无数据哟~</p>
    </NoDatas>
  );
}

export default  NoData;