import React, { useState } from 'react';
import { Table, ButtonToolbar, Button, Modal, Form } from 'react-bootstrap';

import './Havest.css';

export default function Havest() {

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
                        <th className='thRelationId'>Mill ID</th>
                        <th>Code</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th className='thAction'>Actions</th>
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

            <Button className='mr-2 addBtn' variant='success' onClick={handleNewMillShow}>New Havest</Button>

            <Modal show={newMillShow} onHide={handleNewMillClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Havest</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Mill</Form.Label>
                            <Form.Control as="select">
                                <option>Mill 1</option>
                                <option>Mill 2</option>
                                <option>Mill 3</option>
                                <option>Mill 4</option>
                                <option>Mill 5</option>
                            </Form.Control>
                            <br></br>
                            <Form.Label>Code</Form.Label>
                            <Form.Control placeholder="Enter code" />
                            <br></br>
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type='date' placeholder="Start date" />
                            <br></br>
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type='date' placeholder="End date" />
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
                    <Modal.Title>Edit Havest</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Mill</Form.Label>
                            <Form.Control as="select">
                                <option>Mill 1</option>
                                <option>Mill 2</option>
                                <option>Mill 3</option>
                                <option>Mill 4</option>
                                <option>Mill 5</option>
                            </Form.Control>
                            <br></br>
                            <Form.Label>Code</Form.Label>
                            <Form.Control placeholder="Edit code" />
                            <br></br>
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type='date' placeholder="Edit start date" />
                            <br></br>
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type='date' placeholder="Edit end date" />
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
                    <Modal.Title>Delete Havest</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you have to delete this Havest?
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