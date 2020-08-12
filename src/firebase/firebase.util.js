import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyC3p6ts0F2JXVOscNuZwAYtp454XaoTXzI",
    authDomain: "e-comm-f1e48.firebaseapp.com",
    databaseURL: "https://e-comm-f1e48.firebaseio.com",
    projectId: "e-comm-f1e48",
    storageBucket: "e-comm-f1e48.appspot.com",
    messagingSenderId: "635848578154",
    appId: "1:635848578154:web:9a5f49a6e0863a40926613",
    measurementId: "G-6TTVLCPP8G"
  };


  firebase.initializeApp(config);
  

  export const createUserProfileDocument = async (userAuth,) => {
    if(!userAuth) 
    return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot =await userRef.get();
    if(!snapShot.exist){
     // console.log("1");
    //  console.log(userAuth);
      const {displayName,email,photoURL} = userAuth;
      const createdAt = new Date();
     
      
       try {
         await userRef.set({
              displayName,
              email,
              createdAt,
               photoURL,
              //...additionalData
         });
       }catch (error){
           console.log('error creating user', error.message);
       }
    }
    return userRef;

  }
   
  



export const auth =firebase.auth();
export const firestore =firebase.firestore();


const provider = new  firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });


export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

export default firebase;
