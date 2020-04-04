import React from 'react';

import {Nav, Navbar, Row, Form} from 'react-bootstrap';

import Logo from './../../assets/imgs/logo.png';

import './../../style/components/Navbar/Navbar.css';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import history from './../../services/history';

export default() => {

    function goHome(){
        history.push('/home');
    }

    return(
        <Navbar className="navbar-hallo" expand="md">
            <Navbar.Brand className="navbar-logo-img">
                <img
                src={Logo}
                className="d-inline-block align-top"
                alt="Hallo logo"
                />
            </Navbar.Brand>
            <Nav>
                <div>
                    <SearchIcon/>
                    <Form.Control type="text" />
                </div>
            </Nav>
            <Nav className="mg-right">
                <div className="button-sell button-arround" onClick={goHome}>
                    <p>Vender</p>
                </div>
            </Nav>
            <Nav className="mg-right">
                <Row className="location" onClick={goHome}>
                    <PersonOutlineIcon />
                    <p>Andrea Wade</p>
                    <ExpandMoreIcon />
                </Row>
            </Nav>
            <Nav>
                <div>
                    <NotificationsNoneIcon />
                </div>
            </Nav>
      </Navbar>
    )
};