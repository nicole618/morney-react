import styled from 'styled-components';

const NumberSection = styled.section`
  display: flex;
  flex-direction: column;
  >.output{
    background: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,.25),inset 0 5px 5px -5px rgba(0,0,0,.25);
  }
  >.pad{
    >button{
      font-size: 18px;
      float: left;
      width: 20%;
      height: 64px;
      border: none;
      &.ok{
        height: 128px;
        float: right;
        background: #8B8B8B;
      }
     &:first-child{
       background: #F2F2F2;
     } 
      &:nth-child(2),&:nth-child(6){
        background: #E0E0E0;
      }
      &:nth-child(3),&:nth-child(7),&:nth-child(11){
        background: #D3D3D3;
      }
      &:nth-child(4),&:nth-child(8),&:nth-child(12),&:nth-child(16){
        background: #C1C1C1;
      }
      &:nth-child(5),&:nth-child(9),&:nth-child(13),&:nth-child(17){
        background: #B8B8B8;
      }
      &:nth-child(10),&:nth-child(14),&:nth-child(18){
        background: #A9A9A9;
      }
      &:nth-child(19){
        background: #9A9A9A;
      }
    }
  }
`
export {NumberSection}