import React from 'react';
import {Route, Switch,BrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage/homepage.component';
import './App.css';
import ShopPage from "./pages/shop/shop.component"


function App() {
  return ( 
    <BrowserRouter>
    <div>
    <Switch>
     <Route exact  path='/' component={Homepage}/>
     <Route  path='/shop' component={ShopPage}/>
    
    </Switch></div>
    </BrowserRouter>
  );
}

export default App;
 