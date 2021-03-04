import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import InventoryItem from '../components/InventoryItem';
import ModalEdit from '../components/ModalEdit';
import LoginControl from '../components/LoginControl';

import { Accordion, Button, Form, Spinner } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

import styled from 'styled-components';

//Style Components============================================
const LabelBold = styled.label`
    font-weight: 700!important;
`;

function Inventory(props) {
    let history = useHistory();
    let url = "https://6023acfe6bf3e6001766b5db.mockapi.io/inventory";
    const [inventory, setInventory] = useState("");         //Inven Data
    const [invenEdit, setInvenEdit] = useState("");         //Inven ID

    //MODAL=====
    const [show, setShow] = useState(false);                //Show Modal or Close
    const [input, setInput] = useState("");                 //Input Modal
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setInput("");
        setShow(true);
    };

    useEffect(()=>{
        if(!localStorage.user){
            alert("Anda belum login!");
            props.setActive("Sign In");
            props.setButton(<LoginControl setButton={props.setButton} active={"Sign In"} setActive={props.setActive}/>)
            history.push("/login");
        }else{
            axios.get(url)
            .then((response) => setInventory(response.data))
            .catch(err => "ada error : "+err);
        }
    }, [history, url, props]);

    function submitHandle(e){
        e.preventDefault();
        
        let newInventory = e.target.inputInventoryItem.value;
        
        axios.post(url, {inventory : newInventory})
        .then((result) => setInventory([...inventory, result.data]))
        .catch(err => "ada error : "+err);

        e.target.inputInventoryItem.value = "";
    }

    return (
        <>
        {!localStorage.user || inventory === ""
            ? 
            <Row className="mt-5 justify-content-center">
                <Spinner className="mt-5" animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>
            </Row>
            :
            <>
            
            <ModalEdit invenEdit={invenEdit} setInvenEdit={setInvenEdit}
            inventory={inventory} setInventory={setInventory}
            show={show} handleClose={handleClose} handleShow={() => handleShow}
            input={input} setInput={setInput}
            url={url} clear={""}/>

            <Row className="mt-5">
                <Col >
                    <h2>Inventory</h2>
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col className="px-4">
                    <Form onSubmit={submitHandle}>
                    <Form.Group controlId="formBasicEmail">
                        <LabelBold>Add Inventory Item</LabelBold>
                        <Form.Control required name="inputInventoryItem" type="text" placeholder="Enter Inventory item" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Inventory{' '}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                        </svg>
                    </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="mt-4 px-4 text-center">
                    <LabelBold>Inventory Item List</LabelBold>
                </Col>
                <Col className="mt-4 px-4">
                    <Accordion>
                    {inventory.length <= 0 
                    ? <div className="text-center mt-3">
                        <h2>OOPS,THERE IS NOTHING TO SHOW HERE</h2>
                        <h5>There are 0 items on your Inventory, try to add one</h5>
                    </div> 
                    : inventory.map((item, index) => <InventoryItem key={index} eventKey={index+1} 
                    inventory={inventory} setInventory={setInventory} 
                    setInvenEdit={setInvenEdit} 
                    handleShow={handleShow}
                    url={url} id={item.id} inventoryData={item.inventory} />)
                    }
                    </Accordion>
                </Col>
            </Row>

            

            </>
        }
        
        </>
    )
}

export default Inventory
