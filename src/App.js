import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Security from './components/Security'
import MenuImporter from './components/MenuImporter'
import './App.css';

function App() {
  return (
  <Router>
    <Switch>
      <Route path='/mdp' component={Security} />
      <Route path='/import' component={MenuImporter} />
      <Redirect to="/mdp"></Redirect>
    </Switch>
  </Router>
  );
}
export default App;
