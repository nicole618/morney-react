import Layout from 'components/Layout';
import React, {useEffect, useState} from 'react';
import {CategorySection} from './money/CategorySection';
import styled from 'styled-components';
import {useRecords, RecordItem} from 'hooks/useRecords';
import {DayType} from './DayType';
import {Category} from '../hooks/typeState';
import {Pickers} from './Pickers';
import EChartsReact from 'echarts-for-react';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import dayjs from 'dayjs';
import Icon from '../components/Icon';
import NoData from '../components/NoData';

type Query = {
  type: Category,
  dateTime: Date,
  dayType: string,
  dateTimeFormat: string
}
type Echarts = {
  name: string;
  value: number;
}

const StatisticsOl = styled.ol`
  &.hide {
    display: none;
  }
  .RecordShow{
    margin: 10px 0;
    &.hide{
      display: none;
    }
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    background: #f3eeeb;
    border-top: 1px solid #fff;
    &.statisticsHead {
      background: #edccb8;
    }
    .statisticsRight {
      flex-grow: 1;
      margin-left: 20px;
      text-align: right;
      color: #999;
    }
    .statisticsLeft {
      white-space: nowrap;
      display: flex;
      align-items: center;
      .recordText{
        padding: 0 5px;
      }
      .icon {
        color: #999;
      }
    }
  }
`;

function Statistics() {
  const [query, setQuery] = useState<Query>({
                                              type: '-',
                                              dateTime: new Date(),
                                              dayType: '1',
                                              dateTimeFormat: 'YYYY-MM-DD'
                                            });
  const {records} = useRecords();
  let echartsData: Echarts[] = [];
  let totalAmount: number = 0;
  let recordResult:RecordItem[] = [];
  const defaultEcharts = {
    title: {
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: '金额统计',
        type: 'pie',
        radius: '50%',
        data: echartsData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ],
    color: ['#eddcd1', '#d99061', '#fb5f03', '#f3eeeb', '#b49683', '#c6a932', '#d9e394', '#67c23a', '#946950', '#a7c4e2',],
  };
  const [tAmount,setTAmount] = useState<number>(0);
  const [rRItem,setRItem] = useState<RecordItem[]>([]);
  const [echarts, setEcharts] = useState<{ title: object, tooltip: object, legend: object, series: object, color: string[] }>(defaultEcharts);
  const onChange = (obj: Partial<typeof query>) => {
    setQuery({...query, ...obj});
  };

  const groupedList = () => {
    echartsData = [];
    totalAmount = 0;
    recordResult = [];
    if(query.dayType === '1'){
      setQuery({...query,dateTimeFormat:'YYYY-MM-DD'})
    }else if(query.dayType === '2'){
      setQuery({...query,dateTimeFormat:'YYYY-MM'})
    }
    const recordByType = records.filter(record => record.category === query.type);
    if (recordByType.length === 0) {setRItem([]);return;}
    let nowTime = query.dateTime;
    const hashmap: any = {};
    for (let i = 0; i < recordByType.length; i++) {
      if (query.dayType === '1') {
        const recordTime = dayjs(recordByType[i].datetime).format('YYYY-MM-DD');
        const oldTime = dayjs(nowTime).format('YYYY-MM-DD');
        if (recordTime === oldTime) {
          totalAmount += recordByType[i].amount;
          recordResult.push(recordByType[i]);
          const oldType: string | undefined = recordByType[i]&&recordByType[i].tag&&recordByType[i].tag.textValue;
          if (oldType === undefined) return;
          if (oldType in hashmap) {
            hashmap[oldType] += recordByType[i].amount;
          } else {
            hashmap[oldType] = recordByType[i].amount;
          }
        }
      } else if (query.dayType === '2') {
        const recordTime = dayjs(recordByType[i].datetime).format('YYYY-MM');
        const oldTime = dayjs(nowTime).format('YYYY-MM');
        if (recordTime === oldTime) {
          totalAmount += recordByType[i].amount;
          recordResult.push(recordByType[i]);
          const oldType: string | undefined = recordByType[i]?.tag?.textValue;
          if (oldType === undefined) return;
          if (oldType in hashmap) {
            hashmap[oldType] += recordByType[i].amount;
          } else {
            hashmap[oldType] = recordByType[i].amount;
          }
        }
      }
    }
    for (let key in hashmap) {
      if (hashmap.hasOwnProperty(key)) {
        const obj = {name: '', value: 0};
        obj.name = key;
        obj.value = hashmap[key];
        echartsData.push(obj)
      }
    }
    setTAmount(totalAmount);
    setRItem(recordResult);
  };
  const getOption = () => {
    setEcharts({
                 title: {
                   left: 'center'
                 },
                 tooltip: {
                   trigger: 'item'
                 },
                 legend: {
                   orient: 'vertical',
                   left: 'left',
                 },
                 series: [
                   {
                     name: '金额统计',
                     type: 'pie',
                     radius: '50%',
                     data: echartsData,
                     emphasis: {
                       itemStyle: {
                         shadowBlur: 10,
                         shadowOffsetX: 0,
                         shadowColor: 'rgba(0, 0, 0, 0.5)'
                       }
                     }
                   }
                 ],
                 color: ['#eddcd1', '#d99061', '#fb5f03', '#f3eeeb', '#b49683', '#c6a932', '#d9e394', '#67c23a', '#946950', '#a7c4e2',],
               });
  };
  useEffect(() => {
    groupedList();
    getOption();
    // eslint-disable-next-line
  }, [records,query.type,query.dayType,query.dateTime]);
  return (
    <Layout>
      <CategorySection value={query.type} onChange={type => onChange({type})}/>
      <DayType dayType={query.dayType} onChange={dayType => onChange({dayType})}/>
      <Pickers value={query.dateTime} onChange={(dateTime) => onChange({dateTime})} placeholder="请选择时间"
               format={query.dateTimeFormat} placement="bottomStart"/>
      <div className={rRItem.length>0?'hideScroll RecordShow':'hideScroll RecordShow hide'}>
        <div className="showEcharts">
          <EChartsReact option={echarts}/>
        </div>
        <StatisticsOl>
          <li className="statisticsHead">
            <span>总金额</span>
            <span>￥{tAmount}</span>
          </li>
          {rRItem.map(record =>
                        <li key={Math.random()}>
                          <div className="statisticsLeft">
                            <Icon name={record.tag.name}/>
                            <span className="recordText">{record.tag.textValue}</span>
                            <span>￥{record.amount}</span>
                          </div>
                          <div className="statisticsRight oneLine">
                            {record.note}
                          </div>
                        </li>
          )}
        </StatisticsOl>
      </div>
      <NoData className={rRItem.length === 0 ?'show':''}/>
    </Layout>
  );
};

export default Statistics;