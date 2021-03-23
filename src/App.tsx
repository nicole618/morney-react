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
import {AddEditTag} from './views/label/AddEditTag';

const AppWrapper = styled.div`
 
`;
function App() {
  return (
    <AppWrapper>
      <Router>
          <Switch>
            <Route path="/tags" exact>
              <Tags/>
            </Route>
            <Route path="/money" exact>
              <Money/>
            </Route>
            <Route path="/addEditTag" exact>
              <AddEditTag/>
            </Route>
            <Route path="/addEditTag/:idString/:tagType" exact>
              <AddEditTag/>
            </Route>
            <Route path="/addEditTag/:tagType" exact>
              <AddEditTag/>
            </Route>
            <Route path="/statistics" exact>
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
       </Router>
    </AppWrapper>
  );
}
export default App;

