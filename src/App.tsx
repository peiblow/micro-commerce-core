import React from 'react';

import NavBar from './containers/Nav'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// const Products = React.lazy(() => import('products/Products'));
import Products from 'products/Products'
import Checkout from 'checkout/Checkout'

function CoreApp() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar>
          <Switch>
            <Route path='/app' component={() => <Products />} />
            <Route path='/checkout' render={() => <Checkout />} />
            <Route component={() => <h3>Not Found</h3>} />
          </Switch>
        </NavBar>
      </BrowserRouter>
    </div>
  );
}

export default CoreApp;
