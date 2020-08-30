import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Row, Navbar, Nav } from 'react-bootstrap';

import Home from './Home/index';
import Mill from './Mill/index';
import Havest from './Havest/index';
import Farm from './Farm/index';
import Field from './Field/index';

export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Row className='mt-3 ml-4'>
          <Navbar>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav>
                <NavLink to="/home" className='p-4 bg-primary text-white'>Home</NavLink>
                <NavLink to="/mill" className='p-4 bg-primary text-white'>Mill</NavLink>
                <NavLink to="/havest" className='p-4 bg-primary text-white'>Havest</NavLink>
                <NavLink to="/farm" className='p-4 bg-primary text-white'>Farm</NavLink>
                <NavLink to="/field" className='p-4 bg-primary text-white'>Field</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Row className='mt-3 ml-5'>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/mill" component={Mill} />
            <Route path="/havest" component={Havest} />
            <Route path="/farm" component={Farm} />
            <Route path="/field" component={Field} />
          </Switch>
        </Row>
      </BrowserRouter>
    </>
  );
}