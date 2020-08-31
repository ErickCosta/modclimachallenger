import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Figure } from 'react-bootstrap';
import localeIcon from '../../assets/locale.png';

export default function MapContent() {

    const API_KEY = '';

    const AnyReactComponent = ({ text }) => <div>{text}</div>


    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    return (
        <>
            <div style={{ height: '80vh', width: '80%', marginLeft: '10%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: API_KEY }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}>

                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="Meu ponto"
                        src={localeIcon}>
                    </AnyReactComponent>
                </GoogleMapReact>
        </div>
        </>
    );
}