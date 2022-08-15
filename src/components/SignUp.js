import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './signup.css'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'


function SignUp(){

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("")
    const [_email, setEmai]= useState("");
    const [_password, setPasswor]= useState("")
 console.log(_email)
 console.log(_password)
   
     let history  = useHistory();
    
    const signUp = (()=>{
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            // history.push("/dashboard") ;
        }).catch((error)=>{
            console.log(error);
        })
    })

const signIn = (_email,_password) => {
  

  signInWithEmailAndPassword(auth, _password, _email)

    .then((userCredential) => {

      // history.push("/dashboard");
      console.log("signed in");
    })
    .catch((err) => {
      console.log(err);
      console.log("something went wrong");
    });

    history.push("/dashboard");
};





useEffect(()=>{

 

},[])



    return (
      <div className="cover">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true"></input>

          <div className="signup">
            <form>
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <input
                className="input2"
                type="text"
                name="txt"
                placeholder="User name"
                required=""
              ></input>
              <input
                className="input2"
                type="email"
                name="email"
                placeholder="Email"
                required=""
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                className="input2"
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <button className="button2" onClick={signUp}>
                Sign up
              </button>
            </form>
          </div>

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