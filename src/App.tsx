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
import {Tag} from 'views/Tag';

const AppWrapper = styled.div`
  color: #333;
`;
function App() {
  return (
    <AppWrapper>
      <Router>
          <Switch>
            <Route path="/tags" exact>
              <Tags/>
            </Route>
            <Route path="/tags/:tag" exact>
              <Tag/>
            </Route>
            <Route path="/money" exact>
              <Money/>
            </Route>
            <Route path="/statistics" exact>
              <Statistics/>
            </Route>

            <Route path="*">
              <NoMatch/>
            </Route>

            <Redirect exact from="/" to="/money"/>
          </Switch>
       </Router>
    </AppWrapper>
  );
}
export default App;

