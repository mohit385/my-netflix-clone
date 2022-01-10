import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Nav.css";


function Nav() {
const[show,handleShow]= useState(false);
const history = useHistory()

const transitionNavBar = () => {
    if(window.scrollY > 100) {
        handleShow(true);
    }else {
        handleShow(false);
    }
};

useEffect(()=> {
window.addEventListener("scroll", transitionNavBar);
return() => {
    window.removeEventListener("scroll", transitionNavBar);
};
},[]);


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            onClick={() => history.push("/")}
                className="nav_logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                alt="logo"
            />
            <img 
            onClick={() => history.push("/profile")}
        className="nav_avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
        </div>
    );
}

export default Nav;
