import {useEffect, useRef} from 'react';

const useUpdate = (fn: () => void, deps: [{ id: number; name: string }[]]) =>{
const count = useRef(0);
useEffect(()=>{
  count.current +=1;
})
useEffect(()=>{
  if(count.current>1){
    fn();
  }
},[deps])
}

export {useUpdate}