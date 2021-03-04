import React from 'react'
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';

let logout = (history) => {
    localStorage.removeItem("user");
    window.location.href = "./"
    // history.push("/");
}

function HelloLogout(props) {
let history = useHistory();

    return (
        <>
            <span className="nav-link text-white">Hello, {props.name}</span>
            <Button onClick={() => {logout(history)}} variant="outline-danger">Logout</Button>
        </>
    )
}

export default HelloLogout
