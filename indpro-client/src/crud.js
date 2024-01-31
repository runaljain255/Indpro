import React,{useState,useEffect} from "react";
import Table from "react-bootstrap/Table";
import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Crud = () => {
    //States 
    const [show, setShow] = useState(false);
    const [data,setData] = useState([]);

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');

    const [editId,setEditId] = useState('');
    const [editName,setEditName] = useState('');
    const [editDescription,setEditDescription] = useState('');
    const [editPrice,setEditPrice] = useState('');

    const [validationErrors, setValidationErrors] = useState({});
    const [validationEditErrors, setValidationEditErrors] = useState({});
    const [isInitialRender, setIsInitialRender] = useState(true);
    //InitData
    useEffect(()=>{
        getData();
    },[])

    useEffect(() => {
        if(isInitialRender){
            setIsInitialRender(false);
            return;
        }
        validateForm();
    }, [name,description, price]);

    useEffect(() => {
        validateEditForm();
    }, [editName,editDescription, editPrice]);
    //Handlers and Api Calls
    const handleDelete = (id) =>{
        if(window.confirm("Are you sure to delete this Product") === true)
        {
            const url = "https://localhost:7002/api/Product/"+id;
            axios.delete(url)
            .then((result)=>{
                getData();
                clear();
                toast.success('Product has been deleted!');
            })
            .catch((error)=>{
                getData();
                clear();
                toast.error('Try again later!');
            })
        }
    };

    const handleEdit = (item) =>{
        setEditId(item.id);
        setEditName(item.name);
        setEditDescription(item.description);
        setEditPrice(item.price);
        handleShow();
    };

    const handleClose = () => {
        setShow(false);
        clear();
    };
    const handleShow = () => setShow(true);
    
    const handleUpdate = () =>{
        const url = 'https://localhost:7002/api/Product/'+editId;
        const data = {
            "id":editId,
            "name": editName,
            "description": editDescription,
            "price": editPrice
          }
        axios.put(url,data)
        .then((result)=>{
            getData();
            clear();
            toast.success('Product has been updated!');
        })
        .catch((error)=>{
            getData();
            clear();
            toast.error('Try again later!');
        })
        handleClose();
    };

    const handleSubmit = () => {
        const url = 'https://localhost:7002/api/Product'
        const data = {
            "name": name,
            "description": description,
            "price": price
          }
        axios.post(url,data)
        .then((result)=>{
            getData();
            clear();
            setIsInitialRender(true);
            toast.success('Product has been added');
        })
        .catch((error)=>{
            getData();
            clear();
            setIsInitialRender(true);
            toast.error('Try again later!');
        })
    }
    
    const getData = () =>{
        axios.get('https://localhost:7002/api/Product')
        .then((result)=>{
            setData(result.data);
        })
        .catch((error)=>{
            console.log(error);
            toast.error('Try again later!')
        })
    };

    const clear = () => {
        setName('');
        setDescription('');
        setPrice('');
        setEditId('');
        setEditName('');
        setEditDescription('');
        setEditPrice('');
    }

    //Form validation
    const validateForm = () => {
        const errors = {};

        // Validate Name
        if (name.length === 0) {
            errors.name = 'Name is required';
        } else if (name.length > 50) {
            errors.name = 'Name should be less than 50 characters';
        } else {
            delete errors.name; // Clear the error if valid
        }

        // Validate Price
        if (!price) {
            errors.price = 'Price is required';
        } else if (isNaN(price)) {
            errors.price = 'Price should be a number';
        } else {
            delete errors.price; // Clear the error if valid
        }

        //Validate Description
        if (description.length > 200) {
            errors.description = 'Descriprion should be less than 200 characters';
        } else {
            delete errors.description; // Clear the error if valid
        }
        setValidationErrors(errors);
    };

    const validateEditForm = () => {
        const errors = {};

        console.log(editName);
        // Validate Edit Name
        if (editName.length === 0) {
            errors.editName = 'Name is required';
        } else if (editName.length > 50) {
            errors.editName = 'Name should be less than 50 characters';
        } else {
            delete errors.editName; // Clear the error if valid
        }


        //Validate Edit Price
        if (!editPrice) {
            errors.editPrice = 'Price is required';
        } else if (isNaN(editPrice)) {
            errors.editPrice = 'Price should be a number';
        } else {
            delete errors.editPrice; // Clear the error if valid
        }


        // Validate Edit Name
        if (editDescription.length > 50) {
            errors.editDescription = 'Description should be less than 200 characters';
        } else {
            delete errors.editDescription; // Clear the error if valid
        }
        setValidationEditErrors(errors);
    };

    return(
        <Fragment>
            <ToastContainer></ToastContainer>
            <Container className="my-3">
        <Row className="justify-content-center">
            <Col xs={12} md={8} className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => {setName(e.target.value);}}
                />
                {validationErrors.name && <p className="text-danger">{validationErrors.name}</p>}
            </Col>
            <Col xs={12} md={8} className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Description"
                    value={description}
                    onChange={(e) => {setDescription(e.target.value);}}
                />
                {validationErrors.description && <p className="text-danger">{validationErrors.description}</p>}
            </Col>
            <Col xs={12} md={8} className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => {setPrice(e.target.value);}}

                />
                {validationErrors.price && <p className="text-danger">{validationErrors.price}</p>}
            </Col>
            <Col xs={12} md={8} className="mb-3">
                <button className="btn btn-primary btn-block" onClick={() => handleSubmit()}  disabled={Object.keys(validationErrors).length > 0}>
                    Submit
                </button>
            </Col>
        </Row>
    </Container>
            <div className="my-3">
                <Table striped bordered hover responsive size="sm">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Description</td>
                            <td>Price</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 ? (
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => handleEdit(item)}>
                                            Edit
                                        </button>&nbsp;
                                        <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </Table>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col xs={12} className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Name"
                                        value={editName}
                                        onChange={(e) => {setEditName(e.target.value);}}
                                    />
                                    {validationEditErrors.editName && <p className="text-danger">{validationEditErrors.editName}</p>}

                                </Col>
                                <Col xs={12} className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Description"
                                        value={editDescription}
                                        onChange={(e) => {setEditDescription(e.target.value);}}
                                    />
                                    {validationEditErrors.editDescription && <p className="text-danger">{validationEditErrors.editDescription}</p>}

                                </Col>
                                <Col xs={12} className="mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Price"
                                        value={editPrice}
                                        onChange={(e) => {
                                            setEditPrice(e.target.value);
                                        }}
                                    
                                    />
                                    {validationEditErrors.editPrice && <p className="text-danger">{validationEditErrors.editPrice}</p>}

                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdate} disabled={Object.keys(validationEditErrors).length > 0}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Fragment>

    )
}

export default Crud;