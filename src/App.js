import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './css/tailwind.css';

import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <div className="text-center">
        <header className="bg-gray-800 m-6 p-6 rounded shadow-lg">
          <h1 className="text-white text-3xl">Random User List</h1>
        </header>
        <Switch>
          <Route path="/users/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
