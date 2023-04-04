import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { MainPage, InvitationPage } from './views';
import AdminPage from './views/admin/AdminPage';

function App() {
  return (
    <>
      <Router>
        <Switch>          
          <Route exact path="/"><InvitationPage /></Route>
          <Route path="/main"><MainPage /></Route>
          <Route path="/admin"><AdminPage /></Route>
        </Switch>
      </Router>,
    </>
  );
}

export default App;
