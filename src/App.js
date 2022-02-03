import './App.css';
import Header from './header/Header';
import Carousel from 'react-elastic-carousel';
import Body from './homeBodyPage/Body'
import Login from './login/Login';
import Payment from './paymentPage/Payment';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from './checkoutPage/Checkout';
import {auth} from './login/firebase';
import { useStateValue } from './initialize/StateProvider';
import {useEffect} from 'react';
import CarouselContainer from './homeBodyPage/Carousel';
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(()=>{
    // runs w]once with [] when app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("USER IS >>>", authUser);
      if (authUser){
        //user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
        //user logged out
      }
    })
  },[])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <CarouselContainer/>
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
