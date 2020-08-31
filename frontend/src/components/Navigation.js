import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Container, Row, Navbar, Nav } from 'react-bootstrap';

import Home from './Home/Home';
import Mill from './Mill/Mill';
import Havest from './Havest/Havest';
import Farm from './Farm/Farm';
import Field from './Field/Field';

import './Navigation.css';

export default function Navigation() {
  return (
    <div>
      <Container fluid>
        <BrowserRouter>
          <Row>
            <Navbar>
              <Nav>
                <NavLink to="/" className='p-3 text-dark'><h5>Home</h5></NavLink>
                <NavLink to="/mill" className='p-3 text-dark'><h5>Mill</h5></NavLink>
                <NavLink to="/havest" className='p-3 text-dark'><h5>Havest</h5></NavLink>
                <NavLink to="/farm" className='p-3 text-dark'><h5>Farm</h5></NavLink>
                <NavLink to="/field" className='p-3 text-dark'><h5>Field</h5></NavLink>
              </Nav>
            </Navbar>
          </Row>

          <Row>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/mill" component={Mill} />
              <Route path="/havest" component={Havest} />
              <Route path="/farm" component={Farm} />
              <Route path="/field" component={Field} />
            </Switch>
          </Row>
        </BrowserRouter>
      </Container>
    </div>
  );
}