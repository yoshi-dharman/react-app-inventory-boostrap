import React from 'react'

import SignInUp from './SignInUp';
import HelloLogout from './HelloLogout';

let button;

function changeButton(props) {
    
    if(localStorage.user){
        let dataUser = JSON.parse(localStorage.user);
        button = <HelloLogout name={dataUser.name}/>
    }
    else{
        button = <SignInUp setButton={props.setButton} active={props.active} setActive={props.setActive}/>
    }

}

function LoginControl(props) { 

    changeButton(props);
    return (
        <>
            {button}
        </>
    )
}

export {changeButton}
export default LoginControl
