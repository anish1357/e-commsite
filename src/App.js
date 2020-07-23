import React from 'react';
import {Route, Switch,BrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage/homepage.component';
import './App.css';


const Hatspage = () =>(
  <div>
    <h1> Hats Page</h1>
  </div>
)
function App() {
  return ( 
    <BrowserRouter>
    <div>
    <Switch>
     <Route exact  path='/' component={Homepage}/>
     <Route  path='/hats' component={Hatspage}/>
    
    </Switch></div>
    </BrowserRouter>
  );
}

export default App;
 