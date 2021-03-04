import React from 'react'
import { Link } from "react-router-dom";
import LoginControl from '../components/LoginControl';


function activeNav(event,setActive,setButton){
    setActive(event.target.innerText);
    setButton(<LoginControl setButton={setButton} active={event.target.innerText} setActive={setActive}/>);
}

function SignInUp(props) {
    console.log(props.active)
    return (
        <>
            <Link onClick={(event) => activeNav(event,props.setActive,props.setButton)} to="/login" className={props.active === "Sign In" ?
                                "nav-link active" : "nav-link"}>Sign In</Link>

            <Link onClick={(event) => activeNav(event,props.setActive,props.setButton)} to="/register" className={props.active === "Sign Up" ?
                                "nav-link active" : "nav-link"}>Sign Up</Link>
        </>
    )
}

export default SignInUp
