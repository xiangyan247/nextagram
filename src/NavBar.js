import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
} from 'reactstrap';
import instagram from './instagram.png';
import { Link } from 'react-router-dom'
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

class NavBar extends React.Component {
    state = {
        loginOpen: false,
        signUpOpen: false,
        logoutOpen: false

    }

    toggleLogin = () => {
        this.setState({ loginOpen: !this.state.loginOpen })
    }

    toggleSignUp = () => {
        this.setState({ signUpOpen: !this.state.signUpOpen })
    }

    switchModal = () => {
        this.toggleLogin();
        this.toggleSignUp();
    }

    toggleLogout = () => {
        this.setState({ logoutOpen: !this.state.logoutOpen })
    }



    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand tag={Link} to={'/'}><h1 className="heading"> <img className="logo" src={instagram} />︱ nextagram</h1></NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <LogIn isOpen={this.state.loginOpen} toggleLogin={this.toggleLogin} switchModal={this.switchModal} />
                        </NavItem>
                        <NavItem>
                            <SignUp isOpen={this.state.signUpOpen} toggleSignUp={this.toggleSignUp} switchModal={this.switchModal} />
                        </NavItem>
                        <NavItem>
                            <Button className="logout" color="white" onClick={this.state.logoutOpen ? null : this.toggleLogout} >Logout</Button>
                        </NavItem>
                    </Nav>


                </Navbar>
            </div>
        )
    }
}

export default NavBar