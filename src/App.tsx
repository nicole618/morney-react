import React from 'react';
import Nav from 'components/Nav'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';

const Wrapper =styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column; 
`;
const Main =styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            //设置404页面
            <Route path="*">
              <NoMatch/>
            </Route>
            //设置默认路由
            <Redirect exact from="/" to="/money"/>
          </Switch>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}
function NoMatch() {
  return (
    <div>
      <h3>
        当前页面不存在，请重新输入地址！
      </h3>
    </div>
  );
}

export default App;

