import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { URL_BACK } from './utils/url'
import './App.css'

import Navigation from './components/Navigation';

export default function App() {

    function socketConnect() {
        const socketio = require('socket.io-client')(URL_BACK);

        socketio.emit('join');
        socketio.on("changed", function (msg) {
            setAlertMessage(msg.message);
            setShowAlert(true);
        });
    }

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    socketConnect();

    return (
        <>
            <Alert show={showAlert} variant="success">
                <Alert.Heading>{alertMessage}</Alert.Heading>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => { setShowAlert(false); setAlertMessage('') }} variant="outline-success">
                        Close me!
                    </Button>
                </div>
            </Alert>

            <Navigation />
        </>
    );
}