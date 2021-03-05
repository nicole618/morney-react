import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Tags from 'views/Tags';
import Money from 'views/Money';
import Statistics from 'views/Statistics';
import NoMatch from 'views/NoMatch';
import styled from 'styled-components';

const AppWrapper = styled.div`
  color: #333;
`;
function App() {
  return (
    <AppWrapper>
      <Router>
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
       </Router>
    </AppWrapper>
  );
}
export default App;

