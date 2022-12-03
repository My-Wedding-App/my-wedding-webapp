import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.scss';
import InvitePage from './views/invite/InvitePage';
import MainPage from './views/main/MainPage';

function App() {
  return (
    <>
      <Router>
        <Switch>          
          <Route exact path="/"><InvitePage /></Route>
          <Route path="/main"><MainPage /></Route>
        </Switch>
      </Router>,
    </>
  );
}

export default App;
