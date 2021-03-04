import React from 'react'
import { useHistory } from "react-router-dom";

import { Button, Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

let registerHandle = (event, history) => {
    event.preventDefault();
    let name = event.target.nameRegister.value;
    let email = event.target.emailRegister.value;
    let pass = event.target.passwordRegister.value;
    let passCheck = event.target.passwordCheckRegister.value;
    let biodata = event.target.biodataRegister.value;

    if(pass !== passCheck){
        alert("Password anda dengan Confirm Password tidak sama!");
    }
    else{
        let url = "https://6023acfe6bf3e6001766b5db.mockapi.io/reactGallery";

        fetch(url)
        .then(respon => respon.json())
        .then(data => {

            let dataUser = data.filter((item)=>{
                return email === item.email
            });

            if(dataUser.length > 0){
                alert("Email sudah terpakai");
            }
            else{
                fetch(url,{
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name : name,
                        email : email,
                        password : pass,
                        biodata : biodata,
                    })
                }).then(respon => respon.json())
                .then()
                .catch(error => console.error("ini error "+ error))
        
                history.push("/login");
            }
        })

        

    }
}

function Register() {
    let history = useHistory();

    return (
        <>

        <Row className="text-center mt-5">
            <Col>
                <h1>Register User</h1>
            </Col>     
        </Row>
        <Row className="justify-content-center mt-4">
            <Col md={6}>
            <Form onSubmit={(event) => registerHandle(event,history)}>
                <Form.Group controlId="formNama">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required name="nameRegister" type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required name="emailRegister" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name="passwordRegister" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPasswordConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control required name="passwordCheckRegister" type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Biodata</Form.Label>
                    <Form.Control required name="biodataRegister" as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                </Form>
            </Col>
        </Row>

        </>
    )
}

export default Register
