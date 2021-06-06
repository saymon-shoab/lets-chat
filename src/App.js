import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { auth } from './Components/Firebase/Firebase';
import LetsMassage from './Components/LetsMassage/LetsMassage';
import Login from './Components/Login/Login';
import { selectUser, login, logout } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user login
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      }else{
         //user logout
         dispatch(logout());
      }
    })
  },[])
  return (
    <div className="App">
     { user? <LetsMassage /> : <Login /> }
    </div>
  );
}

export default App;
