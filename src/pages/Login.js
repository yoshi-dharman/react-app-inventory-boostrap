import React from 'react'
import { useHistory } from "react-router-dom";
import LoginControl from '../components/LoginControl';
import { Button, Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

let loginHandle = (event, history, setButton) => {
    event.preventDefault();
    let email = event.target.emailLogin.value;
    let pass = event.target.passwordLogin.value;

    let url = "https://6023acfe6bf3e6001766b5db.mockapi.io/reactGallery";

        fetch(url)
        .then(respon => respon.json())
        .then(data => {

            let dataUser = data.find((item)=>{
                return email === item.email && pass === item.password
            });

            // console.log(dataUser);
            if(dataUser){
                let { password, ...userData } = dataUser;
                localStorage.user = JSON.stringify(userData);
                setButton(<LoginControl />)
                history.push("/");
            }
            else{
                alert("User tidak ditemukan! atau email dan password salah!");
                event.target.passwordLogin.value = "";
                event.target.passwordLogin.focus();
            }
        })
}

function Login(props) {
    let history = useHistory();

    return (
        <>

        {/* <Row className="border">
            <Col xs className="border border-primary">1 of 3</Col>
            <Col xs className="border border-primary">2 of 3</Col>
            <Col xs className="border border-primary">3 of 3</Col>
        </Row> */}

        <Row className="text-center mt-5">
            <Col>
                <h1>Login User</h1>
            </Col>     
        </Row>
        <Row className="justify-content-center mt-4">
            <Col md={6}>
                <Form onSubmit={(event) => loginHandle(event, history, props.setButton)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required name="emailLogin" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name="passwordLogin" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
                </Form>
            </Col>
        </Row>

        </>
    )
}

export default Login
