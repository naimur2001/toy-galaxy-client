import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import React, { createContext, useEffect, useState } from 'react';

const auth=getAuth(app)
export const AuthContext=createContext(null)
const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  
  const [user,setUser]=useState(null);
  const [load,setLoad]=useState(true);
  
  const createUser=(email,password)=>{
setLoad(true);
return createUserWithEmailAndPassword(auth,email,password);
  }

const signIn=(email,password)=>{
  setLoad(true);
  return signInWithEmailAndPassword(auth,email,password);
}
const googleSignIn=()=>{
 setLoad(true);
return signInWithPopup(auth,googleProvider)
}

const logOut=()=>{
  setLoad(true)
  return signOut(auth);
}

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
    setUser(loggedUser);
    setLoad(false);
  })
  return ()=>{
    unsubscribe();
  }
},[])

const updateInfo=(name,photo)=>{
  setLoad(true)
  return updateProfile(auth.currentUser,{
    displayName: name,photoURL:photo
  })
}


const authInfo={
  user,
  load,
  createUser,
  signIn,
  googleSignIn,
  logOut,
  updateInfo,
}
  return (
 <AuthContext.Provider value={authInfo} >
  {children}
 </AuthContext.Provider>
  );
};

export default AuthProvider;