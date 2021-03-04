import React, { useEffect, useRef} from 'react'
import axios from 'axios';

import { Button, Form, Modal } from 'react-bootstrap';

function ModalEdit(props) {

    // const [input, setInput] = useState("")
    const inputVal = useRef("");

    function editHandle(){
        axios.put(props.url+"/"+props.invenEdit.id, {inventory : props.input})
        .then((result) => {
            let newData = props.inventory.map(item => {
                if(item.id === result.data.id){
                    return {id : item.id, inventory : result.data.inventory};
                }
                else{
                    return item;
                }
                
            })
            props.setInput("");
            props.handleClose();
            props.setInventory(newData);
        })
    }

    function newInput(e){
        props.setInput(e.target.value);
    }

    useEffect(() => {
        console.log(inputVal.current)
        if(inputVal.current === ""){
            // alert("waw");
        }
    },[])

    return (
        <>
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{props.invenEdit.inventory}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control onChange={newInput} value={props.input} name="newInventoryItem" type="text" placeholder="Enter New Inventory Item" />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={editHandle}>
            Save Changes
        </Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalEdit
