// import React from 'react'
import React, { Switch,Route } from 'react-router-dom';

// page
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Inventory from "../pages/Inventory";

function AllRoute(props) {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/login">
                <Login setButton={props.setButton}/>
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/inventory">
                <Inventory setButton={props.setButton} setActive={props.setActive}/>
            </Route>
        </Switch>
    )
}

export default AllRoute
