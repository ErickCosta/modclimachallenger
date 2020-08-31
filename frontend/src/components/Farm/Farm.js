import React, { useState } from 'react';
import { Table, ButtonToolbar, Button, Modal, Form } from 'react-bootstrap';

import './Farm.css';

export default function Farm() {
    const [newMillShow, setNewMillShow] = useState(false);
    const [editMillShow, setEditMillShow] = useState(false);
    const [deleteMillShow, setDeleteMillShow] = useState(false);

    const handleNewMillClose = () => setNewMillShow(false);
    const handleNewMillShow = () => setNewMillShow(true);

    const handleEditMillClose = () => setEditMillShow(false);
    const handleEditMillShow = () => setEditMillShow(true);

    const handleDeleteMillClose = () => setDeleteMillShow(false);
    const handleDeleteMillShow = () => setDeleteMillShow(true);

    return (
        <>
            <Table striped bordered responsive>
                <thead>
                    <tr>
                        <th className='thId'>ID</th>
                        <th className='thRelationId'>Havest ID</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th className='thAction'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>Test</td>
                        <td>
                            <ButtonToolbar>
                                <Button className='mr-2' variant='primary' onClick={handleEditMillShow}>Edit</Button>
                                <Button className='mr-2' variant='danger' onClick={handleDeleteMillShow}>Delete</Button>
                            </ButtonToolbar>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <Button className='mr-2 addBtn' variant='success' onClick={handleNewMillShow}>New Farm</Button>

            <Modal show={newMillShow} onHide={handleNewMillClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Farm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Havest</Form.Label>
                            <Form.Control as="select">
                                <option>Havest 1</option>
                                <option>Havest 2</option>
                                <option>Havest 3</option>
                                <option>Havest 4</option>
                                <option>Havest 5</option>
                            </Form.Control>
                            <br></br>
                            <Form.Label>Code</Form.Label>
                            <Form.Control placeholder="Enter code" />
                            <br></br>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter name" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleNewMillClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleNewMillClose}>
                        New
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={editMillShow} onHide={handleEditMillClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Farm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Havest</Form.Label>
                            <Form.Control as="select">
                                <option>Havest 1</option>
                                <option>Havest 2</option>
                                <option>Havest 3</option>
                                <option>Havest 4</option>
                                <option>Havest 5</option>
                            </Form.Control>
                            <br></br>
                            <Form.Label>Code</Form.Label>
                            <Form.Control placeholder="Edit code" />
                            <br></br>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Edit name" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleEditMillClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEditMillClose}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={deleteMillShow} onHide={handleDeleteMillClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Farm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you have to delete this Farm?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secundary" onClick={handleDeleteMillClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDeleteMillClose}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}