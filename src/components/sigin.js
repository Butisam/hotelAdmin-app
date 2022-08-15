import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import {auth} from '../config/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'


function SignUp(){

    
    const [_email, setEmai]= useState("");
    const [_password, setPasswor]= useState("")
   
     let history  = useHistory();
    
const signIn = (_email,_password) => {
  

  signInWithEmailAndPassword(auth, _password, _email)

    .then((userCredential) => {
      console.log("signed in");
    })
    .catch((err) => {
      console.log(err);
      console.log("something went wrong");
    });
};





useEffect(()=>{

 

},[])
    return (
      <div className="cover">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true"></input>
          <div className="login">
            <form>
              <label htmlFor="chk" aria-hidden="true">
                Login
              </label>
              <input
                className="input2"
                type="email"
                name="email"
                placeholder="Email"
                required=""
                onChange={(e) => setEmai(e.target.value)}
              ></input>
              <input
                className="input2"
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
                onChange={(e) => setPasswor(e.target.value)}
              ></input>
              <button
                className="button2"
                onClick={(e) => {
                  signIn(_password,_email);
                }}
              >
                Login{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    );

}

export default SignUp;