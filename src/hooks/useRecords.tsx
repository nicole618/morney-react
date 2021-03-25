import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import {Tag} from './useTags';
import { Alert } from 'rsuite';
export  type RecordItem = {
  tag: Tag,
  note:string,
  category:'+'|'-',
  amount:number,
  datetime: Date
}

//type newRecordItem = Omit<RecordItem, 'createAt'>

export const useRecords =()=>{
  const [records,setRecords] = useState<RecordItem[]>([]);
  useEffect(()=>{
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  },[]);
  useUpdate(()=>{
    window.localStorage.setItem('records',JSON.stringify(records));
  },records)
  const addRecord = (newRecord:RecordItem)=>{
    if(newRecord.amount <=0 ){
      if (document.querySelectorAll('.rs-alert-item-wrapper').length>0){
        return false;
      }else{
        Alert.warning('请输入金额');
      }
      return false;
      }
    if(newRecord.tag.id === -1 || newRecord.tag.id === undefined){
      if (document.querySelectorAll('.rs-alert-item-wrapper').length>0){
        return false;
      }else{
        Alert.warning('请选择一个标签');
      }
      return false;
    }
    const record ={...newRecord}
    setRecords([...records,record]);
    return true;
  }
  return {records,addRecord}
}