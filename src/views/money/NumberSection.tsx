import {Wrapper} from './NumberSession/Wrapper1';
import {generateOutput} from './NumberSession/generateOutput';
import React, {useEffect, useState} from 'react';
import Icon from 'components/Icon';

type Props = {
  value: number,
  onChange: (value: number) => void,
  onOk: () => void,
  changeAmount: Boolean
}
const NumberSection: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState(props.value.toString());
  useEffect(() => {
    if (props.changeAmount) setOutput('');
    // eslint-disable-next-line
  }, [props.changeAmount]);
  const setOutput = (output: string) => {
    let newOutput: string;
    if (output.length > 16) {
      newOutput = output.slice(0, 16);
    } else if (output.length === 0) {
      newOutput = '0';
    } else {
      newOutput = output;
    }
    _setOutput(newOutput);
    props.onChange(parseFloat(newOutput));
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    let text;
    if ((e.target as HTMLButtonElement).className.trim() === 'delete'){
      text = 'delete'
    }else{
      text = (e.target as HTMLButtonElement).textContent;
    }
    if (text === null) return;
    if (text === 'ok') {
      if (props.onOk) {
        props.onOk();
      }
      return;
    }
    if ('0123456789.'.split('').concat('delete', '清空').indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }
  };
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="delete"><Icon name="delete"/></button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">ok</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  );
};
export {NumberSection};