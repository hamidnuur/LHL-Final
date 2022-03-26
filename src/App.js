import React, { useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout.js';
import Login from './Login.js';
import Orders from './Orders';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51KdLRdI4XYvLNYFikqNFR60Vqd5ETVQHSy4Pzc74LlDtNZbDT9ZfxqkQUW6xAC6quotz0SKUxPnT0qW4vSaTF5gw00YCgqnhB7');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / was already logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    // BEM
    <Router>
      <div className="app">
       
        <Switch>
        <Route path='/orders'>
          <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            {/* <h1> I am the payment</h1> */}
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
