import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { MainPage, InvitationPage } from './views';

function App() {
  return (
    <>
      <Router>
        <Switch>          
          <Route exact path="/"><InvitationPage /></Route>
          <Route path="/main"><MainPage /></Route>
        </Switch>
      </Router>,
    </>
  );
}

export default App;
