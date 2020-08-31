import React, { useState } from 'react';
import { Table, ButtonToolbar, Button, Modal, Form } from 'react-bootstrap';

import './Field.css';

export default function Field() {
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
                        <th class='thId'>ID</th>
                        <th class='thRelationId'>Farm ID</th>
                        <th>Code</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th class='thAction'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Test</td>
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

            <Button className='mr-2 addBtn' variant='success' onClick={handleNewMillShow}>New Field</Button>

            <Modal show={newMillShow} onHide={handleNewMillClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Field</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Farm</Form.Label>
                            <Form.Control as="select">
                                <option>Farm 1</option>
                                <option>Farm 2</option>
                                <option>Farm 3</option>
                                <option>Farm 4</option>
                                <option>Farm 5</option>
                            </Form.Control>
                            <br></br>
                            <Form.Label>Code</Form.Label>
                            <Form.Control placeholder="Enter code" />
                            <br></br>
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control placeholder="Enter latitude" />
                            <br></br>
                            <Form.Label>Longitude</Form.Label>
                            <Form.Control placeholder="Enter longitude" />
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
                    <Modal.Title>Edit Field</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Farm</Form.Label>
                            <Form.Control as="select">
                                <option>Farm 1</option>
                                <option>Farm 2</option>
                                <option>Farm 3</option>
                                <option>Farm 4</option>
                                <option>Farm 5</option>
                            </Form.Control>
                            <br></br>
                            <Form.Label>Code</Form.Label>
                            <Form.Control placeholder="Edit code" />
                            <br></br>
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control placeholder="Edit latitude" />
                            <br></br>
                            <Form.Label>Longitude</Form.Label>
                            <Form.Control placeholder="Edit longitude" />
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
                    <Modal.Title>Delete Field</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you have to delete this Field?
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