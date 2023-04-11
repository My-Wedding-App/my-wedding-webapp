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
          <Route path="/main"><MainPage /></Route>
          <Route exact path="/admin"><AdminPage /></Route>
          <Route exact path="/:guestId" children={<InvitationPage />} />
        </Switch>
      </Router>,
    </>
  );
}

export default App;
