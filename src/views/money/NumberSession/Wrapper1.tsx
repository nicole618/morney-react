import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, .25), inset 0 5px 5px -5px rgba(0, 0, 0, .25);
  }

  > .pad {
    > button {
      width: 25%;
      font-size: 16px;
      border: none;
      float: left;
      background: none;
      height: 35px;
      background: $color-Light;
      display: flex;
      justify-content: center;
      align-items: center;

      &:nth-child(1) {
        background: #f3eeeb;
      }

      &:nth-child(2), &:nth-child(5) {
        background: #f3e9e3;
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: #f1e2d9;
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
        background: #e8d9d0;
      }

      &:nth-child(8), &:nth-child(11) {
        background: #e4d1c6;
      }

      &:nth-child(12), &:nth-child(14) {
        background: #e4ccbe;
      }

      &.ok {
        height: 70px;
        float: right;
      }

      &.dot {
        width: 50%;
      }
    }
  }
`;
export {Wrapper};