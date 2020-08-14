import React from 'react';
import {Route, Switch,Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage.component';
import './App.css';
import ShopPage from "./pages/shop/shop.component"
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in_and_sign-up/sign-in.component'
import  { auth,createUserProfileDocument } from "./firebase/firebase.util"
import SignUpPage from './pages/sign-in_and_sign-up/sign-up.component'
import {connect } from 'react-redux';
import {setCurrentUser} from "./redux/user/user.actions"
class App extends React.Component{
  
  
   unsubscribeFromAuth = null ;
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth  = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        
         userRef.onSnapshot(snapShot =>{
           setCurrentUser({
             currentUser : {
               id : snapShot.id,
               ...snapShot.data()
             }
           });
           //console.log(this.state);
         });
      }
      setCurrentUser(userAuth);
    });
  }
   componentWillUnmount(){
     this.unsubscribeFromAuth();
   }
  
 render() {
  return ( 
    
    
     
    <div>
    <Header  />
    <Switch>
     <Route exact  path='/' component={Homepage}/>
     <Route  path='/shop' component={ShopPage}/>
     <Route exact  path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) :(<SignInPage/> )}  />
     <Route exact  path='/signup' render={()=> this.props.currentUser ? (<Redirect to='/' />) :(<SignUpPage/> )}  />
    </Switch></div>
    
  );
 }
} 

const mapStateToProps = ({user}) =>({
  currentUser:user.currentUser
});
  const mapDispatchToProps = dispatch =>({
   setCurrentUser : user =>dispatch(setCurrentUser(user))
 })
export default connect(mapStateToProps,mapDispatchToProps)(App);
 