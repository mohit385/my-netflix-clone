import React, { useState } from 'react';
import "./Loginscreen.css";
import SignupScreen from './SignupScreen';
import  Typewriter  from 'typewriter-effect';

function LoginScreen() {

    const [signIn, setSignIn]=useState(false);

    return (
        <div className="loginScreen">
           <div className="loginScreen_background">
           <img  className="loginScreen_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
            alt=""/>
           <button onClick={()=> setSignIn(true)}
           className="loginScreen_button">Sign In</button>
            
            <div className="loginScreen_gradient"/>
            </div> 
           <div className="loginScreen_body">
           {signIn?(
               <SignupScreen/>
           ) : (
            <>
            <h1 className="typediv">
               <Typewriter
                    onInit={(typewriter)=> {

                    typewriter
                    
                    .typeString("Unlimited films, TV programmes and more.")
                        
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Watch anywhere. Cancel at any time.")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Ready to watch? ") //Enter your email to create or restart your membership.
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Enter your email to create or restart your membership.")
                    .start();
                    }}
                
               />
            </h1>
           

            <div className="loginScreen_input">
                <form>
                    <input type="email" placeholder="Email Address"/>
                    <button onClick={() => setSignIn(true)}
                    className="loginScreen_getStarted">GET STARTED</button>
                </form>
            </div>
             </>
           )}
            
           </div>

        </div>
    );
}

export default LoginScreen;
