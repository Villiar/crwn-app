import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import HomePage from './pages/homepage/HomePage';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
