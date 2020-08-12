import React from 'react';
import {Route, Switch,BrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage/homepage.component';
import './App.css';
import ShopPage from "./pages/shop/shop.component"
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in_and_sign-up/sign-in.component'
import  { auth,createUserProfileDocument } from "./firebase/firebase.util"
import SignUpPage from './pages/sign-in_and_sign-up/sign-up.component'
class App extends React.Component{
  constructor(){
    super();
    this.state = { 
      currentUser :null

    }
  }
  
   unsubscribeFromAuth = null ;
  componentDidMount(){
    this.unsubscribeFromAuth  = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        
         userRef.onSnapshot(snapShot =>{
           this.setState({
             currentUser : {
               id : snapShot.id,
               ...snapShot.data()
             }
           });
           console.log(this.state);
         });
      }
      this.setState({currentUser :userAuth})
    });
  }
   componentWillUnmount(){
     this.unsubscribeFromAuth();
   }
  
 render() {
  return ( 
    
    <BrowserRouter>
     
    <div>
    <Header currentUser={this.state.currentUser} />
    <Switch>
     <Route exact  path='/' component={Homepage}/>
     <Route  path='/shop' component={ShopPage}/>
     <Route  path='/signin' component={SignInPage}/>
     <Route path='/signup' component={SignUpPage}/>
    </Switch></div>
    </BrowserRouter>
  );
 }
}

export default App;
 