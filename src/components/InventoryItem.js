import React from 'react'
import axios from 'axios';

import { Accordion, Button, Card } from 'react-bootstrap';

function InventoryItem(props) {

    function editHandle(){
        props.setInvenEdit({
            id : props.id,
            inventory : props.inventoryData,
        });
        props.handleShow();
    }

    function deleteHandle(){

        axios.delete(props.url+"/"+props.id)
        .then(result => {
            let newData = props.inventory.filter(value => value.id !== result.data.id)
            document.getElementById("inven-"+props.id).click();
            props.setInventory(newData);
        })
        .catch(err => "ada error : "+err);
    }

    return (
        
        <Card className="bg-white">
            <Accordion.Toggle className="justify-content-between d-flex cursor-pointer" id={"inven-"+props.id} as={Card.Header} eventKey={props.eventKey}>
                <li>{props.inventoryData}</li>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={props.eventKey}>
            <Card.Body className="d-flex justify-content-around">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={editHandle} className="btn btn-success">Edit Data Inventory
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <Button variant="outline-danger" onClick={deleteHandle}>Delete Data Inventory {' '}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </Button>

            </Card.Body>
            </Accordion.Collapse>
        </Card>
        
    )
}

export default InventoryItem
