import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';

const CategoryWrapper = styled.div`
  background: white;
`
function Statistics() {
  const [category,setCategory] = useState<'-'|'+'>('-');
  const  {records} = useRecords();
  return (
    <Layout>
      <CategoryWrapper>
      <CategorySection value={category} onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      <div>
        {JSON.stringify(records)}
      </div>
    </Layout>
  );
}

export default  Statistics;